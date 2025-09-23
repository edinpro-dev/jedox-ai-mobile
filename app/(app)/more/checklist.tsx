import { Button } from "@/components/button";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import { AddNewChecklist } from "@/features/more/components/modals/checklist/add-new-checklist";
import { ChecklistOptions } from "@/features/more/components/modals/checklist/vertical-dot";
import { useChecklist } from "@/features/more/hooks/useChecklist";
import { IconArrowLeft, IconPlus } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const checklist = () => {
    const { colors, isChecklistModalOpen, closeModal, openModal, inspectionTypeData, checklistTableDummyData, rows } =
        useChecklist();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4 flex-row items-center gap-4">
                <Pressable className="active:opacity-40" onPress={() => router.back()}>
                    <IconArrowLeft size={24} color={colors.accent} />
                </Pressable>
                <Text variant={"h2"}>Checklist Setup</Text>
            </View>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="p-4">
                    <View className="pb-4 border-b border-base-100 dark:border-base-100-dark">
                        <Button onPress={() => openModal("addNewChecklist")}>
                            <View className="flex-row items-center gap-2">
                                <IconPlus size={20} color="white" />
                                <Text>New</Text>
                            </View>
                        </Button>
                    </View>

                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Table
                                title="Checklist"
                                columns={checklistTableDummyData}
                                rows={rows}
                                onVerticalDotClick={() => openModal("verticalDotModal")}
                            />
                        </ScrollView>
                        {isChecklistModalOpen.verticalDotModal && (
                            <ChecklistOptions
                                isVisible={isChecklistModalOpen.verticalDotModal}
                                closeModal={closeModal}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>

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
