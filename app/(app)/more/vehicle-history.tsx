import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { useVehicleHistory } from "@/features/more/hooks/useVehicleHistory";
import { IconArrowLeft, IconArrowUp, IconClipboard, IconSearch } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const vehicleHistory = () => {
    const { colors } = useVehicleHistory();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4 flex-row items-center gap-4">
                <Pressable className="active:opacity-40" onPress={() => router.back()}>
                    <IconArrowLeft size={24} color={colors.accent} />
                </Pressable>
                <Text variant={"h2"}>Vehicle History</Text>
            </View>
            <ScrollView className="flex-1">
                <View className="flex-1 p-4 gap-4">
                    <View>
                        <Select
                            data={[]}
                            variant="primary"
                            placeholder="LICENSEPLATE"
                            leftIcon={<IconSearch size={18} color={colors.infoContent} />}
                        ></Select>
                    </View>

                    <View className="flex-1 items-center">
                        <View className="flex-row items-center">
                            <IconArrowUp size={70} color={colors.accent} />
                            <IconClipboard size={70} color={colors.accent} />
                        </View>
                        <Text variant={"caption-large"} className="py-4">
                            PLEASE SELECT DEALER LICENSE PLATE TO VIEW CONTENT
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default vehicleHistory;
