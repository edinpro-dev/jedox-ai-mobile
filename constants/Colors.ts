/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * These colors are synchronized with the NativeWind theme in lib/theme.ts
 */

export const Colors = {
  light: {
    // Base colors
    base100: "#ffffff",
    base200: "#fafafa",
    base300: "#f2f2f2",
    baseContent: "#353437",

    // Semantic colors
    primary: "#7367f0",
    primaryContent: "#efedff",
    secondary: "#ec4899",
    secondaryContent: "#fef7f7",
    accent: "#06b6d4",
    accentContent: "#003544",
    neutral: "#7367f0",
    neutralContent: "#fafbff",

    // Status colors
    info: "#3b82f6",
    infoContent: "#002749",
    success: "#10b981",
    successContent: "#003320",
    warning: "#f59e0b",
    warningContent: "#462800",
    error: "#ef4444",
    errorContent: "#2d0a0a",

    // Special colors
    disabled: "#fafafa",

    // Legacy mappings for existing code
    text: "#353437", // baseContent
    background: "#ffffff", // base100
    tint: "#7367f0", // primary
    icon: "#353437", // baseContent
    tabIconDefault: "#353437", // baseContent
    tabIconSelected: "#7367f0", // primary
  },
  dark: {
    // Base colors
    base100: "#3c3d41",
    base200: "#35363a",
    base300: "#2e2f33",
    baseContent: "#f7f7f8",

    // Semantic colors
    primary: "#7367f0",
    primaryContent: "#f4f3ff",
    secondary: "#ec4899",
    secondaryContent: "#fef7f7",
    accent: "#06b6d4",
    accentContent: "#003544",
    neutral: "#7c3aed",
    neutralContent: "#ededf0",

    // Status colors
    info: "#3b82f6",
    infoContent: "#002749",
    success: "#10b981",
    successContent: "#003320",
    warning: "#f59e0b",
    warningContent: "#462800",
    error: "#ef4444",
    errorContent: "#2d0a0a",

    // Special colors
    disabled: "#fafafa",

    // Legacy mappings for existing code
    text: "#f7f7f8", // baseContent
    background: "#3c3d41", // base100
    tint: "#7c3aed", // primary
    icon: "#f7f7f8", // baseContent
    tabIconDefault: "#f7f7f8", // baseContent
    tabIconSelected: "#7c3aed", // primary
  },
};
