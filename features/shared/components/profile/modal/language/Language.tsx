import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { LanguageData, ModalKey } from "@/features/shared/hooks/profile/useProfile";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

type LanguageProps = {
    isVisible: boolean;
    languageData: LanguageData[];
    closeModal: (key: ModalKey) => void;
};

const Language = ({ isVisible, languageData, closeModal }: LanguageProps) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={() => closeModal("languageModal")}>
            <View className="py-4 items-center justify-center rounded bg-gray-400">
                <Text variant={"h3"}>Select Language</Text>
                {languageData.map((item) => (
                    <View key={item.id} className="w-1/2 items-center border-b border-gray-300">
                        <Button variant="ghost">
                            <Text>{item.title}</Text>
                        </Button>
                    </View>
                ))}
            </View>
        </Modal>
    );
};

export default Language;
