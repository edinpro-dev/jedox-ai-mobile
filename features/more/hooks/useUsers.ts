import { useTheme } from "@/lib/theme";
import { useState } from "react";

export interface UserModalState {
    addNewUser: boolean;
    addBulkUser: boolean;
}

const usersDummyData = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "in-active" },
];

const userRoleDummyData = [
    { label: "Location Admin", value: "location-admin" },
    { label: "Inspector", value: "inspector" },
    { label: "Driver", value: "driver" },
];

const addNewUserRole = [
    { label: "Location Admin", value: "location-admin" },
    { label: "Inspector", value: "inspector" },
    { label: "Driver", value: "driver" }
];

const pdfFormatData = [
    { label: "Master", value: "master" }
]

export const useUsers = () => {
    const [usersData, setUsersData] = useState<string[]>([]);
    const [userRole, setUserRole] = useState<string[]>([]);
    const [isUserModalOpen, setIsUserModalOpen] = useState<UserModalState>({
        addNewUser: false,
        addBulkUser: false
    })

    const { colors } = useTheme();

    return {
        colors,
        usersDummyData,
        usersData,
        setUsersData,
        userRole,
        setUserRole,
        userRoleDummyData,
        isUserModalOpen,
        setIsUserModalOpen,
        addNewUserRole,
        pdfFormatData
    };
};
