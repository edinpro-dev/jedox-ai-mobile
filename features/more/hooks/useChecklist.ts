import { useState } from "react";

export interface ChecklistModalState {
    addNewChecklist: boolean
}

const inspectionTypeData = [
    { label: "End of Shift Inspection", value: "end-of-shift-inspection" },
    { label: "Off Hire Check", value: "off-hire-check" },
    { label: "On Hire Check", value: "on-hire-check" },
    { label: "Start of Shift Inspection", value: "start-of-shift-inspection" }
]

export const useChecklist = () => {
    const [isChecklistModalOpen, setIsChecklistModalOpen] = useState<ChecklistModalState>({
        addNewChecklist: false
    });

    //toggle Modal 
    const closeModal = () => setIsChecklistModalOpen({ addNewChecklist: false });
    const openModal = () => setIsChecklistModalOpen({ addNewChecklist: true });

    return {
        isChecklistModalOpen,
        closeModal,
        openModal,
        inspectionTypeData
    }
}