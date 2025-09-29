import { SelectDataItem } from "@/components/select/Select";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useTheme } from "@/lib/theme";
import { useState } from "react";

export interface HomeModalState {
    calendarModal: boolean;
    vehicleSummaryModal: boolean;
    motStatusModal: boolean;
    taxStatusModal: boolean;
}

export type ModalKey = keyof HomeModalState;

export interface ActiveButton {
    vehicleSummaryBtn: string;
    motStatusBtn: string;
    taxStatusBtn: string;
}

export type ButtonKey = keyof ActiveButton;

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

const inspectedData = [
    { id: 1, label: "#", data: [] },
    {
        id: 2,
        label: "Registration Number",
        data: [
            "KT24TKJ",
            "KJ24BRX",
            "KX24OPD",
            "KT24FJK",
            "KN24YTP",
            "KT24TKJ",
            "KJ24BRX",
            "KX24OPD",
            "KT24FJK",
            "KN24YTP",
            "KT24TKJ",
            "KJ24BRX",
            "KX24OPD",
            "KT24FJK",
            "KN24YTP",
        ],
    },
    { id: 3, label: "Name", data: [] },
];

const toBeInspectedData = [
    { id: 1, label: "#", data: [] },
    {
        id: 2,
        label: "Registration Number",
        data: [
            "KT24TKJ",
            "KJ24BRX",
            "KX24OPD",
            "KT24FJK",
            "KN24YTP",
            "KT24TKJ",
            "KJ24BRX",
            "KX24OPD",
            "KT24FJK",
            "KN24YTP",
            "KT24TKJ",
            "KJ24BRX",
            "KX24OPD",
            "KT24FJK",
            "KN24YTP",
            "KT24TKJ",
            "KJ24BRX",
            "KX24OPD",
            "KT24FJK",
            "KN24YTP",
        ],
    },
    { id: 3, label: "Name", data: [] },
];

const motOverDueData = [
    { id: 1, label: "#", data: [] },
    { id: 2, label: "Registration Number", data: [] },
    { id: 3, label: "MOT Expiry Date" },
];

const motDueSoonData = [
    { id: 1, label: "#", data: [] },
    { id: 2, label: "Registration Number", data: [] },
    { id: 3, label: "MOT Expiry Date" },
    { id: 4, label: "Due in(days)" },
];

const taxOverDueData = [
    { id: 1, label: "#", data: [] },
    { id: 2, label: "Registration Number", data: [] },
    { id: 3, label: "Tax Expiry Date" },
];

const taxDueSoonData = [
    { id: 1, label: "#", data: [] },
    { id: 2, label: "Registration Number", data: [] },
    { id: 3, label: "Tax Expiry Date" },
    { id: 4, label: "Due in(days)" },
];

export const useHome = () => {
    const inspectedRows = inspectedData[1].data.map((_, rowIndex) =>
        inspectedData.map((col, colIndex) => {
            if (colIndex === 0) return col.data[rowIndex] ?? String(rowIndex + 1);
            return col.data[rowIndex] ?? "-";
        }),
    );

    const toBeInspectedRows = toBeInspectedData[1].data.map((_, rowIndex) =>
        toBeInspectedData.map((col, colIndex) => {
            if (colIndex === 0) return col.data[rowIndex] ?? String(rowIndex + 1);
            return col.data[rowIndex] ?? "-";
        }),
    );

    const [selectedLocation, setSelectedLocation] = useState<SelectDataItem | null>(null);
    const [selectedDate, setSelectedDate] = useState<SelectDataItem | null>(null);
    const [isHomeModalOpen, setIsHomeModalOpen] = useState<HomeModalState>({
        calendarModal: false,
        vehicleSummaryModal: false,
        motStatusModal: false,
        taxStatusModal: false,
    });
    const [selectedBtn, setSelectedBtn] = useState<ActiveButton>({
        vehicleSummaryBtn: "inspected",
        motStatusBtn: "mot-overdue",
        taxStatusBtn: "tax-overdue",
    });

    const { colors } = useTheme();
    const scheme = useColorScheme();
    const bg = scheme === "dark" ? colors.base300 : colors.base100;

    const handleDateChange = (date: any) => {
        setSelectedDate(date);

        if (date.value === "custom") {
            setIsHomeModalOpen((prev) => ({ ...prev, calendarModal: !prev.calendarModal }));
        }
    };

    const handleCustomDateSelect = (date: Date) => {
        console.log("Custom date selected:", date);
        setIsHomeModalOpen((prev) => ({ ...prev, calendarModal: false }));
    };

    //toggle modal
    const closeModal = (key: ModalKey) => setIsHomeModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsHomeModalOpen((prev) => ({ ...prev, [key]: true }));

    //set selected btn
    const setSelectedBtnHandler = (btnKey: ButtonKey, value: string) =>
        setSelectedBtn((prev) => ({ ...prev, [btnKey]: value }));

    return {
        locationData,
        dateData,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        setSelectedDate,
        handleDateChange,
        handleCustomDateSelect,
        inspectionPieData,
        colors,
        bg,
        vehiclePieData,
        isHomeModalOpen,
        closeModal,
        openModal,
        inspectedData,
        inspectedRows,
        toBeInspectedRows,
        selectedBtn,
        setSelectedBtnHandler,
        motOverDueData,
        motDueSoonData,
        taxOverDueData,
        taxDueSoonData,
    };
};
