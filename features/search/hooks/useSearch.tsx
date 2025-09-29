import { SelectDataItem } from "@/components/select/Select";
import { Column } from "@/components/table/Table";
import { useLoader } from "@/context/LoaderProvider";
import { useTheme } from "@/lib/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export interface Data extends SelectDataItem {
    icon?: React.ReactNode;
}

export interface SearchModalState {
    settingsModal: boolean;
    calendarModal: boolean;
    deleteModal: boolean;
}

export type ModalKey = keyof SearchModalState;

interface FilteredData {
    createdBy: (string | number)[];
    inspectionStatus: (string | number)[];
    damageStatus: (string | number)[];
    defects: (string | number)[];
    approvalStatus: (string | number)[];
    inspectionType: (string | number)[];
    subLocation: (string | number)[];
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
    { label: "Off Hire Check", value: "off-hire-check" },
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
        data: ["Thu Sep 04 2025", "Fri Sep 12 2025", "Fri Sep 26 2025", "Mon Sep 29 2025"],
    },
    {
        title: "Make & Model",
        data: ["Mercedes-Benz Sprinter", "Totota Corolla", "Ford Transit", "Honda Civic"],
    },
    { title: "Created by", data: ["Dennis Sieley", "Dennis Sieley", "Dennis Sieley", "Dennis Sieley"] },
    { title: "Inspection Status", data: ["Completed", "Completed", "Analysis in progress", "Incomplete"] },
    { title: "Defects/Damages", data: ["!", "!", "!", "!"] },
    { title: "Previous Driver", data: ["Dennis Sieley", "Dennis Sieley", "Dennis Sieley", "Dennis Sieley"] },
    { title: "Approval", data: [] },
    { title: "Location Name", data: ["Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers"] },
    { title: "Sub Location", data: ["DEH1 - Bathgate", "DEH1 - Bathgate", "DEH1 - Bathgate", "DEH1 - Bathgate"] },
    {
        title: "Inspection Type",
        data: ["Start of Shift Inspection", "End of Shift Inspection", "Off Hire Check", "On Hire Check"],
    },
    { title: "Estimated Cost of repair", data: ["GBP 541,00", "GBP 542,00", "GBP 543,00", "GBP 544,00"] },
    { title: "Approved Cost of repair", data: ["N/A", "N/A", "N/A", "N/A"] },
];

const searchColumnsData = [
    { id: 1, label: "Vehicle Info", isActive: true },
    { id: 2, label: "Date", isActive: true },
    { id: 3, label: "Make & Model", isActive: true },
    { id: 4, label: "Created by", isActive: true },
    { id: 5, label: "Inspection Status", isActive: true },
    { id: 6, label: "Defects/Damages", isActive: true },
    { id: 7, label: "Previous Driver", isActive: true },
    { id: 8, label: "Approval", isActive: true },
    { id: 9, label: "Location Name", isActive: true },
    { id: 10, label: "Sub Location", isActive: true },
    { id: 11, label: "Inspection Type", isActive: true },
    { id: 12, label: "Estimated Cost of repair", isActive: true },
    { id: 13, label: "Approved Cost of repair", isActive: true },
];

export const useSearch = () => {
    //Transform data into (string | number)[][]
    const rows: (string | number)[][] = Array.from({ length: paginationData[0].data.length }, (_, rowIndex) =>
        paginationData.map((col) => col.data[rowIndex]),
    );

    const initialFilteredData: FilteredData = {
        createdBy: [],
        inspectionStatus: [],
        damageStatus: [],
        defects: [],
        approvalStatus: [],
        inspectionType: [],
        subLocation: [],
    };

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<SearchModalState>({
        settingsModal: false,
        calendarModal: false,
        deleteModal: false,
    });
    const [columns, setColumns] = useState<Column[]>(searchColumnsData);
    const [filteredData, setFilteredData] = useState<FilteredData>(initialFilteredData);
    const [filteredRows, setFilteredRows] = useState<(string | number)[][]>(rows);

    const params = useLocalSearchParams<{ value: string; key: string; t: string }>();
    const { setLoading } = useLoader();

    //toggleModal
    const closeModal = (key: ModalKey) => setIsSearchModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsSearchModalOpen((prev) => ({ ...prev, [key]: true }));

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

    //Apply filter for settings icon
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

    //Apply filter for Apply button
    const applyFilter = async () => {
        setLoading(true);
        setTimeout(() => {
            try {
                let updatedRows = [...rows];

                if (selectedDate) {
                    const colIndex = paginationData.findIndex((c) => c.title === "Date");
                    updatedRows = updatedRows.filter((row) => {
                        const rowDateStr = row[colIndex].toString();
                        const rowDate = new Date(rowDateStr);

                        return rowDate.toDateString() === selectedDate.toDateString();
                    });
                }

                if (filteredData.inspectionStatus.length > 0) {
                    const colIndex = paginationData.findIndex((c) => c.title === "Inspection Status");
                    updatedRows = updatedRows.filter((row) =>
                        filteredData.inspectionStatus.some((value) => {
                            const label = inspectionStatusData.find((item) => item.value === value)?.label;
                            return label?.toLowerCase() === row[colIndex].toString().toLowerCase();
                        }),
                    );
                }

                if (filteredData.inspectionType.length > 0) {
                    const colIndex = paginationData.findIndex((c) => c.title === "Inspection Type");
                    updatedRows = updatedRows.filter((row) =>
                        filteredData.inspectionType.some((value) => {
                            const label = inspectionTypeData.find((item) => item.value === value)?.label;
                            console.log(label);
                            return label?.toLowerCase() === row[colIndex].toString().toLowerCase();
                        }),
                    );
                }

                setFilteredRows(updatedRows);
                setPage(0);
            } finally {
                setLoading(false);
            }
        }, 1000);
    };

    //clear filters
    const clearFilters = () => {
        setFilteredData(initialFilteredData);
        setSelectedDate(null);
        setFilteredRows(rows);
        setPage(0);
        router.replace("/(app)/search");
    };

    const nextPage = () => setPage((page) => Math.min(page + 1, totalPage - 1));
    const prevPage = () => setPage((page) => Math.max(page - 1, 0));

    useEffect(() => {
        if (params.value && params.key) {
            setFilteredData((prev) => ({
                ...prev,
                [params.key]: [params.value],
            }));
        }
    }, [params.value, params.key]);

    useEffect(() => {
        applyFilter();
    }, [filteredData]);

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
        applyFilter,
        filteredRows,
        startPage,
        endPage,
        clearFilters,
    };
};
