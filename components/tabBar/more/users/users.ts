import { useTheme } from "@/lib/theme";
import { useState } from "react";

const usersDummyData = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "in-active" }
]

const userRoleDummyData = [
    { label: "Location Admin", value: "location-admin" },
    { label: "Inspector", value: "inspector" },
    { label: "Driver", value: "driver" },
]

export const useUsers = () => {
    const [usersData, setUsersData] = useState<string[]>([]);
    const [userRole, setUserRole] = useState<string[]>([]);

    const { colors } = useTheme();

    return {
        colors,
        usersDummyData,
        usersData,
        setUsersData,
        userRole,
        setUserRole,
        userRoleDummyData
    }
}