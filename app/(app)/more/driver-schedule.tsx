import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { DriverSchedule } from "@/features/more/components/modals/driver-schedule";
import { useDriverSchedule } from "@/features/more/hooks/useDriverSchedule";
import {
    IconArrowLeft,
    IconFileTypeCsv,
    IconLink,
    IconPencil,
    IconPlus,
    IconSearch,
    IconTruck,
    IconUsersGroup,
    IconUsersPlus,
} from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const driverSchedule = () => {
    const { colors, bg, vehiclePieData, isDriverScheduleModalOpen, closeModal, openModal, handlePickFile } =
        useDriverSchedule();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4 flex-row items-center gap-4">
                <Pressable className="active:opacity-40" onPress={() => router.back()}>
                    <IconArrowLeft size={24} color={colors.accent} />
                </Pressable>
                <Text variant={"h2"}>Driver Schedule</Text>
            </View>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="p-4">
                    <View className="pb-4 border-b border-base-100">
                        <View>
                            <View className="gap-4">
                                <Button disabled={true} variant="outline">
                                    <View className="flex-row items-center gap-2">
                                        <IconFileTypeCsv size={24} color={colors.accent} />
                                        <Text>Download CSV</Text>
                                    </View>
                                </Button>

                                <Button variant="primary" onPress={() => openModal("addBulkAssignment")}>
                                    <View className="flex-row items-center gap-2">
                                        <IconPlus size={20} color="white" />
                                        <Text>Bulk Assignment</Text>
                                    </View>
                                </Button>
                            </View>
                            <View className="mt-4 gap-4">
                                <Card>
                                    <Text variant={"h2"}>Vehicles</Text>
                                    <View className="flex-row items-center justify-evenly">
                                        <View className="px-1 border-r border-white">
                                            <View className="flex-row items-center justify-between gap-1">
                                                <View className="flex-row items-center gap-1">
                                                    <View className="w-5 h-5 rounded bg-base-300"></View>
                                                    <IconTruck size={24} color="white" />
                                                    <Text>Total Active Vehicles</Text>
                                                </View>
                                                <Text>37</Text>
                                            </View>
                                            <View className="flex-row items-center justify-between gap-1">
                                                <View className="flex-row items-center gap-1">
                                                    <View className="w-5 h-5 rounded bg-primary"></View>
                                                    <IconLink size={24} color="white" />
                                                    <Text>No of Vehicles Assigned</Text>
                                                </View>
                                                <Text>0</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <PieChart
                                                donut
                                                data={vehiclePieData}
                                                radius={30}
                                                innerRadius={20}
                                                backgroundColor={bg}
                                            />
                                        </View>
                                    </View>
                                </Card>

                                <Card>
                                    <Text variant={"h2"}>Drivers</Text>
                                    <View className="flex-row items-center justify-evenly">
                                        <View className="px-1 border-r border-white">
                                            <View className="flex-row items-center justify-between gap-1">
                                                <View className="flex-row items-center gap-1">
                                                    <View className="w-5 h-5 rounded bg-base-300"></View>
                                                    <IconUsersGroup size={24} color="white" />
                                                    <Text>Total Number of Drivers</Text>
                                                </View>
                                                <Text>37</Text>
                                            </View>
                                            <View className="flex-row items-center justify-between gap-1">
                                                <View className="flex-row items-center gap-1">
                                                    <View className="w-5 h-5 rounded bg-primary"></View>
                                                    <IconUsersPlus size={24} color="white" />
                                                    <Text>No of Drivers Assigned</Text>
                                                </View>
                                                <Text>85</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <PieChart
                                                donut
                                                data={vehiclePieData}
                                                radius={30}
                                                innerRadius={20}
                                                backgroundColor={bg}
                                            />
                                        </View>
                                    </View>
                                </Card>
                            </View>
                        </View>
                    </View>

                    <View className="mt-4 gap-4">
                        <Select
                            data={[]}
                            placeholder="Search Registration Number"
                            leftIcon={<IconSearch size={18} color={colors.primary} />}
                        />

                        <Select
                            data={[]}
                            placeholder="Search Driver"
                            leftIcon={<IconSearch size={18} color={colors.primary} />}
                        />

                        <View className="flex-row items-center justify-between gap-4">
                            <Button variant="outline">
                                <IconPencil size={20} color="white" />
                            </Button>
                            <View className="flex-1">
                                <Select
                                    data={[]}
                                    placeholder="Sub Location"
                                    leftIcon={<IconSearch size={18} color={colors.primary} />}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Modal */}

                    {isDriverScheduleModalOpen.addBulkAssignment && (
                        <DriverSchedule
                            isVisible={isDriverScheduleModalOpen.addBulkAssignment}
                            closeModal={closeModal}
                            handlePickFile={handlePickFile}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default driverSchedule;
