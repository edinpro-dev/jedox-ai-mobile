import { useTheme } from "@/lib/theme";
import { useState } from "react";

const emailerTypeData = [
    { label: "INSPECTIONCOMPLETED", value: "inspection-completed" },
    { label: "ESTIMATESREADY", value: "estimates-ready" },
    { label: "NEWDAMAGESFOUND", value: "new-damage-found" },
    { label: "INSPECTIONSUBMITTED", value: "inspection-submitted" },
];

export const useAutoEmailer = () => {
    const [emailerType, setEmailerType] = useState<string[]>([]);
    const { colors } = useTheme();

    return {
        colors,
        emailerTypeData,
    };
};
