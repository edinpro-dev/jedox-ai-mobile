import { SelectDataItem } from "@/components/select/Select";
import { Column } from "@/components/table/Table";
import { useTheme } from "@/lib/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export interface Data extends SelectDataItem {
    icon?: React.ReactNode;
}

export interface SearchModalState {
    settingsModal: boolean;
    calendarModal: boolean;
    deleteModal: boolean;
}

export type ModalKey = keyof SearchModalState;

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
        data: ["ADWQDDWQD - HFQFQQFQWFQF", "KT24CKL - FQFQFQFQFQ", "WQEQW - GGREHJJ4", "HHEHRREH - QFQ123FEWAFQA"],
    },
    {
        title: "Date",
        data: ["1th Sep 2025 01:28", "4th Sep 2025 09:24", "12th Sep 2025 02:24", "14th Sep 2025 03:24"],
    },
    {
        title: "Make & Model",
        data: ["Mercedes-Benz Sprinter", "Totota Corolla", "Ford Transit", "Honda Civic"],
    },
    { title: "Created by", data: ["Dennis Sieley", "Dennis Sieley", "Dennis Sieley", "Dennis Sieley"] },
    { title: "Inspection Status", data: ["Completed", "Completed", "Completed", "Completed"] },
    { title: "Defects/Damages", data: ["!", "!", "!", "!"] },
    { title: "Previous Driver", data: ["Dennis Sieley", "Dennis Sieley", "Dennis Sieley", "Dennis Sieley"] },
    { title: "Approval", data: [] },
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
    { title: "Estimated Cost of repair", data: ["GBP 541,00", "GBP 542,00", "GBP 543,00", "GBP 544,00"] },
    { title: "Approved Cost of repair", data: ["N/A", "N/A", "N/A", "N/A"] },
];

const searchColumnsData = [
    { id: 1, label: "Vehicle Info", isActive: true },
    { id: 2, label: "Date", isActive: true },
    { id: 3, label: "Make & Model", isActive: true },
    { id: 4, label: "Created by", isActive: true },
    { id: 5, label: "Inspection Status", isActive: false },
    { id: 6, label: "Defects/Damages", isActive: false },
    { id: 7, label: "Previous Driver", isActive: false },
    { id: 8, label: "Approval", isActive: true },
    { id: 9, label: "Location Name", isActive: true },
    { id: 10, label: "Sub Location", isActive: true },
    { id: 11, label: "Inspection Type", isActive: true },
    { id: 12, label: "Estimated Cost of repair", isActive: true },
    { id: 13, label: "Approved Cost of repair", isActive: true },
];

export const useSearch = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<SearchModalState>({
        settingsModal: false,
        calendarModal: false,
        deleteModal: false,
    });
    const [columns, setColumns] = useState<Column[]>(searchColumnsData);
    const [filteredData, setFilteredData] = useState({
        createdBy: [] as (string | number)[],
        inspectionStatus: [] as (string | number)[],
        damageStatus: [] as (string | number)[],
        defects: [] as (string | number)[],
        approvalStatus: [] as (string | number)[],
        inspectionType: [] as (string | number)[],
        subLocation: [] as (string | number)[],
    });

    //toggleModal
    const closeModal = (key: ModalKey) => setIsSearchModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsSearchModalOpen((prev) => ({ ...prev, [key]: true }));

    //Transform data into (string | number)[][]
    const rows: (string | number)[][] = Array.from({ length: paginationData[0].data.length }, (_, rowIndex) =>
        paginationData.map((col) => col.data[rowIndex]),
    );

    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 2;
    const totalRows = rows.length;
    const totalPage = Math.ceil(totalRows / rowsPerPage);
    const startPage = page * rowsPerPage;
    const endPage = startPage + rowsPerPage;
    const displayRows = rows.slice(startPage, endPage);

    //Colors
    const { colors } = useTheme();

    //Drag and Drop
    const handleDragEnd = ({ data }: { data: Column[] }) => {
        const fixedData = data.find((item) => item.label === "Vehicle Info");
        const draggableData = data.filter((item) => item.label !== "Vehicle Info");

        const newData = [fixedData!, ...draggableData];
        setColumns(newData);
    };

    //Toggle true or false
    const toggleActive = (id: number) => {
        setColumns((prev) =>
            prev.map((col) => {
                if (col.id === 1) return col;
                return col.id === id ? { ...col, isActive: !col.isActive } : col;
            }),
        );
    };

    //Apply filter
    const handleApply = () => {
        setColumns(columns);
        setIsSearchModalOpen((prev) => ({ ...prev, settingsModal: false }));
    };

    //Save and Apply filter
    const handleSaveAndApply = async () => {
        setColumns(columns);

        //persist save filtered columns
        await AsyncStorage.setItem("filteredColumns", JSON.stringify(columns));
        setIsSearchModalOpen((prev) => ({ ...prev, settingsModal: false }));
    };

    const nextPage = () => setPage((page) => Math.min(page + 1, totalPage - 1));
    const prevPage = () => setPage((page) => Math.max(page - 1, 0));

    return {
        createdData,
        colors,
        selectedDate,
        setSelectedDate,
        isSearchModalOpen,
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
        displayRows,
        totalPage,
        columns,
        setColumns,
        toggleActive,
        handleDragEnd,
        handleApply,
        handleSaveAndApply,
        nextPage,
        prevPage,
        closeModal,
        openModal,
    };
};
