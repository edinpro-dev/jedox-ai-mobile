import { setErrorModal } from "@/redux/appSlice";
import { store } from "@/redux/store";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

const errorHandlers = (error: unknown, customMessage?: string) => {
    let errorMessage = "";

    if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response?.data.errors) {
            errorMessage = Object.values(response.data.errors).flat().find(Boolean) as string;
        } else if (response?.data.message) {
            errorMessage = response.data.message;
        } else {
            errorMessage = customMessage || "An unexpected error occurred. Please try again or contact support.";
        }
    } else {
        errorMessage = customMessage || "An unexpected error occurred. Please try again or contact support.";
    }

    store.dispatch(setErrorModal({ visible: true, message: errorMessage }));
};

export { cn, errorHandlers };
