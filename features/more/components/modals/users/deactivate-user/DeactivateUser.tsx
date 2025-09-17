import { Text } from "@/components/text";
import { ModalKey } from "@/features/more/hooks/useUsers";
import { IconMinusVertical } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";

type DeactivateUserProps = {
    closeModal: (key: ModalKey) => void;
    selectedUser: number;
};

const DeactivateUser = ({ closeModal, selectedUser }: DeactivateUserProps) => {
    return (
        <View className="w-2/3 p-3 mx-auto flex-row items-center justify-center bg-black rounded border border-gray-400">
            <View className="flex-row items-center justify-center gap-1">
                <View className="flex-row items-center justify-center gap-2">
                    <Text variant={"caption"} color={"white"}>
                        {selectedUser}
                    </Text>
                    <Text variant={"caption"}>items selected</Text>
                </View>
                <IconMinusVertical size={20} color={"white"} />
                <Pressable onPress={() => closeModal("deactivateUser")}>
                    <Text variant={"label"} color={"error"}>
                        Deactivate
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default DeactivateUser;
