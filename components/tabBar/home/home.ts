import { SelectDataItem } from "@/components/select/Select";
import { useState } from "react";

const locationData: SelectDataItem[] = [
    { label: "Jedox Couriers", value: "jedox" }
]

const dateData: SelectDataItem[] = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "Custom Date Range", value: "custom" },
]

export const useHome = () => {
    const [selectedLocation, setSelectedLocation] = useState<SelectDataItem | null>(null);
    const [selectedDate, setSelectedDate] = useState<SelectDataItem | null>(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

    const handleDateChange = (date: any) => {
        setSelectedDate(date);

        if (date.value === "custom") {
            setIsCalendarOpen(!isCalendarOpen);
        }
    }

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
        setIsCalendarOpen
    }
}