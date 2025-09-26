import React, { createContext, useContext, useState } from "react";
import { ActivityIndicator, View } from "react-native";

interface LoaderContextType {
    loading: boolean;
    setLoading: (value: boolean) => void;
}

interface LoaderProviderProps {
    children: React.ReactNode;
}

const LoaderContext = createContext<LoaderContextType>({
    loading: false,
    setLoading: () => {},
});

export function LoaderProvider({ children }: LoaderProviderProps) {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}

            {loading && (
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        elevation: 9999,
                    }}
                >
                    <ActivityIndicator size={"large"} color={"#06b6d4"} />
                </View>
            )}
        </LoaderContext.Provider>
    );
}

export const useLoader = () => useContext(LoaderContext);
