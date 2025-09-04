import { useAppTheme } from "@/context/ThemeProvider";
import { useThemeColor } from "@/hooks/useThemeColor";
import { IconChevronDown } from "@tabler/icons-react-native";
import React, { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Text } from "../text";

export interface SelectVariant {
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
    size?: "sm" | "md" | "lg";
    label?: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    search?: boolean;
    maxHeight?: number;
}

export interface SelectDataItem {
    label: string;
    value: string | number;
    [key: string]: any;
}

export interface SelectProps extends SelectVariant {
    data: SelectDataItem[];
    value?: string | number;
    onChange?: (item: SelectDataItem) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    labelField?: string;
    valueField?: string;
    className?: string;
    style?: any;
}

const Select: React.FC<SelectProps> = ({
    variant = "default",
    size = "md",
    label,
    helperText,
    error = false,
    disabled = false,
    placeholder = "Select item",
    searchPlaceholder = "Search...",
    search = true,
    maxHeight = 300,
    data,
    value,
    onChange,
    onFocus,
    onBlur,
    labelField = "label",
    valueField = "value",
    className = "",
    style,
    ...props
}) => {
    const baseColor = useThemeColor({}, "base100");
    const baseContent = useThemeColor({}, "baseContent");
    const { theme, isDark } = useAppTheme();
    const [isFocused, setIsFocused] = useState(false);

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

    const containerStyle = {
        marginBottom: helperText ? 4 : 0,
    };

    const dropdownStyle = [
        {
            height: sizeConfig[size].height,
            borderColor,
            backgroundColor,
            borderWidth: theme.borders.width,
            borderRadius: theme.spacing.radiusField,
        },
        style,
    ];

    const placeholderColor = "gray";
    const selectedTextColor = disabled ? theme.colors.neutral : textColor;

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

            <Dropdown
                {...props}
                style={dropdownStyle}
                placeholderStyle={{
                    color: placeholderColor,
                    fontSize: size === "sm" ? 14 : size === "lg" ? 18 : 14,
                    fontFamily: "Poppins_Regular",
                    paddingHorizontal: 10,
                }}
                selectedTextStyle={{
                    color: selectedTextColor,
                    fontSize: size === "sm" ? 14 : size === "lg" ? 18 : 14,
                    fontFamily: "Poppins_Regular",
                    paddingHorizontal: 10,
                }}
                inputSearchStyle={{
                    color: baseContent,
                    fontSize: size === "sm" ? 14 : size === "lg" ? 18 : 14,
                    fontFamily: "Poppins_Regular",
                    borderRadius: 6,
                }}
                iconStyle={{
                    width: 20,
                    height: 20,
                    tintColor: disabled ? theme.colors.neutral : theme.colors.baseContent,
                }}
                renderRightIcon={() => (
                    <View className="pr-2">
                        <IconChevronDown size={20} color="black" />
                    </View>
                )}
                containerStyle={{
                    backgroundColor: baseColor,
                    borderRadius: 6,
                    borderWidth: 0,
                }}
                data={data}
                search={search}
                maxHeight={maxHeight}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                searchPlaceholder={searchPlaceholder}
                value={value}
                disable={disabled}
                onChange={(item) => {
                    onChange?.(item);
                }}
                onFocus={() => {
                    if (!disabled) {
                        setIsFocused(true);
                    }
                    onFocus?.();
                }}
                onBlur={() => {
                    setIsFocused(false);
                    onBlur?.();
                }}
                renderItem={(item, selected) => (
                    <View className="p-3">
                        <Text className={`font-poppins-regular ${selected ? "text-primary" : ""}`}>
                            {item[labelField]}
                        </Text>
                    </View>
                )}
            />

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

export default Select;
