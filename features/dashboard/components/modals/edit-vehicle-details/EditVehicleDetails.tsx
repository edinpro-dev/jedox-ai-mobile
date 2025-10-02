import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/dashboard/hooks/useDashboard";
import { IconX } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type EditVehicleDetailsProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const EditVehicleDetails = ({ isVisible, closeModal }: EditVehicleDetailsProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="flex-row items-center justify-between">
                    <Text variant={"h3"}>Edit Details</Text>

                    <Pressable className="active:opacity-40" onPress={() => closeModal("editVehicleDetailsModal")}>
                        <IconX size={24} color={"grey"} />
                    </Pressable>
                </View>
                <View className="gap-4">
                    <View className="gap-4">
                        <View className="py-4 border-b  border-base-300 dark:border-base-300-dark">
                            <Text variant={"label-large"}>Vehicle details</Text>
                        </View>
                        <View className="gap-4">
                            <View className="gap-1">
                                <Text variant={"label"}>Licence Plate No</Text>
                                <Input placeholder="Licence Plate No" />
                            </View>
                            <View className="gap-1">
                                <Text variant={"label"}>Make & Model</Text>
                                <Input placeholder="Make & Model" />
                            </View>
                            <View className="gap-1">
                                <Text variant={"label"}>Bodystyle</Text>
                                <Input placeholder="Bodystyle" />
                            </View>
                            <View className="gap-1">
                                <Text variant={"label"}>VIN</Text>
                                <Input placeholder="VIN" />
                            </View>
                            <View className="gap-1">
                                <Text variant={"label"}>Year</Text>
                                <Input placeholder="Year" />
                            </View>
                        </View>
                    </View>

                    <View className="gap-4">
                        <View className="py-4 border-b  border-base-300 dark:border-base-300-dark">
                            <Text variant={"label-large"}>Inspection details</Text>
                        </View>
                        <View className="gap-4">
                            <View className="gap-1">
                                <Text variant={"label"}>Status</Text>
                                <Input placeholder="Status" />
                            </View>
                        </View>
                    </View>

                    <View className="gap-4">
                        <View className="py-4 border-b  border-base-300 dark:border-base-300-dark">
                            <Text variant={"label-large"}>Customer details</Text>
                        </View>
                        <View className="gap-4">
                            <View className="gap-1">
                                <Text variant={"label"}>Name</Text>
                                <Input placeholder="Name" />
                            </View>

                            <View className="gap-1">
                                <Text variant={"label"}>Email</Text>
                                <Input placeholder="Email" />
                            </View>

                            <View className="gap-1">
                                <Text variant={"label"}>Phone</Text>
                                <View className="flex-row items-center justify-start gap-4">
                                    <View className="w-1/5">
                                        <Input placeholder="Code" />
                                    </View>
                                    <View className="flex-1">
                                        <Input placeholder="Contact phone." />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Button>
                        <Text variant={"button"}>Save</Text>
                    </Button>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default EditVehicleDetails;
