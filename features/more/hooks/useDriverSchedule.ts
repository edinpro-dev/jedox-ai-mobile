import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useTheme } from "@/lib/theme";
import { useState } from "react";
import { pickFile } from "../components/file-upload/file-upload";

interface DriverScheduleModalState {
    addBulkAssignment: boolean;
}

export type ModalKey = keyof DriverScheduleModalState;

const vehiclePieData = [{ label: "No of Vehicles", value: 24, color: "#06b6d4" }];

export const useDriverSchedule = () => {
    const [driverScheduleFile, setDriverScheduleFile] = useState<string | null>(null);
    const [isDriverScheduleModalOpen, setIsDriverScheduleModalOpen] = useState<DriverScheduleModalState>({
        addBulkAssignment: false
    });
    const { colors } = useTheme();
    const theme = useColorScheme();
    const bg = theme === "dark" ? colors.base300 : colors.base100;

    const closeModal = (key: ModalKey) => setIsDriverScheduleModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsDriverScheduleModalOpen((prev) => ({ ...prev, [key]: true }));

    const handlePickFile = async () => {
        const uri = await pickFile();
        setDriverScheduleFile(uri ?? null);
    }

    return {
        colors,
        vehiclePieData,
        bg,
        isDriverScheduleModalOpen,
        closeModal,
        openModal,
        driverScheduleFile,
        handlePickFile
    };
};
