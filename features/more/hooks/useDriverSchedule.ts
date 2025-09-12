import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useTheme } from "@/lib/theme";

const vehiclePieData = [{ label: "No of Vehicles", value: 24, color: "#06b6d4" }];

export const useDriverSchedule = () => {
    const { colors } = useTheme();
    const theme = useColorScheme();
    const bg = theme === "dark" ? colors.base300 : colors.base100;

    return {
        colors,
        vehiclePieData,
        bg
    };
};
