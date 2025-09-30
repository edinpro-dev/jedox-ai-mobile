import { Button } from "@/components/button";
import { Table } from "@/components/table";
import { Column } from "@/components/table/Table";
import { Text } from "@/components/text";
import { ButtonKey, ModalKey } from "@/features/home/hooks/useHome";
import { IconCircleCheckFilled, IconClockQuestion, IconDownload, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type MOTStatusProps = {
    isVisible: boolean;
    selectedBtn: string;
    taxColumnData: Column[];
    closeModal: (key: ModalKey) => void;
    setSelectedBtnHandler: (btnKey: ButtonKey, value: string) => void;
};

const TaxDueStatus = ({ isVisible, closeModal, selectedBtn, setSelectedBtnHandler, taxColumnData }: MOTStatusProps) => {
    return (
        <Modal isVisible={isVisible} className="rounded bg-base-200 dark:bg-base-200-dark">
            <View className="flex-1">
                <View className="p-4 flex-row items-center justify-between">
                    <Text variant={"h3"}>Tax Due Status</Text>
                    <Button variant="ghost" className="active:opacity-40" onPress={() => closeModal("taxStatusModal")}>
                        <IconX size={24} color={"grey"} />
                    </Button>
                </View>
                <View className="px-1 flex-1 border-y border-gray-400">
                    {/* Buttons */}
                    <View className="py-4 flex-row items-center justify-evenly">
                        <Pressable
                            className={`p-2 rounded-lg ${selectedBtn === "tax-overdue" ? "border-b-2 border-accent" : ""}`}
                            onPress={() => setSelectedBtnHandler("taxStatusBtn", "tax-overdue")}
                        >
                            <View className="flex-row items-center gap-2">
                                <IconCircleCheckFilled size={24} color={"#10b981"} />
                                <Text>Overdue</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            className={`p-2 rounded-lg ${selectedBtn === "tax-due-soon" ? "border-b-2 border-accent" : ""}`}
                            onPress={() => setSelectedBtnHandler("taxStatusBtn", "tax-due-soon")}
                        >
                            <View className="flex-row items-center gap-2">
                                <IconClockQuestion size={24} color={"#ef4444"} />
                                <Text>Due Soon</Text>
                            </View>
                        </Pressable>
                    </View>

                    {/* Table */}
                    <View className="mt-4 flex-1">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Table title="Vehicle Summary" columns={taxColumnData} rows={[]} />
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

export default TaxDueStatus;
