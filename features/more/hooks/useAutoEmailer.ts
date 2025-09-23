import { useTheme } from "@/lib/theme";
import { useState } from "react";

export interface AutoEmailerModalState {
    addNewEmail: boolean;
    verticalDotModal: boolean;
}

export type ModalKey = keyof AutoEmailerModalState;

const emailerTypeData = [
    { label: "Inspection Completed", value: "inspection-completed" },
    { label: "Estimates Ready", value: "estimates-ready" },
    { label: "New Damages Found", value: "new-damage-found" },
    { label: "Inspection Submitted", value: "inspection-submitted" },
];

const autoEmailerTableDummyData = [
    {
        id: 1,
        label: "Recipient",
        data: ["connor@jedox-couriers.co.uk", "craig@jedox-couriers.co.uk", "edward@jedox-couriers.co.uk", "seonad@jedox-couriers.co.uk"]
    },
    {
        id: 2,
        label: "Emailer types",
        data: ["New Damage Found", "New Damage Found", "New Damage Found", "New Damage Found"]
    },
    {
        id: 3,
        label: "Location",
        data: ["Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers"]
    }
]

export const useAutoEmailer = () => {
    const rows = autoEmailerTableDummyData[0].data.map((_, rowIndex) => autoEmailerTableDummyData.map((col) => col.data[rowIndex]));

    const [emailerType, setEmailerType] = useState<string[]>([]);
    const [isAutoEmailerModalOpen, setIsAutoEmailerModalOpen] = useState<AutoEmailerModalState>({
        addNewEmail: false,
        verticalDotModal: false,
    });
    const { colors } = useTheme();

    //toggle auto email modal
    const closeModal = (key: ModalKey) => setIsAutoEmailerModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsAutoEmailerModalOpen((prev) => ({ ...prev, [key]: true }));



    return {
        colors,
        openModal,
        closeModal,
        emailerTypeData,
        isAutoEmailerModalOpen,
        autoEmailerTableDummyData,
        rows
    };
};
