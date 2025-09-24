import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useTheme } from "@/lib/theme";
import { useState } from "react";
import { pickFile } from "../components/file-upload/file-upload";

interface DriverScheduleModalState {
    addBulkAssignment: boolean;
}

export type ModalKey = keyof DriverScheduleModalState;

const vehiclePieData = [{ label: "No of Vehicles", value: 24, color: "#06b6d4" }];

const driverScheduleDummyData = [
    { id: 1, label: "Registration Number", data: ["KX24OPD", "KT24FJK", "KN24YTP", "KO24AOW", "KT24THX", "KT24CKP"] },
    { id: 2, label: "Name", data: [] },
    { id: 3, label: "Assigned Data", data: [] },
];

export const useDriverSchedule = () => {
    const rows = driverScheduleDummyData[0].data.map((_, rowIndex) =>
        driverScheduleDummyData.map((col) => {
            const cell = col.data[rowIndex];
            return cell === "" || cell === undefined ? "-" : cell;
        }),
    );

    const [driverScheduleFile, setDriverScheduleFile] = useState<string | null>(null);
    const [isDriverScheduleModalOpen, setIsDriverScheduleModalOpen] = useState<DriverScheduleModalState>({
        addBulkAssignment: false,
    });
    const { colors } = useTheme();
    const theme = useColorScheme();
    const bg = theme === "dark" ? colors.base300 : colors.base100;

    const closeModal = (key: ModalKey) => setIsDriverScheduleModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsDriverScheduleModalOpen((prev) => ({ ...prev, [key]: true }));

    const handlePickFile = async () => {
        const uri = await pickFile();
        setDriverScheduleFile(uri ?? null);
    };

    return {
        colors,
        vehiclePieData,
        bg,
        isDriverScheduleModalOpen,
        closeModal,
        openModal,
        driverScheduleFile,
        handlePickFile,
        rows,
        driverScheduleDummyData,
    };
};
