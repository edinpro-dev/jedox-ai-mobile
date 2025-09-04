import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

export interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "outline"
    | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
  textClassName?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onPress,
  className = "",
  textClassName = "",
  isLoading = false,
}) => {
  const getVariantClasses = (): { button: string; text: string } => {
    const baseButtonClasses = "items-center justify-center border";

    switch (variant) {
      case "primary":
        return {
          button: `${baseButtonClasses} ${
            disabled
              ? "bg-primary/50 border-primary/50"
              : "bg-primary border-primary"
          }`,
          text: `font-poppins-semibold ${
            disabled ? "text-base-content" : "text-white"
          }`,
        };
      case "secondary":
        return {
          button: `${baseButtonClasses} ${
            disabled
              ? "bg-secondary/50 border-secondary/50"
              : "bg-secondary border-secondary"
          }`,
          text: `font-poppins-semibold ${
            disabled ? "text-base-content" : "text-white"
          }`,
        };
      case "accent":
        return {
          button: `${baseButtonClasses} ${
            disabled
              ? "bg-accent/50 border-accent/50"
              : "bg-accent border-accent"
          }`,
          text: `font-poppins-semibold ${
            disabled ? "text-base-content" : "text-white"
          }`,
        };
      case "neutral":
        return {
          button: `${baseButtonClasses} ${
            disabled
              ? "bg-neutral/50 border-neutral/50"
              : "bg-neutral border-neutral"
          }`,
          text: `font-poppins-semibold ${
            disabled ? "text-base-content" : "text-white"
          }`,
        };
      case "outline":
        return {
          button: `${baseButtonClasses} bg-transparent ${
            disabled ? "border-primary/50" : "border-primary"
          }`,
          text: `font-poppins-semibold ${disabled ? "text-primary/50" : "text-primary"}`,
        };
      case "ghost":
        return {
          button: `${baseButtonClasses} bg-transparent border-transparent`,
          text: `font-poppins-semibold ${disabled ? "text-primary/50" : "text-primary"}`,
        };
      default:
        return {
          button: baseButtonClasses,
          text: "font-poppins-semibold",
        };
    }
  };

  const getSizeClasses = (): { button: string; text: string } => {
    switch (size) {
      case "sm":
        return {
          button: "px-3 py-1.5 min-h-8",
          text: "text-sm",
        };
      case "lg":
        return {
          button: "px-6 py-3 min-h-12",
          text: "text-lg",
        };
      default: // md
        return {
          button: "px-4 py-2 min-h-10",
          text: "text-base",
        };
    }
  };

  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();

  const buttonClasses = `rounded-lg ${variantClasses.button} ${sizeClasses.button} ${className}`;
  const textClasses = `${variantClasses.text} ${sizeClasses.text} ${textClassName}`;

  return (
    <TouchableOpacity
      className={buttonClasses}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator size={24} color="white" />
      ) : (
        <Text className={textClasses}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
