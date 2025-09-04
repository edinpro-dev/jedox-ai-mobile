import { ErrorModalProps, User } from "@/features/shared/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
    errorModal: ErrorModalProps | undefined;
    user: User | undefined;
    token: string | undefined;
}

const initialState: AppState = {
    errorModal: undefined,
    user: undefined,
    token: undefined,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setErrorModal: (state, action: PayloadAction<ErrorModalProps | undefined>) => {
            state.errorModal = action.payload;
        },
        setUser: (state, action: PayloadAction<User | undefined>) => {
            state.user = action.payload;
        },
        setToken: (state, action: PayloadAction<string | undefined>) => {
            state.token = action.payload;
        },
    },
});

export const { setErrorModal, setUser, setToken } = appSlice.actions;

export default appSlice.reducer;
