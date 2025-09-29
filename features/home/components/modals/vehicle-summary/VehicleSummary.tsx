import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Table } from "@/components/table";
import { Column } from "@/components/table/Table";
import { Text } from "@/components/text";
import { ButtonKey, ModalKey } from "@/features/home/hooks/useHome";
import {
    IconCircleCheckFilled,
    IconDownload,
    IconExclamationCircleFilled,
    IconSearch,
    IconX,
} from "@tabler/icons-react-native";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type VehicleSummaryProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
    vehicleSummaryData: Column[];
    rows: (string | number)[][];
    selectedBtn: string;
    setSelectedBtnHandler: (btnKey: ButtonKey, value: string) => void;
};

const VehicleSummary = ({
    isVisible,
    closeModal,
    vehicleSummaryData,
    rows,
    selectedBtn,
    setSelectedBtnHandler,
}: VehicleSummaryProps) => {
    return (
        <Modal isVisible={isVisible} className="rounded bg-base-200 dark:bg-base-200-dark">
            <View className="flex-1">
                <View className="p-4 flex-row items-center justify-between">
                    <Text variant={"h3"}>Vehicle Summary</Text>
                    <Button
                        variant="ghost"
                        className="active:opacity-40"
                        onPress={() => closeModal("vehicleSummaryModal")}
                    >
                        <IconX size={24} color={"grey"} />
                    </Button>
                </View>
                <View className="px-1 flex-1 border-y border-gray-400">
                    {/* Buttons */}
                    <View className="py-4 flex-row items-center justify-evenly">
                        <Pressable
                            className={`p-2 rounded-lg ${selectedBtn === "inspected" ? "border-b-2 border-accent" : ""}`}
                            onPress={() => setSelectedBtnHandler("vehicleSummaryBtn", "inspected")}
                        >
                            <View className="flex-row items-center gap-2">
                                <IconCircleCheckFilled size={24} color={"#10b981"} />
                                <Text>Inspected</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            className={`p-2 rounded-lg ${selectedBtn === "to-be-inspected" ? "border-b-2 border-accent" : ""}`}
                            onPress={() => setSelectedBtnHandler("vehicleSummaryBtn", "to-be-inspected")}
                        >
                            <View className="flex-row items-center gap-2">
                                <IconExclamationCircleFilled size={24} color={"#ef4444"} />
                                <Text>To be Inspected</Text>
                            </View>
                        </Pressable>
                    </View>

                    {/* Search input */}
                    <Input
                        variant="primary"
                        placeholder="Search assigned registration number or name"
                        iconLeft={<IconSearch size={24} color={"#7367f0"} />}
                    />

                    {/* Table */}
                    <View className="mt-4 flex-1">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Table title="Vehicle Summary" columns={vehicleSummaryData} rows={rows} />
                        </ScrollView>
                    </View>
                </View>
                <View className="p-4">
                    <Button variant="accent">
                        <View className="flex-row items-center gap-2">
                            <IconDownload size={18} color={"white"} />
                            <Text variant={"button"}>Download</Text>
                        </View>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default VehicleSummary;
