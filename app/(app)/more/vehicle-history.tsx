import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { useVehicleHistory } from "@/features/more/hooks/useVehicleHistory";
import { IconArrowUp, IconClipboard, IconSearch } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const vehicleHistory = () => {
    const { colors } = useVehicleHistory();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="flex-1 p-4">
                <View className="border-b border-base-100 dark:border-base-100-dark">
                    <Text variant={"h4"} className="py-1">
                        Vehicle History
                    </Text>
                </View>

                <View className="mt-4">
                    <Select
                        data={[]}
                        variant="primary"
                        placeholder="LICENSEPLATE"
                        leftIcon={<IconSearch size={18} color={colors.infoContent} />}
                    ></Select>
                </View>

                <View className="flex-1 flex-col items-center justify-center">
                    <View className="flex-row items-center">
                        <IconArrowUp size={70} color={colors.accent} />
                        <IconClipboard size={70} color={colors.accent} />
                    </View>
                    <Text variant={"caption-large"} className="py-4">
                        PLEASE SELECT DEALER LICENSE PLATE TO VIEW CONTENT
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default vehicleHistory;
