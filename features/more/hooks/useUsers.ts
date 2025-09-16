import { Column } from "@/components/table/Table";
import { useTheme } from "@/lib/theme";
import { useState } from "react";

export type ModalKey = "addNewUser" | "addBulkUser" | "deactivateUser";

export interface UserModalState {
    addNewUser: boolean;
    addBulkUser: boolean;
    deactivateUser: boolean;
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

const dummyUsersData = [
    {
        id: 1,
        label: "Users",
        data: ["conor.duncan@teamjedox.co.uk", "evans.ndlovu@teamjedox.co.uk", "hammad.waheed@teamjedox.co.uk", "jedoxinspectorinternal", "connor@jedox-couriers.co.uk", "craig@jedox-couriers.co.uk", "geraldomagcalastolentino@gmail.com", "abel.hendre@teamjedox.co.uk", "abigail.logan@teamjedox.co.uk", "adam.lowin1@teamjedox.co.uk", "alexander.mcculloch@teamjedox.co.uk"]
    },
    {
        id: 2,
        label: "Name",
        data: ["conor.duncan@teamjedox.co.uk", "evans.ndlovu@teamjedox.co.uk", "hammad.waheed@teamjedox.co.uk", "", "Connor Turnbull", "Craig Ross", "geraldomagcalastolentino@gmail.com", "abel.hendre@teamjedox.co.uk", "Abigail Logan", "Adam Lowin", "alexander.mcculloch@teamjedox.co.uk"]
    },
    {
        id: 3,
        label: "Location",
        data: ["Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers"]
    },
    {
        id: 4,
        label: "Edit",
        data: []
    }
]

export const useUsers = () => {
    const [deactivateUser, setDeactivateUser] = useState<number[]>([]);
    const [columns, setColumns] = useState<Column[]>(dummyUsersData);
    const [usersData, setUsersData] = useState<string[]>([]);
    const [userRole, setUserRole] = useState<string[]>([]);
    const [isUserModalOpen, setIsUserModalOpen] = useState<UserModalState>({
        addNewUser: false,
        addBulkUser: false,
        deactivateUser: false
    });

    const { colors } = useTheme();

    // build rows data
    const rows = dummyUsersData[0].data.map((_, rowIndex) =>
        dummyUsersData.map(col => col.data?.[rowIndex] ?? "")
    );

    //toggleModal
    const closeModal = (key: ModalKey) => setIsUserModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsUserModalOpen((prev) => ({ ...prev, [key]: true }));


    //toggle deactivate user
    const toggleIndividualRow = (rowIndex: number) => {
        setDeactivateUser((prev) => {
            let updated: number[];

            if (prev.includes(rowIndex)) {
                updated = prev.filter((index) => index !== rowIndex)
            } else {
                updated = [...prev, rowIndex]
            }

            if (updated.length > 0) {
                openModal("deactivateUser");
            } else {
                closeModal("deactivateUser");
            }

            return updated;
        });
    }

    const toggleAllRow = (row: any[][]) => {
        setDeactivateUser((prev) => {
            let updated: number[];

            if (prev.length === row.length) {
                closeModal("deactivateUser")
                updated = [];
            } else {
                openModal("deactivateUser")
                updated = row.map((_, i) => i)
            }

            if (updated.length > 0) {
                openModal("deactivateUser");
            } else {
                closeModal("deactivateUser");
            }

            return updated;
        });
    }

    const selectedUser = deactivateUser.length;

    return {
        colors,
        usersDummyData,
        usersData,
        setUsersData,
        userRole,
        setUserRole,
        userRoleDummyData,
        isUserModalOpen,
        closeModal,
        openModal,
        addNewUserRole,
        pdfFormatData,
        dummyUsersData,
        columns,
        rows,
        deactivateUser,
        toggleAllRow,
        toggleIndividualRow,
        selectedUser
    };
};
