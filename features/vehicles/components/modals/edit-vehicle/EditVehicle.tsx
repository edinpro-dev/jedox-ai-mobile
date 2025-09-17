import { Text } from "@/components/text";
import { ModalKey } from "@/features/vehicles/hooks/useVehicle";
import { IconX } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type EditVehicleProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const EditVehicle = ({ isVisible, closeModal }: EditVehicleProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <View className="flex-1">
                <View className="flex-row items-center justify-between">
                    <Text>Edit vehicle</Text>
                    <Pressable onPress={() => closeModal("editVehicle")}>
                        <IconX size={24} color={"grey"} />
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default EditVehicle;
