import { ErrorModal } from "@/components/modals";
import { ThemeProvider as AppThemeProvider } from "@/context/ThemeProvider";
import { errorHandlers } from "@/lib/utils";
import { setUser } from "@/redux/appSlice";
import { persistor, RootState, store } from "@/redux/store";
import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
    useFonts,
} from "@expo-google-fonts/poppins";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { router, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../global.css";

dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);

const handleError = async (error: any) => {
    if (error?.message?.includes("401") || error?.message?.includes("Unauthenticated")) {
        store.dispatch(setUser(undefined)); // To force user to re-login
        await AsyncStorage.clear();
        router.navigate("/login");
    }
    errorHandlers(error);
};

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: async (error, query) => {
            if (query?.meta?.skipGlobalError) return;
            handleError(error);
        },
    }),
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
        mutations: {
            onError: async (error) => {
                handleError(error);
            },
        },
    },
});

SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        Poppins_Thin: Poppins_100Thin,
        Poppins_Thin_Italic: Poppins_100Thin_Italic,
        Poppins_ExtraLight: Poppins_200ExtraLight,
        Poppins_ExtraLight_Italic: Poppins_200ExtraLight_Italic,
        Poppins_Light: Poppins_300Light,
        Poppins_Light_Italic: Poppins_300Light_Italic,
        Poppins_Regular: Poppins_400Regular,
        Poppins_Regular_Italic: Poppins_400Regular_Italic,
        Poppins_Medium: Poppins_500Medium,
        Poppins_Medium_Italic: Poppins_500Medium_Italic,
        Poppins_SemiBold: Poppins_600SemiBold,
        Poppins_SemiBold_Italic: Poppins_600SemiBold_Italic,
        Poppins_Bold: Poppins_700Bold,
        Poppins_Bold_Italic: Poppins_700Bold_Italic,
        Poppins_ExtraBold: Poppins_800ExtraBold,
        Poppins_ExtraBold_Italic: Poppins_800ExtraBold_Italic,
        Poppins_Black: Poppins_900Black,
        Poppins_Black_Italic: Poppins_900Black_Italic,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hide();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <AppThemeProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <QueryClientProvider client={queryClient}>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <Slot />
                            <StatusBar style="auto" />
                        </GestureHandlerRootView>
                    </QueryClientProvider>
                </PersistGate>
                <ErrorModalWrapper />
            </Provider>
        </AppThemeProvider>
    );
}

const ErrorModalWrapper = () => {
    const errorModal = useSelector((state: RootState) => state.app.errorModal);
    return <ErrorModal {...errorModal!} />;
};
