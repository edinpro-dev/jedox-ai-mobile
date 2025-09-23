import { useTheme } from "@/lib/theme";
import { useRef, useState } from "react";
import { Animated, Easing } from "react-native";

export interface VehicleModalState {
    addNewVehicle: boolean;
    addBulkVehicle: boolean;
    deactivateVehicle: boolean;
    editVehicle: boolean;
    history: boolean;
}

export type ModalKey = keyof VehicleModalState;

export interface VehicleStatusState {
    addNewVehicleStatus: boolean;
    editVehicleTableStatus: boolean[];
    editVehicleModalStatus: boolean;
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
    const [isStatusActive, setIsStatusActive] = useState<VehicleStatusState>({
        addNewVehicleStatus: false,
        editVehicleTableStatus: rows.map(() => false),
        editVehicleModalStatus: false
    });
    const [isVehicleModalOpen, setIsVehicleModalOpen] = useState<VehicleModalState>({
        addNewVehicle: false,
        addBulkVehicle: false,
        deactivateVehicle: false,
        editVehicle: false,
        history: false
    });
    const { colors } = useTheme();

    //Status button animation add new vehicle modal
    const animation = useRef(new Animated.Value(0)).current;
    //Status button animation vehicle table
    const animations = useRef(rows.map(() => new Animated.Value(0))).current;

    //toggleModal
    const closeModal = (key: ModalKey) => setIsVehicleModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsVehicleModalOpen((prev) => ({ ...prev, [key]: true }));

    //-------------------- Vehicle checkbox logic --------------------//

    //get IndividualRow
    const getIndividualRow = (prev: number[]) => (rowIndex: number): number[] => {
        return prev.includes(rowIndex)
            ? prev.filter((index) => index !== rowIndex)
            : [...prev, rowIndex];
    }

    //get all rows
    const getAllRows = (prev: number[]) => (row: number[][]): number[] => prev.length === row.length ? [] : row.map((_, i) => i);

    //toggle deactivate/activate vehicle modal
    const toggleDeactivateActivateVehicleModal = (updated: number[]) => updated.length > 0 ? openModal("deactivateVehicle") : closeModal("deactivateVehicle");

    //checkbox in vehicle table
    const toggleIndividualRow = (rowIndex: number) => {
        setDeactivateVehicle((prev) => {
            const updated = getIndividualRow(prev)(rowIndex);
            toggleDeactivateActivateVehicleModal(updated);
            return updated;
        });
    }

    //checkbox in vehicle table
    const toggleAllRow = (row: any[][]) => {
        setDeactivateVehicle((prev) => {
            const updated = getAllRows(prev)(row);
            toggleDeactivateActivateVehicleModal(updated);
            return updated;
        });
    }

    const selectedVehicle = deactivateVehicle.length;


    //-------------------- Vehicle add new vehicle status button logic --------------------//
    //toggle add new vehicle active status
    const toggleAddNewVehicleStatus = () => {
        setIsStatusActive((prev) => ({ ...prev, addNewVehicleStatus: !prev.addNewVehicleStatus }));
        Animated.timing(animation, {
            toValue: isStatusActive.addNewVehicleStatus ? 0 : 1,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start();
    };

    //-------------------- Vehicle table status button logic --------------------//
    //get row status
    const getRowStatus = (prev: VehicleStatusState) => (rowIndex: number) => {
        return prev.editVehicleTableStatus.map((rowStatus, index) => index === rowIndex ? !rowStatus : rowStatus)
    }

    //toggle individual vehicle table row active status
    const toggleRowStatus = (index: number) => {
        setIsStatusActive((prev) => ({ ...prev, editVehicleTableStatus: getRowStatus(prev)(index) }));
        Animated.timing(animations[index], {
            toValue: isStatusActive.editVehicleTableStatus[index] ? 0 : 1,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start();
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

    //-------------------- Vehicle edit button logic --------------------//

    //toggle edit vehicle modal active status
    const toggleEditVehicleModalStatus = () => {
        setIsStatusActive((prev) => ({ ...prev, editVehicleModalStatus: !prev.editVehicleModalStatus }));
        Animated.timing(animation, {
            toValue: isStatusActive.editVehicleModalStatus ? 0 : 1,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start();
    }

    return {
        colors,
        fuelTypeData,
        ownershipTypeData,
        locationData,
        isVehicleModalOpen,
        closeModal,
        openModal,
        isStatusActive,
        toggleAddNewVehicleStatus,
        toggleEditVehicleModalStatus,
        translateX,
        vehicleDummyData,
        rows,
        toggleRowStatus,
        translateXRow,
        toggleIndividualRow,
        deactivateVehicle,
        toggleAllRow,
        selectedVehicle
    };
};
