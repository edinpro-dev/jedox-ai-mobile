import { useTheme } from "@/lib/theme";

const vehiclePieData = [{ label: "No of Vehicles", value: 24, color: "#06b6d4" }];

export const useDriverSchedule = () => {
    const { colors } = useTheme();

    return {
        colors,
        vehiclePieData,
    };
};
