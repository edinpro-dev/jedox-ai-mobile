import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
    return (
        <SafeAreaView className="flex-1">
            <Text>About</Text>
            <Button onPress={() => router.navigate("/")}>Home</Button>
        </SafeAreaView>
    );
};

export default About;
