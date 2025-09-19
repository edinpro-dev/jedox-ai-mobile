import { Button } from "@/components/button";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import { AddNewChecklist } from "@/features/more/components/modals/checklist/add-new-checklist";
import { useChecklist } from "@/features/more/hooks/useChecklist";
import { IconPlus } from "@tabler/icons-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const checklist = () => {
    const { isChecklistModalOpen, closeModal, openModal, inspectionTypeData, checklistTableDummyData, rows } =
        useChecklist();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4">
                <View className="pb-4 border-b border-base-100 dark:border-base-100-dark">
                    <View className="mb-4">
                        <Text variant={"h4"}>Checklist SetUp</Text>
                    </View>
                    <Button onPress={() => openModal("addNewChecklist")}>
                        <View className="flex-row items-center gap-2">
                            <IconPlus size={20} color="white" />
                            <Text>New</Text>
                        </View>
                    </Button>
                </View>

                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Table title="Checklist" columns={checklistTableDummyData} rows={rows} />
                    </ScrollView>
                </View>
            </View>

            {isChecklistModalOpen.addNewChecklist && (
                <AddNewChecklist
                    isVisible={isChecklistModalOpen.addNewChecklist}
                    closeModal={closeModal}
                    inspectionTypeData={inspectionTypeData}
                />
            )}
        </SafeAreaView>
    );
};

export default checklist;
