import { useTheme } from "@/lib/theme";
import { useEffect, useState } from "react";

export interface DashboardModalState {
    editVehicleDetailsModal: boolean;
    editVehicleDamagesModal: boolean;
    inspectionReportsModal: boolean;
}

export type ModalKey = keyof DashboardModalState;

export interface InspectionReportsInterface {
    id: number;
    label: string;
    isActive: boolean;
}

export type InspectionType = "share" | "email" | "download" | null;

//Temporary data
const comparisonTableData = [
    {
        id: 1,
        label: "",
        data: [],
    },
    {
        id: 2,
        label: "Panel",
        data: [
            "Front bumper",
            "Front bumper",
            "Left Sliding Door Cladding",
            "Left Sliding Door",
            "Front bumper",
            "Left quarter panel",
        ],
    },
    { id: 3, label: "Damage Type", data: ["Scratch", "Scratch", "Scratch", "Dent 2", "Scratch", "Dent 2"] },
    {
        id: 4,
        label: "Damage id",
        data: ["lI3Pr_u4hZ", "lI3Pr_u4hZ", "lI3Pr_u4hZ", "lI3Pr_u4hZ", "lI3Pr_u4hZ", "lI3Pr_u4hZ"],
    },
    { id: 5, label: "Damage Status", data: [] },
    { id: 6, label: "Notes", data: [] },
];

const repairEstimateData = [
    {
        id: 1,
        label: "Panel",
        data: [],
    },
    { id: 2, label: "Damage description", data: [] },
    { id: 3, label: "Damage intensity", data: ["Total(GBP):"] },
    { id: 4, label: "Estimated Repair cost(GBP)", data: ["0"] },
    { id: 5, label: "Discount %", data: [] },
    { id: 6, label: "Discount(GBP)", data: ["0"] },
    { id: 7, label: "Final Repair cost(GBP)", data: ["0"] },
];

const inspectionChecklistGeneralChecks = [
    {
        id: 1,
        label: "General Checks",
        data: ["Odometer Reading", "Fuel Level", "Adblue Level", "Any warning lights on dashboard?"],
    },
    { id: 2, label: "Previous Inspection Values 29th Sep 2025 17:59", data: ["33720", "100%", "100%", "No"] },
    { id: 3, label: "Current Inspection Values 30th Sep 2025 18:17", data: ["33868", "100%", "75%", "No"] },
    {
        id: 4,
        label: "Current Inspection Notes",
        data: ["No added notes", "No added notes", "No added notes", "No added notes"],
    },
    {
        id: 5,
        label: "Current Inspection Images",
        data: ["No images added", "No images added", "No images added", "No images added"],
    },
];

const inspectionChecklistAvailableItems = [
    {
        id: 1,
        label: "Available Items",
        data: [
            "Is toolkit present?",
            "Is the jumper bag present and in good condition?",
            "Are all tyres free chunks, holes, nails and debris?",
            "Is spare wheel present?",
            "Is the trolley present in the back of the van and in good working order?",
            "Is the van completely free of rubbish, personal belongings?",
            "Is there any debris or spillages in the van , rear loading area or cockpit?",
        ],
    },
    { id: 2, label: "Previous Inspection Values 29th Sep 2025 17:59", data: ["Yes", "Yes", "Yes", "No"] },
    { id: 3, label: "Current Inspection Values 30th Sep 2025 18:17", data: ["Yes", "Yes", "Yes", "No"] },
    {
        id: 4,
        label: "Current Inspection Notes",
        data: ["No added notes", "No added notes", "No added notes", "No added notes"],
    },
    {
        id: 5,
        label: "Current Inspection Images",
        data: ["No images added", "No images added", "No images added", "No images added"],
    },
];

const inspectionChecklistFunctionalChecks = [
    {
        id: 1,
        label: "Functional Checks",
        data: ["Air Conditioning", "Wipers", "Headlights"],
    },
    { id: 2, label: "Previous Inspection Values 29th Sep 2025 17:59", data: ["Yes", "Yes", "Yes"] },
    { id: 3, label: "Current Inspection Values 30th Sep 2025 18:17", data: ["Yes", "Yes", "Yes"] },
    {
        id: 4,
        label: "Current Inspection Notes",
        data: ["No added notes", "No added notes", "No added notes"],
    },
    {
        id: 5,
        label: "Current Inspection Images",
        data: ["No images added", "No images added", "No images added"],
    },
];

