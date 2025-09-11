import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 items-center justify-center px-5">
                <Card className="w-full gap-10">
                    <Image source={require("@/assets/images/adaptive-icon.png")} className="size-[50px] mx-auto" />

                    <View className="gap-10">
                        <Input placeholder="User Id" className="w-full" />
                        <Input placeholder="Password" isPassword />
                    </View>

                    <Text variant="caption-large" color="accent" align="right">
                        Forgot Password?
                    </Text>

                    <Button onPress={() => router.navigate("/")}>Login</Button>

                    <View className="flex-row items-center justify-center gap-2">
                        <Text variant="caption-large" color="accent">
                            Jedox Inc.
                        </Text>
                        <Text variant="caption-large" color="default">
                            All rights reserved
                        </Text>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
