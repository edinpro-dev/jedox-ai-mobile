import { useTheme } from "@/lib/theme";
import { useRef, useState } from "react";
import { Animated } from "react-native";

export interface VehicleModalState {
    addNewVehicle: boolean;
    addBulkVehicle: boolean;
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

export const useVehicle = () => {
    const [isStatusActive, setIsStatusActive] = useState<boolean>(false);
    const [isVehicleModalOpen, setIsVehicleModalOpen] = useState<VehicleModalState>({
        addNewVehicle: false,
        addBulkVehicle: false
    });
    const { colors } = useTheme();

    const animation = useRef(new Animated.Value(0)).current;

    //toggle active status
    const toggleStatus = () => {
        setIsStatusActive(!isStatusActive);
        Animated.timing(animation, {
            toValue: isStatusActive ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 30] //slide left and right
    });

    return {
        colors,
        fuelTypeData,
        ownershipTypeData,
        locationData,
        isVehicleModalOpen,
        setIsVehicleModalOpen,
        isStatusActive,
        toggleStatus,
        translateX
    };
};
