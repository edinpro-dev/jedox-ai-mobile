import axios from "axios";
import { Platform } from "react-native";
import { store } from "./redux/store";

// For development - use different URLs for Android vs iOS
const getBaseURL = () => {
    if (__DEV__) {
        if (Platform.OS === "android") {
            return "http://10.0.2.2:8000/api"; // Android emulator
        } else {
            return "http://localhost:8000/api"; // iOS simulator
        }
    }
    return `${process.env.EXPO_PUBLIC_API_BASE_URL}/api`;
};

const axiosClient = axios.create({
    baseURL: getBaseURL(),
    headers: {
        Accept: "application/json",
    },
    timeout: Platform.OS === "android" ? 30000 : 15000,
});

axiosClient.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.app.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosClient;
