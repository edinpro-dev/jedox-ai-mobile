import { cn } from "@/lib/utils"; // You may need to create this utility function
import { cva, type VariantProps } from "class-variance-authority";
import { Text as RNText, TextProps } from "react-native";

const textVariants = cva("", {
    variants: {
        variant: {
            // Display variants - for large, prominent text
            display: "text-4xl font-poppins-bold leading-tight tracking-tight",

            // Heading variants - for section headers
            h1: "text-3xl font-poppins-bold leading-tight",
            h2: "text-2xl font-poppins-semibold leading-snug",
            h3: "text-xl font-poppins-semibold leading-snug",
            h4: "text-lg font-poppins-medium leading-normal",

            // Body variants - for main content
            body: "text-base font-poppins-regular leading-relaxed",
            "body-large": "text-lg font-poppins-regular leading-relaxed",
            "body-small": "text-sm font-poppins-regular leading-normal",

            // Label variants - for form labels and UI elements
            label: "text-sm font-poppins-medium leading-none",
            "label-large": "text-base font-poppins-medium leading-none",
            "label-small": "text-xs font-poppins-medium leading-none",

            // Caption variants - for supplementary text
            caption: "text-xs font-poppins-regular leading-tight",
            "caption-large": "text-sm font-poppins-regular leading-tight",

            // Button variants - for interactive elements
            button: "text-base font-poppins-medium leading-none",
            "button-small": "text-sm font-poppins-medium leading-none",
            "button-large": "text-lg font-poppins-medium leading-none",
        },
        color: {
            default: "text-[var(--color-base-content)]",
            muted: "text-[color-mix(in_oklch,var(--color-base-content)_70%,transparent)]",
            subtle: "text-[color-mix(in_oklch,var(--color-base-content)_50%,transparent)]",
            disabled: "text-[color-mix(in_oklch,var(--color-base-content)_30%,transparent)]",
            primary: "text-[var(--color-primary)]",
            secondary: "text-[var(--color-secondary)]",
            success: "text-[var(--color-success)]",
            warning: "text-[var(--color-warning)]",
            error: "text-[var(--color-error)]",
            white: "text-white",
            black: "text-black",
            accent: "text-[var(--color-accent)]",
            info: "text-[var(--color-info)]",
            neutral: "text-[var(--color-neutral)]",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        },
    },
    defaultVariants: {
        variant: "body",
        color: "default",
        align: "left",
    },
});

export interface TextComponentProps extends TextProps, VariantProps<typeof textVariants> {
    className?: string;
}

const Text = ({ children, variant, color, align, className, ...props }: TextComponentProps) => {
    return (
        <RNText {...props} className={cn(textVariants({ variant, color, align }), className)}>
            {children}
        </RNText>
    );
};

export default Text;
