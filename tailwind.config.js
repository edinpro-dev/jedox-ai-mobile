const { Colors } = require("./constants/Colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./features/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                "poppins-thin": ["Poppins_Thin"],
                "poppins-thin-italic": ["Poppins_Thin_Italic"],
                "poppins-extralight": ["Poppins_ExtraLight"],
                "poppins-extralight-italic": ["Poppins_ExtraLight_Italic"],
                "poppins-light": ["Poppins_Light"],
                "poppins-light-italic": ["Poppins_Light_Italic"],
                "poppins-regular": ["Poppins_Regular"],
                "poppins-regular-italic": ["Poppins_Regular_Italic"],
                "poppins-medium": ["Poppins_Medium"],
                "poppins-medium-italic": ["Poppins_Medium_Italic"],
                "poppins-semibold": ["Poppins_SemiBold"],
                "poppins-semibold-italic": ["Poppins_SemiBold_Italic"],
                "poppins-bold": ["Poppins_Bold"],
                "poppins-bold-italic": ["Poppins_Bold_Italic"],
                "poppins-extrabold": ["Poppins_ExtraBold"],
                "poppins-extrabold-italic": ["Poppins_ExtraBold_Italic"],
                "poppins-black": ["Poppins_Black"],
                "poppins-black-italic": ["Poppins_Black_Italic"],
            },
            colors: {
                // Base colors
                "base-content": {
                    DEFAULT: Colors.light.baseContent,
                    dark: Colors.dark.baseContent,
                },
                "base-100": {
                    DEFAULT: Colors.light.base100,
                    dark: Colors.dark.base100,
                },
                "base-200": {
                    DEFAULT: Colors.light.base200,
                    dark: Colors.dark.base200,
                },
                "base-300": {
                    DEFAULT: Colors.light.base300,
                    dark: Colors.dark.base300,
                },
                // Semantic colors
                primary: {
                    DEFAULT: Colors.light.primary,
                    dark: Colors.dark.primary,
                },
                secondary: {
                    DEFAULT: Colors.light.secondary,
                    dark: Colors.dark.secondary,
                },
                accent: {
                    DEFAULT: Colors.light.accent,
                    dark: Colors.dark.accent,
                },
                neutral: {
                    DEFAULT: Colors.light.neutral,
                    dark: Colors.dark.neutral,
                },
                // Status colors
                success: {
                    DEFAULT: Colors.light.success,
                    dark: Colors.dark.success,
                },
                "success-content": {
                    DEFAULT: Colors.light.successContent,
                    dark: Colors.dark.successContent,
                },
                warning: {
                    DEFAULT: Colors.light.warning,
                    dark: Colors.dark.warning,
                },
                "warning-content": {
                    DEFAULT: Colors.light.warningContent,
                    dark: Colors.dark.warningContent,
                },
                error: {
                    DEFAULT: Colors.light.error,
                    dark: Colors.dark.error,
                },
                "error-content": {
                    DEFAULT: Colors.light.errorContent,
                    dark: Colors.dark.errorContent,
                },
                info: {
                    DEFAULT: Colors.light.info,
                    dark: Colors.dark.info,
                },
                infoContent: {
                    DEFAULT: Colors.light.infoContent,
                    dark: Colors.dark.infoContent,
                },
                // Special colors
                disabled: {
                    DEFAULT: Colors.light.disabled,
                    dark: Colors.dark.disabled,
                },
            },
        },
    },
    plugins: [],
};
