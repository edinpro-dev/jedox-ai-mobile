import { Text } from "@/components/text";
import { ModalKey } from "@/features/more/hooks/useChecklist";
import { IconCopy, IconTrash } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type ChecklistOptionsProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const Options = ({ isVisible, closeModal }: ChecklistOptionsProps) => {
    return (
        <Modal
            isVisible={isVisible}
            className="w-1/3 p-3 rounded absolute bottom-0 right-0 bg-base-200 dark:bg-base-200-dark"
        >
            <View className="gap-4">
                <Pressable className="active:opacity-40" onPress={() => closeModal("verticalDotModal")}>
                    <View className="flex-row items-center justify-start gap-1">
                        <IconCopy size={18} color={"#06b6d4"} />
                        <Text variant={"label-large"} color={"accent"}>
                            Duplicate
                        </Text>
                    </View>
                </Pressable>

                <Pressable className="active:opacity-40" onPress={() => closeModal("verticalDotModal")}>
                    <View className="flex-row items-center justify-start gap-1">
                        <IconTrash size={18} color={"red"} />
                        <Text variant={"label-large"} color={"error"}>
                            Delete
                        </Text>
                    </View>
                </Pressable>
            </View>
        </Modal>
    );
};

export default Options;
