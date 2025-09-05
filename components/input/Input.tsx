import { useAppTheme } from "@/context/ThemeProvider";
import { IconEye, IconEyeOff } from "@tabler/icons-react-native";
import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

export interface InputVariant {
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
    size?: "sm" | "md" | "lg";
    label?: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    iconRight?: React.ReactNode;
    isPassword?: boolean;
}

export interface InputProps extends TextInputProps, InputVariant {}

const Input: React.FC<InputProps> = ({
    variant = "default",
    size = "md",
    label,
    helperText,
    error = false,
    disabled = false,
    className = "",
    iconRight,
    style,
    isPassword = false,
    ...props
}) => {
    const { theme, isDark } = useAppTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(isPassword);

    // Determine actual variant (error takes precedence)
    const actualVariant = error ? "error" : variant;

    // Size configurations
    const sizeConfig = {
        sm: {
            padding: "px-2 py-1",
            text: "text-sm",
            height: 32,
        },
        md: {
            padding: "px-3 py-2",
            text: "text-base",
            height: 40,
        },
        lg: {
            padding: "px-4 py-3",
            text: "text-lg",
            height: 48,
        },
    };

    // Get variant colors from theme
    const getVariantColor = (variantName: string) => {
        switch (variantName) {
            case "primary":
                return theme.colors.primary;
            case "secondary":
                return theme.colors.secondary;
            case "success":
                return theme.colors.success;
            case "warning":
                return theme.colors.warning;
            case "error":
                return theme.colors.error;
            default:
                return theme.colors.base300;
        }
    };

    // Generate styles
    const borderColor = disabled
        ? theme.colors.disabled
        : isFocused
          ? getVariantColor(actualVariant)
          : theme.colors.borderColorTable;

    const backgroundColor = "white";
    const textColor = "black";

    const baseStyles = `border rounded-md font-poppins-regular ${sizeConfig[size].padding} ${sizeConfig[size].text}`;
    const combinedClassName = `${baseStyles} ${className}`.trim();

    const containerStyle = {
        marginBottom: helperText ? 4 : 0,
    };

    const inputStyle = [
        {
            height: sizeConfig[size].height,
            borderColor,
            backgroundColor,
            color: textColor,
            borderWidth: theme.borders.width,
            borderRadius: theme.spacing.radiusField,
        },
        style,
    ];

    const placeholderColor = disabled ? theme.colors.neutral : isDark ? theme.colors.base300 : "#9CA3AF";

    return (
        <View style={containerStyle}>
            {label && (
                <Text
                    className={`text-sm font-poppins-medium mb-1 ${error ? "text-error" : "text-base-content"}`}
                    style={{
                        color: error ? theme.colors.error : theme.colors.baseContent,
                    }}
                >
                    {label}
                </Text>
            )}

            <View className="relative">
                <TextInput
                    {...props}
                    className={combinedClassName}
                    style={inputStyle}
                    placeholderTextColor={placeholderColor}
                    editable={!disabled}
                    selectTextOnFocus={!disabled}
                    onFocus={(e) => {
                        setIsFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        props.onBlur?.(e);
                    }}
                    secureTextEntry={isSecureTextEntry}
                />
                <View className="absolute right-2 top-0 bottom-0 flex items-center justify-center">
                    {iconRight}
                    {isPassword && (
                        <>
                            {isSecureTextEntry ? (
                                <IconEye
                                    onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
                                    size={24}
                                    color="black"
                                />
                            ) : (
                                <IconEyeOff
                                    onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
                                    size={24}
                                    color="black"
                                />
                            )}
                        </>
                    )}
                </View>
            </View>

            {helperText && (
                <Text
                    className={`text-xs mt-1 font-poppins-medium ${error ? "text-error" : "text-base-content/60"}`}
                    style={{
                        color: error ? theme.colors.error : isDark ? theme.colors.base300 : theme.colors.neutral,
                    }}
                >
                    {helperText}
                </Text>
            )}
        </View>
    );
};

export default Input;
