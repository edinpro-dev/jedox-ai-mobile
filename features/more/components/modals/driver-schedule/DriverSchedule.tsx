import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/more/hooks/useDriverSchedule";
import {
    IconDownload,
    IconExclamationCircle,
    IconFileTypeCsv,
    IconFileUpload,
    IconX,
} from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type DriverScheduleProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
    handlePickFile: () => Promise<void>;
};

const DriverSchedule = ({ isVisible, closeModal, handlePickFile }: DriverScheduleProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <View className="flex-1">
                <View className="flex-row items-center justify-between border-b border-gray-500">
                    <Text variant={"h3"}>Driver Schedule</Text>
                    <Button variant="ghost" onPress={() => closeModal("addBulkAssignment")}>
                        <IconX size={24} color={"grey"} />
                    </Button>
                </View>

                <View className="py-4 flex-row items-center justify-between gap-4">
                    <View className="flex-row items-center justify-center gap-2">
                        <View className="w-7 h-7 bg-black rounded-full flex-row items-center justify-center">
                            <Text>1</Text>
                        </View>
                        <Text>Upload File</Text>
                    </View>

                    <View className="flex-1 w-full border border-b-gray-300"></View>

                    <View className="flex-row items-center justify-center gap-2">
                        <View className="w-7 h-7 bg-gray-400 rounded-full flex-row items-center justify-center">
                            <Text>2</Text>
                        </View>
                        <Text>Map Columns</Text>
                    </View>
                </View>

                <View className="px-4 py-2 flex-row items-center justify-center gap-2 rounded bg-amber-100 border-l-4 border-amber-300">
                    <IconExclamationCircle size={24} color={"orange"} />
                    <Text variant={"caption"} color={"black"}>
                        Please ensure uploaded excel file have only just one sheet inside
                    </Text>
                </View>

                <View
                    className="my-4 p-6 flex-col items-center justify-center"
                    style={{ borderWidth: 2, borderStyle: "dashed", borderColor: "grey" }}
                >
                    <IconFileUpload size={94} color={"#06b6d4"} />
                    <View className="flex-row items-center justify-center gap-1">
                        <Text variant={"caption"}>Drop excel file here or</Text>
                        <Pressable className="active:opacity-40" onPress={handlePickFile}>
                            <Text variant={"caption"} className="underline">
                                browse
                            </Text>
                        </Pressable>
                    </View>
                    <Text variant={"caption"}>Supported formats: .xlsx, .xls</Text>
                </View>

                <View className="flex-col items-start justify-center my-4">
                    <View className="flex-row items-center justify-start">
                        <IconFileTypeCsv size={24} color={"#06b6d4"} />
                        <Text variant={"label-large"}>User+Fleet</Text>
                    </View>
                    <Text variant={"label"}>You can download csv file use for data format references</Text>
                </View>

                <Button>
                    <View className="flex-row items-center justify-center gap-2">
                        <IconDownload size={20} color={"#06b6d4"} />
                        <Text variant={"button"}>Download</Text>
                    </View>
                </Button>
            </View>
        </Modal>
    );
};

export default DriverSchedule;
