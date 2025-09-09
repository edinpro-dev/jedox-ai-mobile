import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from "@react-navigation/native";
import React, { ReactNode, createContext, useContext } from "react";
import { View } from "react-native";
import nativeWindThemes, { Theme, darkTheme, lightTheme } from "../lib/theme";

interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    colorScheme: "light" | "dark" | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    const theme = isDark ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, isDark, colorScheme: colorScheme ?? null }}>
            <View style={[{ flex: 1 }, colorScheme === "dark" ? nativeWindThemes.dark : nativeWindThemes.light]}>
                <RNThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>{children}</RNThemeProvider>
            </View>
        </ThemeContext.Provider>
    );
}

export function useAppTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useAppTheme must be used within a ThemeProvider");
    }
    return context;
}
