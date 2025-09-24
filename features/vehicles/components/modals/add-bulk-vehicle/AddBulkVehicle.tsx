import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/vehicles/hooks/useVehicle";
import { IconDownload, IconFile, IconUpload, IconX } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

type AddBulkUserProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const AddBulkVehicle = ({ isVisible, closeModal }: AddBulkUserProps) => {
    return (
        <Modal isVisible={isVisible} className="px-4 rounded bg-base-100 dark:bg-base-100-dark">
            <View className="flex-1">
                <View className="py-4 flex-row justify-end">
                    <Button variant="ghost" onPress={() => closeModal("addBulkVehicle")}>
                        <IconX size={24} color="grey" />
                    </Button>
                </View>
                <View className="gap-4">
                    <View
                        className="flex-row flex-wrap items-center justify-center gap-4 p-4"
                        style={{ borderWidth: 2, borderStyle: "dashed", borderColor: "grey" }}
                    >
                        <Text>Step 1: Download the Template</Text>
                        <Button>
                            <View className="flex-row items-center gap-2">
                                <IconDownload size={20} color="white" />
                                <Text variant={"button"}>Download</Text>
                            </View>
                        </Button>
                    </View>

                    <View
                        className="flex-row flex-wrap items-center justify-center gap-4"
                        style={{ borderWidth: 2, borderStyle: "dashed", borderColor: "grey" }}
                    >
                        <View
                            className="w-full items-center justify-center gap-4 p-4"
                            style={{ borderBottomWidth: 2, borderStyle: "dashed", borderColor: "grey" }}
                        >
                            <Text>Step 2: Upload the Excel</Text>
                            <Button>
                                <View className="flex-row items-center gap-2">
                                    <IconUpload size={20} color="white" />
                                    <Text variant={"button"}>Download</Text>
                                </View>
                            </Button>
                        </View>

                        <View className="flex-col flex-wrap items-center justify-center gap-2">
                            <IconFile size={34} color="grey" />
                            <Text variant={"button"} className="pb-4 px-4">
                                Select a file or Drag & drop the template file
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AddBulkVehicle;
