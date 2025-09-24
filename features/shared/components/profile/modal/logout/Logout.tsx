import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/shared/hooks/profile/useProfile";
import { IconLogout } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

type LogoutProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const Logout = ({ isVisible, closeModal }: LogoutProps) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={() => closeModal("logoutModal")} backdropOpacity={0.5}>
            <View className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
                <View className="gap-4">
                    <Button variant="ghost">
                        <Text>user@email.com</Text>
                    </Button>
                    <View className="border-t border-accent" />
                    <Button variant="ghost" onPress={() => closeModal("logoutModal")}>
                        <View className="flex-row items-center gap-2">
                            <Text>Logout</Text>
                            <IconLogout size={20} color={"#06b6d4"} />
                        </View>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default Logout;
