import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { IconPlus } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const checklist = () => {
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4">
                <View className="pb-4 border-b border-base-100 dark:border-base-100-dark">
                    <View className="mb-4">
                        <Text variant={"h4"}>Checklist SetUp</Text>
                    </View>
                    <Button>
                        <View className="flex-row items-center gap-2">
                            <IconPlus size={20} color="white" />
                            <Text>New</Text>
                        </View>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default checklist;
