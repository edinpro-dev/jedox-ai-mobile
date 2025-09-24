import { useTheme } from "@/lib/theme";
import { useState } from "react";

export interface ProfileModalState {
    logoutModal: boolean;
    languageModal: boolean;
}

export type ModalKey = keyof ProfileModalState;

export interface LanguageData {
    id: string;
    title: string;
    englishName: string;
}

const languageData: LanguageData[] = [
    {
        id: "en-us",
        title: "English",
        englishName: "English",
    },
    {
        id: "en-na",
        title: "English-US",
        englishName: "English US",
    },
    {
        id: "de-de",
        title: "Deutsch",
        englishName: "German",
    },
    {
        id: "es-es",
        title: "Español",
        englishName: "Spanish",
    },
    {
        id: "en-usfleet",
        title: "English-Fleet",
        englishName: "English-Fleet",
    },
    {
        id: "nl-nl",
        title: "Dutch",
        englishName: "Dutch",
    },
    {
        id: "fr-mr",
        title: "Français",
        englishName: "French",
    },
    {
        id: "it-IT",
        title: "Italiano",
        englishName: "Italian",
    },
    {
        id: "ro-ro",
        title: "Română",
        englishName: "Romanian",
    },
    {
        id: "pt-pt",
        title: "português",
        englishName: "Portuguese",
    },
    {
        id: "sl-sl",
        title: "slovenščina",
        englishName: "slovenian",
    },
];

export const useProfile = () => {
    const [isDarkMode, setIsDarkMode] = useState<string>("light");
    const [isProfileModalOpen, setIsProfileModalOpen] = useState<ProfileModalState>({
        logoutModal: false,
        languageModal: false,
    });
    const { colors } = useTheme();

    //toggle modal
    const closeModal = (key: ModalKey) => setIsProfileModalOpen((prev) => ({ ...prev, [key]: false }));
    const openModal = (key: ModalKey) => setIsProfileModalOpen((prev) => ({ ...prev, [key]: true }));

    return {
        isDarkMode,
        setIsDarkMode,
        colors,
        openModal,
        closeModal,
        isProfileModalOpen,
        languageData,
    };
};
