import { useTheme } from "@/lib/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

interface Data {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

const createdData: Data[] = [
    { label: "Dummy data 1", value: "data1" },
    { label: "Dummy data 2", value: "data2" },
    { label: "Dummy data 3", value: "data3" },
    { label: "Dummy data 4", value: "data4" },
    { label: "Dummy data 5", value: "data5" },
    { label: "Dummy data 6", value: "data6" },
    { label: "Dummy data 7", value: "data7" },
    { label: "Dummy data 8", value: "data8" },
];

const inspectionStatusData: Data[] = [
    { label: "Incomplete", value: "incomplete" },
    { label: "Analysis in progress", value: "analysis" },
    { label: "Completed", value: "completed" },
];

const damageStatusData: Data[] = [
    { label: "New Damage", value: "new", icon: <AntDesign name="exclamationcircleo" size={20} color="#ef4444" /> },
    {
        label: "Existing Damages",
        value: "existing",
        icon: <AntDesign name="exclamationcircleo" size={20} color="#f59e0b" />,
    },
    { label: "No Damages", value: "no-damage", icon: <AntDesign name="check" size={24} color="#10b981" /> },
];

const defectsData: Data[] = [
    {
        label: "Checklist Defect",
        value: "checklist-defect",
        icon: <MaterialIcons name="checklist-rtl" size={24} color="#ef4444" />,
    },
    {
        label: "Safety Audit Issue ",
        value: "safety-audit",
        icon: <MaterialCommunityIcons name="truck-remove-outline" size={24} color="#ef4444" />,
    },
];

const approvalStatusData: Data[] = [
    { label: "Accepted", value: "accepted", icon: <AntDesign name="checkcircleo" size={24} color="#10b981" /> },
    { label: "Pending Review", value: "pending", icon: <AntDesign name="checkcircleo" size={24} color="#f59e0b" /> },
    { label: "Rejected", value: "rejected", icon: <AntDesign name="checkcircleo" size={24} color="#ef4444" /> },
];

const inspectionTypeData: Data[] = [
    { label: "End of Shift Inspection", value: "end-of-shift" },
    { label: "Off Hire Check", value: "of-hire-check" },
    { label: "On Hire Check", value: "on-hire-check" },
    { label: "Start of Shift Inspection", value: "start-of-shift" },
];

const subLocationData: Data[] = [{ label: "Jedox Couriers", value: "jedox-couriers" }];

// Dummy data for pagination table
const paginationData = [
    {
        title: "Vehicle Info",
        data: [
            "KT24CKL - W1V3HBFZ1SP717923",
            "KT24CKL - W1V3HBFZ1SP717923",
            "qwfdqf - W1V3HBFZ1SP717923",
            "mytty - W1V3HBFZ1SP717923",
        ],
    },
    {
        title: "Date",
        data: ["8th Sep 2025 04:24", "8th Sep 2025 04:24", "8th Sep 2025 04:24", "8th Sep 2025 04:24"],
    },
    {
        title: "Make & Model",
        data: ["Mercedes-Benz Sprinter", "Mercedes-Benz Sprinter", "Mercedes-Benz Sprinter", "Mercedes-Benz Sprinter"],
    },
    { title: "Created by ", data: ["Dennis Sieley", "Dennis Sieley", "Dennis Sieley", "Dennis Sieley"] },
    { title: "Inspection Status ", data: ["Completed", "Completed", "Completed", "Completed"] },
    { title: "Defects/Damages ", data: ["!", "!", "!", "!"] },
    { title: "Previous Driver ", data: ["Dennis Sieley", "Dennis Sieley", "Dennis Sieley", "Dennis Sieley"] },
    { title: "Approval", data: ["Pending", "Pending", "Pending", "Pending"] },
    { title: "Location Name", data: ["Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers"] },
    { title: "Sub Location", data: ["DEH1 - Bathgate", "DEH1 - Bathgate", "DEH1 - Bathgate", "DEH1 - Bathgate"] },
    {
        title: "Inspection type",
        data: [
            "End of Shift Inspection",
            "End of Shift Inspection",
            "End of Shift Inspection",
            "End of Shift Inspection",
        ],
    },
    { title: "Estimated Cost of repair", data: ["GBP 541,00", "GBP 541,00", "GBP 541,00", "GBP 541,00"] },
    { title: "Approved Cost of repair", data: ["N/A", "N/A", "N/A", "N/A"] },
];

export const useSearch = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
    const [filteredData, setFilteredData] = useState({
        createdBy: [] as (string | number)[],
        inspectionStatus: [] as (string | number)[],
        damageStatus: [] as (string | number)[],
        defects: [] as (string | number)[],
        approvalStatus: [] as (string | number)[],
        inspectionType: [] as (string | number)[],
        subLocation: [] as (string | number)[],
    });
    const [page, setPage] = useState(0);
    const totalRows = paginationData[0].data.length;

    const startPage = page * 2;
    const endPage = startPage + 2;
    const displayRows = paginationData[0].data.slice(startPage, endPage);

    const { colors } = useTheme();

    return {
        createdData,
        colors,
        selectedDate,
        setSelectedDate,
        isCalendarOpen,
        setIsCalendarOpen,
        inspectionStatusData,
        damageStatusData,
        filteredData,
        setFilteredData,
        defectsData,
        approvalStatusData,
        inspectionTypeData,
        subLocationData,
        paginationData,
        page,
        setPage,
        displayRows,
        totalRows,
        startPage,
        endPage,
    };
};
