import { useTheme } from "@/lib/theme";

export const useVehicleHistory = () => {
    const { colors } = useTheme();

    return {
        colors,
    };
};
