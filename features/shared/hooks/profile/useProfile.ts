import { useTheme } from "@/lib/theme";
import { useState } from "react";

export const useProfile = () => {
    const [isDarkMode, setIsDarkMode] = useState<string>("light");
    const { colors } = useTheme();

    return {
        isDarkMode,
        setIsDarkMode,
        colors,
    };
};
