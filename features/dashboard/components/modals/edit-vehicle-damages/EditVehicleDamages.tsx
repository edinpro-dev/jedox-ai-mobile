import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/dashboard/hooks/useDashboard";
import { IconArrowRight, IconX } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";
type EditVehicleDamagesProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const EditVehicleDamages = ({ isVisible, closeModal }: EditVehicleDamagesProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="flex-row items-center justify-between">
                    <Text variant={"h3"}>Damage Details</Text>

                    <Pressable className="active:opacity-40" onPress={() => closeModal("editVehicleDamagesModal")}>
                        <IconX size={24} color={"grey"} />
                    </Pressable>
                </View>
                <View className="py-4 gap-4">
                    <Card>
                        <View className="gap-2">
                            <View className="flex-row items-center justify-between">
                                <Text variant={"label"} color={"accent"}>
                                    Part
                                </Text>
                                <Text variant={"label"}>Right front door</Text>
                            </View>
                            <View className="flex-row items-center justify-between">
                                <Text variant={"label"} color={"accent"}>
                                    Damage Type
                                </Text>
                                <Text variant={"label"}>Dent 2</Text>
                            </View>
                            <View className="flex-row items-center justify-between">
                                <Text variant={"label"} color={"accent"}>
                                    First found on
                                </Text>
                                <Text variant={"label"}>18th Sep 2025 20:29</Text>
                            </View>
                            <View className="flex-row items-center justify-between">
                                <Text variant={"label"} color={"accent"}>
                                    Damage id
                                </Text>
                                <Text variant={"label"}>VINhvuptZH</Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View className="py-4 border-b border-base-100 dark:border-base-100-dark">
                            <Text variant={"h4"}>Repair Status</Text>
                        </View>
                        <View className="gap-2 py-4">
                            <Button variant="outline-accent" rounded="rounded-full">
                                <Text variant={"button"} className="text-center">
                                    Pending for review
                                </Text>
                            </Button>
                            <Button variant="outline-accent" rounded="rounded-full">
                                <Text variant={"button"} className="text-center">
                                    Not to be repaired
                                </Text>
                            </Button>
                            <Button variant="outline-accent" rounded="rounded-full">
                                <Text variant={"button"} className="text-center">
                                    To be repaired{" "}
                                </Text>
                            </Button>
                            <Button variant="outline-accent" rounded="rounded-full">
                                <Text variant={"button"} className="text-center">
                                    Under repair{" "}
                                </Text>
                            </Button>
                            <Button variant="outline-accent" rounded="rounded-full">
                                <Text variant={"button"} className="text-center">
                                    Repaired
                                </Text>
                            </Button>
                        </View>

                        <View>
                            <Image
                                source={require("@/assets/images/bicycle.png")}
                                className="w-[200px] h-[200px] object-cover mx-auto"
                            />
                        </View>
                    </Card>

                    <Card>
                        <View className="gap-4">
                            <View className="py-4 border-b border-base-100 dark:border-base-100-dark">
                                <Text variant={"h4"}>Inspections</Text>
                            </View>

                            <View className="gap-4">
                                <View>
                                    <View className="flex-row items-center flex-wrap">
                                        <Text>Inspected On: </Text>
                                        <Text>26th Sep 2025 04:08</Text>
                                    </View>
                                    <View className="flex-row items-center flex-wrap">
                                        <Text>Inspected By: </Text>
                                        <Text>paul.mitchell2@teamjedox.co.uk</Text>
                                    </View>
                                    <Button variant="outline-accent" onPress={() => router.back()}>
                                        <View className="flex-row items-center gap-1">
                                            <Text color={"accent"}>Inspection details</Text>
                                            <IconArrowRight size={24} color={"#06b6d4"} />
                                        </View>
                                    </Button>
                                </View>

                                <View>
                                    <View className="flex-row items-center flex-wrap">
                                        <Text>Inspected On: </Text>
                                        <Text>18th Sep 2025 18:20</Text>
                                    </View>
                                    <View className="flex-row items-center flex-wrap">
                                        <Text>Inspected By: </Text>
                                        <Text>paul.mitchell2@teamjedox.co.uk</Text>
                                    </View>
                                    <Button variant="outline-accent" onPress={() => router.back()}>
                                        <View className="flex-row items-center gap-1">
                                            <Text color={"accent"}>Inspection details</Text>
                                            <IconArrowRight size={24} color={"#06b6d4"} />
                                        </View>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default EditVehicleDamages;
