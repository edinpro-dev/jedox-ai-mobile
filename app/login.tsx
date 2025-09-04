import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
    return (
        <SafeAreaView className="flex-1">
            <Text>Login</Text>
            <Button onPress={() => router.navigate("/")}>Login</Button>
        </SafeAreaView>
    );
};

export default LoginScreen;
