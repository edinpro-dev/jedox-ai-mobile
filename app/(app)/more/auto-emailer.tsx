import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { AddNewEmail } from "@/features/more/components/modals/auto-emailer";
import { useAutoEmailer } from "@/features/more/hooks/useAutoEmailer";
import { IconPlus, IconSearch } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const autoEmailer = () => {
    const { colors, emailerTypeData, isAutoEmailerModalOpen, closeModal, openModal } = useAutoEmailer();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4">
                <View className="py-2 border-b border-base-100 dark:border-base-100-dark">
                    <View className="flex-row items-center justify-between">
                        <Text>Emailer Setup</Text>
                        <Button variant="primary" onPress={() => openModal("addNewEmail")}>
                            <View className="flex-row items-center gap-2">
                                <IconPlus size={20} color="white" />
                                <Text>New Email Config</Text>
                            </View>
                        </Button>
                    </View>
                </View>

                <View className="mt-4 gap-4">
                    <Input placeholder="Search" iconLeft={<IconSearch size={18} color={colors.infoContent} />} />
                    <Select search={false} data={emailerTypeData} placeholder="Emailer Type" renderMode="checkbox" />
                </View>
            </View>

            {/* New Email Config Modal */}
            {isAutoEmailerModalOpen.addNewEmail && (
                <AddNewEmail isVisible={isAutoEmailerModalOpen.addNewEmail} closeModal={closeModal} />
            )}
        </SafeAreaView>
    );
};

export default autoEmailer;
