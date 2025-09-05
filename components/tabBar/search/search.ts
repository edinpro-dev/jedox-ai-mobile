import { useTheme } from "@/lib/theme";
import { useState } from "react";

const createdData = [
    { label: "Dummy data 1", value: "data1" },
    { label: "Dummy data 2", value: "data2" },
    { label: "Dummy data 3", value: "data3" },
    { label: "Dummy data 4", value: "data4" },
    { label: "Dummy data 5", value: "data5" },
    { label: "Dummy data 6", value: "data6" },
    { label: "Dummy data 7", value: "data7" },
    { label: "Dummy data 8", value: "data8" },
]

const inspectionStatusData = [
    { label: "Incomplete", value: "incomplete" },
    { label: "Analysis in progress", value: "analysis" },
    { label: "Completed", value: "completed" },
]

export const useSearch = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
    const [createdByValue, setCreatedByValue] = useState<(string | number)[]>([]);
    const { colors } = useTheme();

    return {
        createdData,
        colors,
        selectedDate,
        setSelectedDate,
        isCalendarOpen,
        setIsCalendarOpen,
        inspectionStatusData,
        createdByValue,
        setCreatedByValue
    }
}