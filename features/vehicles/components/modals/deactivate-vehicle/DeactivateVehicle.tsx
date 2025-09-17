import { Text } from "@/components/text";
import { ModalKey } from "@/features/vehicles/hooks/useVehicle";
import { IconMinusVertical } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";

type DeactivateVehicleProps = {
    closeModal: (key: ModalKey) => void;
    selectedVehicle: number;
};

const DeactivateVehicle = ({ closeModal, selectedVehicle }: DeactivateVehicleProps) => {
    return (
        <View className="w-1/2 p-3 mx-auto flex-row items-center justify-center bg-black rounded border border-gray-400">
            <View className="flex-row items-center justify-center gap-1">
                <View className="flex-row items-center justify-center gap-2">
                    <Text variant={"caption"} color={"white"}>
                        {selectedVehicle}
                    </Text>
                    <Text variant={"caption"}>items selected</Text>
                </View>
                <IconMinusVertical size={20} color={"white"} />
                <Pressable onPress={() => closeModal("deactivateVehicle")}>
                    <Text variant={"label"} color={"error"}>
                        Deactivate
                    </Text>
                </Pressable>
                <IconMinusVertical size={20} color={"white"} />
                <Pressable onPress={() => closeModal("deactivateVehicle")}>
                    <Text variant={"label"} color={"accent"}>
                        Activate
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default DeactivateVehicle;
