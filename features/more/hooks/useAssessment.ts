import { useTheme } from "@/lib/theme";

export const useAssessment = () => {
    const { colors } = useTheme();

    return {
        colors,
    };
};
