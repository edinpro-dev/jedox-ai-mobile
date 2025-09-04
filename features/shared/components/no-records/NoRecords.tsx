import { Text } from "@/components/text";
import { Image, View } from "react-native";

const NoRecords = () => {
    return (
        <View className="flex-1 flex items-center justify-center">
            <Image source={require("@/assets/images/no-record.png")} className="size-[200px]" />
            <Text variant="h4">No records</Text>
        </View>
    );
};

export default NoRecords;
