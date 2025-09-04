import { Text } from "@/components/text";
import { Image, View } from "react-native";

const Forbidden = () => {
    return (
        <View className="flex-1 flex items-center justify-center">
            <Image source={require("@/assets/images/forbidden.png")} className="size-[200px]" />
            <Text variant="body">You have no permission to access this page</Text>
        </View>
    );
};

export default Forbidden;
