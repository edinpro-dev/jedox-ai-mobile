import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/more/hooks/useChecklist";
import { IconX } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

type AddNewChecklistProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
    inspectionTypeData: {
        label: string;
        value: string;
    }[];
};

const AddNewChecklist = ({ isVisible, closeModal, inspectionTypeData }: AddNewChecklistProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <View className="flex-1">
                <View className="flex-row items-center justify-between">
                    <Text variant={"h3"}>Add new checklist</Text>
                    <Button variant="ghost" onPress={() => closeModal("addNewChecklist")}>
                        <IconX size={24} color={"grey"} />
                    </Button>
                </View>

                <View className="my-4 gap-4">
                    <Text variant={"label-large"}>Inspection Type</Text>
                    <Select variant="primary" search={false} renderMode="checkbox" data={inspectionTypeData} />
                    <Button>
                        <Text variant={"button"}>Select</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default AddNewChecklist;
