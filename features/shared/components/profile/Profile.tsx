import Text from "@/components/text/Text";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { useProfile } from "../../hooks/profile/useProfile";

const Profile = () => {
    const { colors } = useProfile();
    return (
        <View className="py-3 px-6 flex-row items-center justify-between bg-base-100 dark:bg-base-100-dark">
            <View>
                <Image source={require("@/assets/images/splash-icon.png")} className="w-10 h-10" />
            </View>
            <View className="flex-row items-center gap-6">
                <Pressable className="active:opacity-40">
                    <Feather name="globe" size={24} color={`${colors.baseContent}`} />
                </Pressable>
                <Pressable className="px-2 rounded-full border border-gray-300 active:opacity-40">
                    <Text variant="h2" className="font-poppins">
                        G
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Profile;
