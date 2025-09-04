import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { Image, View } from "react-native";

const Expired = () => {
    return (
        <View className="flex-1 flex items-center justify-center">
            <Image source={require("@/assets/images/not-found.png")} className="size-[200px]" />
            <Text variant="h4" className="mt-4">
                Token expired
            </Text>
            <Button onPress={() => router.navigate("/login")} className="mt-12">
                Go to login
            </Button>
        </View>
    );
};

export default Expired;
