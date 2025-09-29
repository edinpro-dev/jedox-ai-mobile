import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/search/hooks/useSearch";
import { IconTrash } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

type DeleteRowProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const DeleteRow = ({ isVisible, closeModal }: DeleteRowProps) => {
    return (
        <Modal isVisible={isVisible}>
            <View className="flex-1 justify-center items-center">
                <View className="py-2 gap-2 w-1/2 rounded bg-base-200 dark:bg-base-200-dark">
                    <Button variant="ghost" onPress={() => closeModal("deleteModal")}>
                        <View className="flex-row items-center justify-start gap-1">
                            <IconTrash size={18} color={"red"} />
                            <Text variant={"label-large"} color={"error"}>
                                Delete
                            </Text>
                        </View>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default DeleteRow;
