import { Text } from "@/components/text";
import { ModalKey } from "@/features/vehicles/hooks/useVehicle";
import { IconMinusVertical } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type DeactivateVehicleProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
    selectedVehicle: number;
};

const DeactivateVehicle = ({ isVisible, closeModal, selectedVehicle }: DeactivateVehicleProps) => {
    return (
        <Modal isVisible={isVisible}>
            <View className="w-full p-3 mx-auto flex-row items-center justify-center bg-black rounded border border-gray-400">
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
        </Modal>
    );
};

export default DeactivateVehicle;
