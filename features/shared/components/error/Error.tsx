import { Text } from "@/components/text";
import { Image, View } from "react-native";

const Error = () => {
    return (
        <View className="flex-1 flex items-center justify-center">
            <Image source={require("@/assets/images/error.png")} className="size-[200px]" />
            <Text variant="body">Something went wrong! Please contact support</Text>
        </View>
    );
};

export default Error;
