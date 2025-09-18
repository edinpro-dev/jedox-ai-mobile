import { useTheme } from "@/lib/theme";
import { useState } from "react";

export interface AutoEmailerModalState {
    addNewEmail: boolean;
}

export type ModalKey = keyof AutoEmailerModalState

const emailerTypeData = [
    { label: "INSPECTIONCOMPLETED", value: "inspection-completed" },
    { label: "ESTIMATESREADY", value: "estimates-ready" },
    { label: "NEWDAMAGESFOUND", value: "new-damage-found" },
    { label: "INSPECTIONSUBMITTED", value: "inspection-submitted" },
];

export const useAutoEmailer = () => {
    const [emailerType, setEmailerType] = useState<string[]>([]);
    const [isAutoEmailerModalOpen, setIsAutoEmailerModalOpen] = useState<AutoEmailerModalState>({
        addNewEmail: false
    })
    const { colors } = useTheme();

    //toggle auto email modal
    const closeModal = (key: ModalKey) => setIsAutoEmailerModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsAutoEmailerModalOpen((prev) => ({ ...prev, [key]: true }));



    return {
        colors,
        openModal,
        closeModal,
        emailerTypeData,
        isAutoEmailerModalOpen
    };
};
