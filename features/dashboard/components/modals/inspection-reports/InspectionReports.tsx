import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { InspectionReportsInterface, InspectionType, ModalKey } from "@/features/dashboard/hooks/useDashboard";
import { LanguageData } from "@/features/shared/hooks/profile/useProfile";
import { IconCheck, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type InspectionReportsProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
    inspectionType: InspectionType;
    inspectionReports: InspectionReportsInterface[];
    setInspectionReports: React.Dispatch<React.SetStateAction<InspectionReportsInterface[]>>;
    languageData?: LanguageData[];
    selectedLanguage: string | number;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string | number>>;
};

const InspectionReports = ({
    isVisible,
    closeModal,
    inspectionType,
    inspectionReports,
    setInspectionReports,
    languageData,
    selectedLanguage,
    setSelectedLanguage,
}: InspectionReportsProps) => {
    console.log(inspectionType);
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <View className="flex-1">
                <View className="pb-4 flex-row items-center justify-between">
                    <Text variant={"h3"}>
                        {inspectionType === "share"
                            ? "Copy Link"
                            : inspectionType === "email"
                              ? "Email PDF"
                              : "Download PDF"}
                    </Text>
                    <Pressable onPress={() => closeModal("inspectionReportsModal")}>
                        <IconX size={24} color={"grey"} />
                    </Pressable>
                </View>

                <View className="flex-1 gap-4">
                    <Select
                        search={false}
                        data={
                            languageData?.map((language) => ({ label: language.englishName, value: language.id })) ?? []
                        }
                        value={selectedLanguage}
                        onChange={(val) => {
                            if (typeof val === "string" || typeof val === "number") {
                                setSelectedLanguage(val);
                            } else if (Array.isArray(val)) {
                                setSelectedLanguage(val[0]);
                            }
                        }}
                        placeholder="Select a language"
                    />
                    {inspectionReports.map((report) => {
                        return (
                            <View key={report.id} className="flex-row">
                                <View className="flex-row items-center justify-between gap-4">
                                    <Pressable
                                        onPress={() =>
                                            setInspectionReports((prev) =>
                                                prev.map((r) =>
                                                    r.id === report.id ? { ...r, isActive: !r.isActive } : r,
                                                ),
                                            )
                                        }
                                    >
                                        <View
                                            className={`w-6 h-6 rounded border border-accent  ${report.isActive ? "bg-accent" : ""}`}
                                        >
                                            {report.isActive && <IconCheck size={20} color="white" />}
                                        </View>
                                    </Pressable>
                                    <Text>{report.label}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
                <Button>
                    <Text variant={"button"}>
                        {inspectionType === "share"
                            ? "Copy Link"
                            : inspectionType === "email"
                              ? "Email PDF"
                              : "Download PDF"}
                    </Text>
                </Button>
            </View>
        </Modal>
    );
};

export default InspectionReports;
