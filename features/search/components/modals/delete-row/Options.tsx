import { Text } from "@/components/text";
import { ModalKey } from "@/features/search/hooks/useSearch";
import { IconTrash } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type DeleteRowProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const DeleteRow = ({ isVisible, closeModal }: DeleteRowProps) => {
    return (
        <Modal
            isVisible={isVisible}
            className="w-1/3 p-3 rounded absolute bottom-0 right-0 bg-base-200 dark:bg-base-200-dark"
        >
            <View className="gap-4">
                <Pressable className="active:opacity-40" onPress={() => closeModal("deleteModal")}>
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

export default DeleteRow;
