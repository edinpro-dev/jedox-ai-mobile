import React from "react";
import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

const Card = ({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
} & ViewProps) => {
    return (
        <View className={twMerge("bg-base-100 dark:bg-base-300-dark w-full p-2 rounded-lg", className)} {...props}>
            {children}
        </View>
    );
};

export default Card;
