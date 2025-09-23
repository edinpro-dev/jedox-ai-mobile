import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/more/hooks/useAutoEmailer";
import { IconExclamationCircleFilled, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type AddNewEmailProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const AddNewEmail = ({ isVisible, closeModal }: AddNewEmailProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 bg-base-100 dark:bg-base-100-dark">
            <View className="flex-1">
                <View className="flex-row items-center justify-between">
                    <Text>Add new email config</Text>
                    <Pressable onPress={() => closeModal("addNewEmail")}>
                        <IconX size={24} color={"grey"} />
                    </Pressable>
                </View>
                <View className="py-4 gap-4">
                    <View className="gap-1">
                        <View className="flex-row items-center justify-start gap-2">
                            <Text>Emailer type</Text>
                            <IconExclamationCircleFilled />
                        </View>
                        <Select search={false} data={[]} />
                    </View>

                    <View>
                        <View className="flex-row items-center justify-start gap-2">
                            <Text>Recipient List</Text>
                        </View>
                        <Input placeholder="Enter email Id" />
                    </View>
                </View>

                <Button>
                    <Text variant={"button"}>Save</Text>
                </Button>
            </View>
        </Modal>
    );
};

export default AddNewEmail;
