import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
    return (
        <SafeAreaView className="flex-1">
            <Text>Index</Text>
            <Button onPress={() => router.navigate("/login")}>Logout</Button>
            <Button onPress={() => router.navigate("/about")}>About</Button>
        </SafeAreaView>
    );
};

export default Index;
