import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/more/hooks/useAutoEmailer";
import { IconCopy, IconTrash } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

type AutoEmailerOptionsProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};
const Options = ({ isVisible, closeModal }: AutoEmailerOptionsProps) => {
    return (
        <Modal isVisible={isVisible}>
            <View className="flex-1 justify-center items-center">
                <View className="py-2 gap-2 w-1/2 rounded bg-base-200 dark:bg-base-200-dark">
                    <Button variant="ghost" onPress={() => closeModal("verticalDotModal")}>
                        <View className="flex-row items-center justify-start gap-1">
                            <IconCopy size={18} color={"#06b6d4"} />
                            <Text variant={"label-large"} color={"accent"}>
                                Duplicate
                            </Text>
                        </View>
                    </Button>

                    <Button variant="ghost" onPress={() => closeModal("verticalDotModal")}>
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

export default Options;
