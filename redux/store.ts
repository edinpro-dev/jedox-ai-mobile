import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { appSlice } from "./appSlice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user", "token"], // Only persist the user field from app slice
};

// Persist only the app slice
const persistedAppReducer = persistReducer(persistConfig, appSlice.reducer);

export const store = configureStore({
    reducer: {
        app: persistedAppReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
