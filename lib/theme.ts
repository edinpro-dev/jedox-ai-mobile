import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// Export legacy NativeWind themes for backward compatibility
import { vars } from "nativewind";

// Define the theme structure
export interface Theme {
    colors: {
        // Base colors
        base100: string;
        base200: string;
        base300: string;
        baseContent: string;

        // Semantic colors
        primary: string;
        primaryContent: string;
        secondary: string;
        secondaryContent: string;
        accent: string;
        accentContent: string;
        neutral: string;
        neutralContent: string;

        // Status colors
        info: string;
        infoContent: string;
        success: string;
        successContent: string;
        warning: string;
        warningContent: string;
        error: string;
        errorContent: string;

        // Special colors
        disabled: string;
        menuActiveFg: string;
        calendarBg: string;

        // Derived colors
        borderColorTable: string;
        borderColorModal: string;
    };
    spacing: {
        radiusSelector: number;
        radiusField: number;
        radiusBox: number;
        sizeSelector: number;
        sizeField: number;
    };
    borders: {
        width: number;
    };
}

export const lightTheme: Theme = {
    colors: {
        base100: Colors.light.base100,
        base200: Colors.light.base200,
        base300: Colors.light.base300,
        baseContent: Colors.light.baseContent,
        primary: Colors.light.primary,
        primaryContent: Colors.light.primaryContent,
        secondary: Colors.light.secondary,
        secondaryContent: Colors.light.secondaryContent,
        accent: Colors.light.accent,
        accentContent: Colors.light.accentContent,
        neutral: Colors.light.neutral,
        neutralContent: Colors.light.neutralContent,
        info: Colors.light.info,
        infoContent: Colors.light.infoContent,
        success: Colors.light.success,
        successContent: Colors.light.successContent,
        warning: Colors.light.warning,
        warningContent: Colors.light.warningContent,
        error: Colors.light.error,
        errorContent: Colors.light.errorContent,
        disabled: Colors.light.disabled,
        menuActiveFg: "#ffffff",
        calendarBg: Colors.light.base100,
        borderColorTable: "rgba(53, 52, 55, 0.15)", // Approximation of color-mix
        borderColorModal: "rgba(53, 52, 55, 0.15)",
    },
    spacing: {
        radiusSelector: 8, // 0.5rem = 8px
        radiusField: 8,
        radiusBox: 8,
        sizeSelector: 4, // 0.25rem = 4px
        sizeField: 4,
    },
    borders: {
        width: 1,
    },
};

export const darkTheme: Theme = {
    colors: {
        base100: Colors.dark.base100,
        base200: Colors.dark.base200,
        base300: Colors.dark.base300,
        baseContent: Colors.dark.baseContent,
        primary: Colors.dark.primary,
        primaryContent: Colors.dark.primaryContent,
        secondary: Colors.dark.secondary,
        secondaryContent: Colors.dark.secondaryContent,
        accent: Colors.dark.accent,
        accentContent: Colors.dark.accentContent,
        neutral: Colors.dark.neutral,
        neutralContent: Colors.dark.neutralContent,
        info: Colors.dark.info,
        infoContent: Colors.dark.infoContent,
        success: Colors.dark.success,
        successContent: Colors.dark.successContent,
        warning: Colors.dark.warning,
        warningContent: Colors.dark.warningContent,
        error: Colors.dark.error,
        errorContent: Colors.dark.errorContent,
        disabled: Colors.dark.disabled,
        menuActiveFg: "#ffffff",
        calendarBg: Colors.dark.base100,
        borderColorTable: "rgba(247, 247, 248, 0.15)",
        borderColorModal: "rgba(247, 247, 248, 0.15)",
    },
    spacing: {
        radiusSelector: 8,
        radiusField: 8,
        radiusBox: 8,
        sizeSelector: 4,
        sizeField: 4,
    },
    borders: {
        width: 1,
    },
};