const editVehicleDamages = [
    { id: 1, label: "", data: [] },
    {
        id: 2,
        label: "Panel",
        data: ["Right front door", "Lower bumper grille", "Foot step", "Foot step", "Front bumper"],
    },
    {
        id: 3,
        label: "Damage Type",
        data: ["Dent 2", "Detached", "Scratch", "Dent 2", "Scratch"],
    },
    {
        id: 4,
        label: "Damage id",
        data: ["VINhvuptZH", "VINhvuptZH", "VINhvuptZH", "VINhvuptZH", "VINhvuptZH"],
    },
    {
        id: 5,
        label: "First found on",
        data: [
            "18th Sep 2025 20:29",
            "18th Sep 2025 20:29",
            "18th Sep 2025 20:29",
            "18th Sep 2025 20:29",
            "18th Sep 2025 20:29",
        ],
    },
    {
        id: 6,
        label: "Repair Status",
        data: [
            "Pending for review",
            "Pending for review",
            "Pending for review",
            "Pending for review",
            "Pending for review",
        ],
    },
];

const inspectionReportsData: InspectionReportsInterface[] = [
    { id: 1, label: "Comparison Details", isActive: true },
    { id: 2, label: "Damage heatmap", isActive: true },
    { id: 3, label: "Estimates", isActive: true },
    { id: 4, label: "Repair Estimate: New Damages", isActive: true },
    { id: 5, label: "All Damage Panels", isActive: true },
    { id: 6, label: "Comparison Images", isActive: true },
    { id: 7, label: "Remarks", isActive: true },
    { id: 8, label: "Location", isActive: true },
    { id: 9, label: "Checklist", isActive: true },
    { id: 10, label: "Analysed Images", isActive: true },
    { id: 11, label: "Vehicle Details", isActive: true },
];

export const useDashboard = () => {
    //Temporary row data

    const comparisonRows = Array.from({ length: comparisonTableData[1].data.length }, (_, index) =>
        comparisonTableData.map((col) => col.data[index]),
    );

    const repairEstimateRows = Array.from({ length: repairEstimateData[2].data.length }, (_, index) =>
        repairEstimateData.map((col) => col.data[index]),
    );

    const generalRows = Array.from({ length: inspectionChecklistGeneralChecks[0].data.length }, (_, index) =>
        inspectionChecklistGeneralChecks.map((col) => col.data[index]),
    );

    const availableItemsRows = Array.from({ length: inspectionChecklistAvailableItems[0].data.length }, (_, index) =>
        inspectionChecklistAvailableItems.map((col) => col.data[index]),
    );

    const functionalChecksRows = Array.from(
        { length: inspectionChecklistFunctionalChecks[0].data.length },
        (_, index) => inspectionChecklistFunctionalChecks.map((col) => col.data[index]),
    );

    const vehicleDamageRows = Array.from({ length: editVehicleDamages[1].data.length }, (_, index) =>
        editVehicleDamages.map((col) => col.data[index]),
    );

    //states
    const [isDashboardModalOpen, setIsDashboardModalOpen] = useState<DashboardModalState>({
        editVehicleDetailsModal: false,
        editVehicleDamagesModal: false,
        inspectionReportsModal: false,
    });
    const [damageStepView, setDamageStepView] = useState<number>(1);
    const [inspectionReports, setInspectionReports] = useState<InspectionReportsInterface[]>(inspectionReportsData);
    const [inspectionType, setInspectionType] = useState<InspectionType>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string | number>("en-us");

    const { colors } = useTheme();

    //toggle modals
    const closeModal = (key: ModalKey) => setIsDashboardModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsDashboardModalOpen((prev) => ({ ...prev, [key]: true }));

    useEffect(() => {
        if (!isDashboardModalOpen.editVehicleDamagesModal) {
            setDamageStepView(1);
        }
    }, [isDashboardModalOpen.editVehicleDamagesModal]);

    return {
        colors,
        repairEstimateRows,
        repairEstimateData,
        comparisonRows,
        comparisonTableData,
        generalRows,
        availableItemsRows,
        functionalChecksRows,
        inspectionChecklistGeneralChecks,
        inspectionChecklistAvailableItems,
        inspectionChecklistFunctionalChecks,
        closeModal,
        openModal,
        isDashboardModalOpen,
        editVehicleDamages,
        vehicleDamageRows,
        damageStepView,
        setDamageStepView,
        inspectionType,
        setInspectionType,
        inspectionReports,
        setInspectionReports,
        selectedLanguage,
        setSelectedLanguage,
    };
};
