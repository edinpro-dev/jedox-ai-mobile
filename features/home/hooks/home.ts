import { SelectDataItem } from "@/components/select/Select";
import { useTheme } from "@/lib/theme";
import { useState } from "react";

const locationData: SelectDataItem[] = [{ label: "Jedox Couriers", value: "jedox" }];

const dateData: SelectDataItem[] = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "Custom Date Range", value: "custom" },
];

const inspectionPieData = [
    { label: "Complete", value: 231, color: "#06b6d4" },
    { label: "In Progress", value: 2, color: "#f59e0b" },
    { label: "Incomplete", value: 9, color: "#ef4444" },
];

const vehiclePieData = [
    { label: "Inspected", value: 24, color: "#06b6d4" },
    { label: "To be Inspected", value: 13, color: "#f59e0b" },
];

export const useHome = () => {
    const [selectedLocation, setSelectedLocation] = useState<SelectDataItem | null>(null);
    const [selectedDate, setSelectedDate] = useState<SelectDataItem | null>(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

    const { colors } = useTheme();

    const handleDateChange = (date: any) => {
        setSelectedDate(date);

        if (date.value === "custom") {
            setIsCalendarOpen(!isCalendarOpen);
        }
    };

    const handleCustomDateSelect = (date: Date) => {
        console.log("Custom date selected:", date);
        setIsCalendarOpen(false);
    };

    return {
        locationData,
        dateData,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        setSelectedDate,
        handleDateChange,
        handleCustomDateSelect,
        isCalendarOpen,
        setIsCalendarOpen,
        inspectionPieData,
        colors,
        vehiclePieData,
    };
};