// Hook to get the current theme
export function useTheme(): Theme {
    const colorScheme = useColorScheme();
    return colorScheme === "dark" ? darkTheme : lightTheme;
}

// Utility function to get theme colors
export function getThemeColors(colorScheme: "light" | "dark" | null) {
    return colorScheme === "dark" ? darkTheme.colors : lightTheme.colors;
}

const nativeWindThemes = {
    light: vars({
        "--color-base-100": lightTheme.colors.base100,
        "--color-base-200": lightTheme.colors.base200,
        "--color-base-300": lightTheme.colors.base300,
        "--color-base-content": lightTheme.colors.baseContent,
        "--color-primary": lightTheme.colors.primary,
        "--color-primary-content": lightTheme.colors.primaryContent,
        "--color-secondary": lightTheme.colors.secondary,
        "--color-secondary-content": lightTheme.colors.secondaryContent,
        "--color-accent": lightTheme.colors.accent,
        "--color-accent-content": lightTheme.colors.accentContent,
        "--color-neutral": lightTheme.colors.neutral,
        "--color-neutral-content": lightTheme.colors.neutralContent,
        "--color-info": lightTheme.colors.info,
        "--color-info-content": lightTheme.colors.infoContent,
        "--color-success": lightTheme.colors.success,
        "--color-success-content": lightTheme.colors.successContent,
        "--color-warning": lightTheme.colors.warning,
        "--color-warning-content": lightTheme.colors.warningContent,
        "--color-error": lightTheme.colors.error,
        "--color-error-content": lightTheme.colors.errorContent,
        "--radius-selector": "0.5rem",
        "--radius-field": "0.5rem",
        "--radius-box": "0.5rem",
        "--size-selector": "0.25rem",
        "--size-field": "0.25rem",
        "--border": "1px",
        "--menu-active-fg": lightTheme.colors.menuActiveFg,
        "--border-color-table": lightTheme.colors.borderColorTable,
        "--border-color-modal": lightTheme.colors.borderColorModal,
        "--calendar-bg": lightTheme.colors.calendarBg,
        "--color-disabled": lightTheme.colors.disabled,
    }),
    dark: vars({
        "--color-base-100": darkTheme.colors.base100,
        "--color-base-200": darkTheme.colors.base200,
        "--color-base-300": darkTheme.colors.base300,
        "--color-base-content": darkTheme.colors.baseContent,
        "--color-primary": darkTheme.colors.primary,
        "--color-primary-content": darkTheme.colors.primaryContent,
        "--color-secondary": darkTheme.colors.secondary,
        "--color-secondary-content": darkTheme.colors.secondaryContent,
        "--color-accent": darkTheme.colors.accent,
        "--color-accent-content": darkTheme.colors.accentContent,
        "--color-neutral": darkTheme.colors.neutral,
        "--color-neutral-content": darkTheme.colors.neutralContent,
        "--color-info": darkTheme.colors.info,
        "--color-info-content": darkTheme.colors.infoContent,
        "--color-success": darkTheme.colors.success,
        "--color-success-content": darkTheme.colors.successContent,
        "--color-warning": darkTheme.colors.warning,
        "--color-warning-content": darkTheme.colors.warningContent,
        "--color-error": darkTheme.colors.error,
        "--color-error-content": darkTheme.colors.errorContent,
        "--radius-selector": "0.5rem",
        "--radius-field": "0.5rem",
        "--radius-box": "0.5rem",
        "--size-selector": "0.25rem",
        "--size-field": "0.25rem",
        "--border": "1px",
        "--menu-active-fg": darkTheme.colors.menuActiveFg,
        "--border-color-table": darkTheme.colors.borderColorTable,
        "--border-color-modal": darkTheme.colors.borderColorModal,
        "--calendar-bg": darkTheme.colors.calendarBg,
        "--color-disabled": darkTheme.colors.disabled,
    }),
};

export default nativeWindThemes;
