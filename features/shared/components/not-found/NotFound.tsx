import { Text } from "@/components/text";
import { Image, View } from "react-native";

const NotFound = () => {
    return (
        <View className="flex-1 flex items-center justify-center">
            <Image source={require("@/assets/images/not-found.png")} className="size-[200px]" />
            <Text variant="h4">Screen not found</Text>
        </View>
    );
};

export default NotFound;
