import Text from "@/components/text/Text";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { useProfile } from "../../hooks/profile/useProfile";
import { Language } from "./modal/language";
import { Logout } from "./modal/logout";

const Profile = () => {
    const { colors, openModal, closeModal, isProfileModalOpen, languageData } = useProfile();
    return (
        <>
            <View className="py-3 px-6 flex-row items-center justify-between bg-base-100 dark:bg-base-100-dark relative">
                <View>
                    <Image source={require("@/assets/images/splash-icon.png")} className="w-10 h-10" />
                </View>
                <View className="flex-row items-center gap-4">
                    <Pressable className="active:opacity-40" onPress={() => openModal("languageModal")}>
                        <Feather name="globe" size={24} color={`${colors.baseContent}`} />
                    </Pressable>
                    <View className="h-8 border-r border-accent" />
                    <Pressable
                        className="px-2 rounded-full border border-gray-300 active:opacity-40"
                        onPress={() => openModal("logoutModal")}
                    >
                        <Text variant="h2" className="font-poppins">
                            G
                        </Text>
                    </Pressable>
                </View>
            </View>
            {/* Logout Modal */}
            {isProfileModalOpen.logoutModal && (
                <Logout isVisible={isProfileModalOpen.logoutModal} closeModal={closeModal} />
            )}

            {/* Language Modal */}
            {isProfileModalOpen.languageModal && (
                <Language
                    isVisible={isProfileModalOpen.languageModal}
                    closeModal={closeModal}
                    languageData={languageData}
                />
            )}
        </>
    );
};

export default Profile;
