import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import { EditVehicleDamages } from "@/features/dashboard/components/modals/edit-vehicle-damages";
import { useDashboard } from "@/features/dashboard/hooks/useDashboard";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditVehicle = () => {
    const { colors, closeModal, openModal, isDashboardModalOpen, editVehicleDamages, vehicleDamageRows } =
        useDashboard();

    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4 flex-row items-center gap-4">
                <Pressable className="active:opacity-40" onPress={() => router.back()}>
                    <IconArrowLeft size={24} color={colors.accent} />
                </Pressable>
                <Text variant={"h2"}>Checklist Setup</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                <View className="flex-1 p-4 gap-4">
                    <Card>
                        <View className="py-4 border-b border-base-100 dark:border-base-100-dark">
                            <Text variant={"label"}>Mercedes Sprinter</Text>
                        </View>
                        <View>
                            <View>
                                <Image
                                    source={require("@/assets/images/bicycle.png")}
                                    className="w-[200px] h-[200px] object-cover mx-auto"
                                />
                            </View>
                            <View className="gap-2 py-4">
                                <View className="flex-row items-center justify-between">
                                    <Text variant={"label"} color={"accent"}>
                                        Make
                                    </Text>
                                    <Text variant={"label"}>Mercedes</Text>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text variant={"label"} color={"accent"}>
                                        Model
                                    </Text>
                                    <Text variant={"label"}>Sprinter</Text>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text variant={"label"} color={"accent"}>
                                        VIN
                                    </Text>
                                    <Text variant={"label"}>W1V3HBFZXSP717922</Text>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text variant={"label"} color={"accent"}>
                                        Ownership type
                                    </Text>
                                    <Text variant={"label"}>Leased</Text>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text variant={"label"} color={"accent"}>
                                        Registration Number
                                    </Text>
                                    <Text variant={"label"}>KT24CKP</Text>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text variant={"label"} color={"accent"}>
                                        Current ownership location
                                    </Text>
                                    <Text variant={"label"}>Jedox Couriers</Text>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text variant={"label"} color={"accent"}>
                                        Last Inspected On
                                    </Text>
                                    <Text variant={"label"}>2nd Oct 2025 04:44</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View className="gap-4">
                            <View className="py-4 border-b border-base-100 dark:border-base-100-dark">
                                <Text variant={"label"}>Damage History</Text>
                            </View>
                            <View className="gap-2">
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Overview
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Front
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Left Front
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Left Rear
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Rear
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Right Rear
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Right Front
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Roof
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Others
                                    </Text>
                                </Button>
                            </View>

                            <View className="border border-base-300 dark:border-base-100-dark rounded-lg">
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                            </View>
                        </View>

                        <View className="gap-4">
                            <View className="py-4 border-b border-base-100 dark:border-base-100-dark">
                                <Text variant={"label"}>Damage History</Text>
                            </View>
                            <View className="gap-2">
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
                                        To be repaired
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Under repair
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Clean
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Unrecognized
                                    </Text>
                                </Button>
                                <Button variant="outline-accent" rounded="rounded-full">
                                    <Text variant={"button"} className="text-center">
                                        Repaired
                                    </Text>
                                </Button>
                            </View>

                            <ScrollView horizontal>
                                <Table
                                    title="Vehicle Damages"
                                    columns={editVehicleDamages}
                                    rows={vehicleDamageRows}
                                    onRowClick={() => openModal("editVehicleDamagesModal")}
                                />
                            </ScrollView>
                            <View className="flex-1">
                                {isDashboardModalOpen.editVehicleDamagesModal && (
                                    <EditVehicleDamages
                                        isVisible={isDashboardModalOpen.editVehicleDamagesModal}
                                        closeModal={closeModal}
                                    />
                                )}
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditVehicle;
