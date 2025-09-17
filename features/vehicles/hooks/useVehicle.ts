import { useTheme } from "@/lib/theme";
import { useRef, useState } from "react";
import { Animated } from "react-native";

export type ModalKey = "addNewVehicle" | "addBulkVehicle" | "deactivateVehicle" | "editVehicle";


export interface VehicleModalState {
    addNewVehicle: boolean;
    addBulkVehicle: boolean;
    deactivateVehicle: boolean;
    editVehicle: boolean;
}

const fuelTypeData = [
    { label: "CNG", value: "cng" },
    { label: "Diesel", value: "diesel" },
    { label: "EV", value: "ev" },
    { label: "Petrol", value: "petrol" },
    { label: "Hybrid", value: "hybrid" },
];

const ownershipTypeData = [
    { label: "Owned", value: "owned" },
    { label: "Leased", value: "diesel" },
    { label: "Rented", value: "rented" },
    { label: "Customer", value: "customer" },
];

const locationData = [{ label: "Jedox Couriers", value: "jedox" }];

const vehicleDummyData = [
    { id: 1, label: "Registration Number", data: ["WN74NBX", "WN74NBZ", "WN74NBZ", "WN74DZC", "WN74OVG", "WN740WE", "KM180NC", "CA69 MRU"] },
    { id: 2, label: "VIN", data: ["LSH14J7C2PA162263", "LSH14J7C6PA182810", "LSH14J7C6PA182810", "LSH14J7C6PA182810", "LSH14J7C6PA182810"] },
    { id: 3, label: "Make", data: ["Citroen", "Maxus", "Maxus", "Peugeot", "Ford", "Mercedes-Benz", "Ford", "Mercedes-Benz"] },
    { id: 4, label: "Model", data: ["Transit", "Transit", "Transit Connect", "Dispatch", "Transit Custom", "Transit", "Transit", "Dispatch"] },
    { id: 5, label: "Fuel Type", data: ["Diesel", "Diesel", "Diesel", "Diesel", "Diesel", "Diesel", "Diesel", "Diesel"] },
    { id: 6, label: "Ownership", data: ["Rented", "Rented", "Rented", "Rented", "Rented", "Rented", "Rented", "Rented"] },
    { id: 7, label: "Source", data: ["ENTERPRISE", "ENTERPRISE", "ENTERPRISE", "ENTERPRISE", "ENTERPRISE", "ENTERPRISE", "ENTERPRISE", "ENTERPRISE"] },
    { id: 8, label: "Location", data: ["Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "Jedox Couriers", "ENTERPRISE"] },
    { id: 9, label: "Status", data: [] },
    { id: 10, label: "Edit", data: [] },
    { id: 11, label: "History", data: [] }
]

export const useVehicle = () => {
    const rows = vehicleDummyData[0].data.map((_, item) => vehicleDummyData.map((col) => col.data?.[item] ?? ""));

    const [deactivateVehicle, setDeactivateVehicle] = useState<number[]>([]);
    const [isStatusActive, setIsStatusActive] = useState<boolean>(false);
    const [rowStatus, setRowStatus] = useState<boolean[]>(rows.map(() => false));
    const [isVehicleModalOpen, setIsVehicleModalOpen] = useState<VehicleModalState>({
        addNewVehicle: false,
        addBulkVehicle: false,
        deactivateVehicle: false,
        editVehicle: false
    });
    const { colors } = useTheme();

    const animation = useRef(new Animated.Value(0)).current;
    const animations = useRef(rows.map(() => new Animated.Value(0))).current;

    //toggleModal
    const closeModal = (key: ModalKey) => setIsVehicleModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsVehicleModalOpen((prev) => ({ ...prev, [key]: true }));



    //toggle deactivate vehicle
    const toggleIndividualRow = (rowIndex: number) => {
        setDeactivateVehicle((prev) => {
            let updated: number[];

            if (prev.includes(rowIndex)) {
                updated = prev.filter((index) => index !== rowIndex)
            } else {
                updated = [...prev, rowIndex]
            }

            if (updated.length > 0) {
                openModal("deactivateVehicle");

            } else {
                closeModal("deactivateVehicle");

            }

            return updated;
        });
    }

    const toggleAllRow = (row: any[][]) => {
        setDeactivateVehicle((prev) => {
            let updated: number[];

            if (prev.length === row.length) {
                closeModal("deactivateVehicle")
                updated = [];
            } else {
                openModal("deactivateVehicle")
                updated = row.map((_, i) => i)
            }

            if (updated.length > 0) {
                openModal("deactivateVehicle");
            } else {
                closeModal("deactivateVehicle");
            }

            return updated;
        });
    }


    //toggle add new vehicle active status
    const toggleStatus = () => {
        setIsStatusActive(!isStatusActive);
        Animated.timing(animation, {
            toValue: isStatusActive ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    //toggle individual vehicle table row active status
    const toggleRowStatus = (index: number) => {
        setRowStatus((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];

            Animated.timing(animations[index], {
                toValue: updated[index] ? 1 : 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
            return updated;
        });
    }

    // translate add new vehicle status
    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 30] //slide left and right
    });

    // translate vehicle table status
    const translateXRow = animations.map((anim) =>
        anim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 30],
        })
    );

    const selectedVehicle = deactivateVehicle.length;

    return {
        colors,
        fuelTypeData,
        ownershipTypeData,
        locationData,
        isVehicleModalOpen,
        closeModal,
        openModal,
        isStatusActive,
        toggleStatus,
        translateX,
        vehicleDummyData,
        rows,
        toggleRowStatus,
        rowStatus,
        translateXRow,
        toggleIndividualRow,
        deactivateVehicle,
        toggleAllRow,
        selectedVehicle
    };
};
