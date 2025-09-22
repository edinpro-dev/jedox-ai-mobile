import { useTheme } from "@/lib/theme";
import { useState } from "react";
export interface ChecklistModalState {
    addNewChecklist: boolean;
    verticalDotModal: boolean;
}

export type ModalKey = keyof ChecklistModalState;

const inspectionTypeData = [
    { label: "End of Shift Inspection", value: "end-of-shift-inspection" },
    { label: "Off Hire Check", value: "off-hire-check" },
    { label: "On Hire Check", value: "on-hire-check" },
    { label: "Start of Shift Inspection", value: "start-of-shift-inspection" },
];

const checklistTableDummyData = [
    {
        id: 1,
        label: "Name",
        data: [
            "-",
            "Bi Weekly Check",
            "Start of Shift Inspection LWB, MWB, SWB, Boxvan",
            "End of Shift Inspection, LWB, MWB, SWB, Boxvan",
            "On Hire Check, Off Hire Check, LWB, MWB, SWB, Boxvan",
        ],
    },
    {
        id: 2,
        label: "Latest Published",
        data: ["-", "9th Jun 2025 23:50"],
    },
    {
        id: 3,
        label: "Status",
        data: ["Published", "Published", "Published", "Published", "Published"],
    },
    {
        id: 4,
        label: "Alert Status",
        data: ["Not Active", "Not Active", "Not Active", "Not Active", "Not Active"],
    },
];

export const useChecklist = () => {
    const rows = checklistTableDummyData[0].data.map((_, rowIndex) =>
        checklistTableDummyData.map((col) => col.data[rowIndex]),
    );

    const [isChecklistModalOpen, setIsChecklistModalOpen] = useState<ChecklistModalState>({
        addNewChecklist: false,
        verticalDotModal: false,
    });

    const { colors } = useTheme();

    //toggle Modal
    const closeModal = (key: ModalKey) => setIsChecklistModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsChecklistModalOpen((prev) => ({ ...prev, [key]: true }));

    return {
        colors,
        isChecklistModalOpen,
        closeModal,
        openModal,
        inspectionTypeData,
        checklistTableDummyData,
        rows,
    };
};
