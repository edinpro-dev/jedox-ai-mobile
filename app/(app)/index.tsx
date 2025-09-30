import { Button } from "@/components/button";
import Card from "@/components/card/Card";
import CalendarModal from "@/components/modals/calendar/CalendarModal";
import { Select } from "@/components/select";
import { SelectDataItem } from "@/components/select/Select";
import { Text } from "@/components/text";
import { MOTStatus } from "@/features/home/components/modals/mot-status";
import { TaxDueStatus } from "@/features/home/components/modals/tax-due-status";
import { VehicleSummary } from "@/features/home/components/modals/vehicle-summary";
import { useHome } from "@/features/home/hooks/useHome";
import {
    IconArrowUpRight,
    IconBoxMultiple,
    IconCashBanknote,
    IconDownload,
    IconExclamationCircle,
    IconHierarchy2,
    IconObjectScan,
    IconTruckDelivery,
} from "@tabler/icons-react-native";
import { router } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
    const {
        locationData,
        dateData,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        handleDateChange,
        handleCustomDateSelect,
        inspectionPieData,
        colors,
        bg,
        vehiclePieData,
        isHomeModalOpen,
        closeModal,
        openModal,
        inspectedData,
        selectedBtn,
        inspectedRows,
        toBeInspectedRows,
        setSelectedBtnHandler,
        motDueSoonData,
        motOverDueData,
        taxDueSoonData,
        taxOverDueData,
    } = useHome();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <ScrollView className="flex-1">
                <Text variant={"h4"} className="p-4">
                    Home
                </Text>
                {/* Location select */}
                <View className="p-4 border-y border-base-100 dark:border-base-100-dark">
                    <Select
                        search={false}
                        variant="primary"
                        data={locationData}
                        value={selectedLocation ?? []}
                        placeholder="Select Location"
                        onChange={(item) => setSelectedLocation(item as SelectDataItem)}
                    />
                </View>

                <View className="p-4">
                    <Card className="mt-4 pb-4">
                        {/* Date select */}
                        <View className="py-4">
                            <View className="flex-row justify-end">
                                <Select
                                    search={false}
                                    variant="primary"
                                    data={dateData}
                                    value={selectedDate ?? []}
                                    onChange={handleDateChange}
                                    style={{ width: 200 }}
                                    className="align-baseline"
                                />
                            </View>

                            {/* Calendar */}
                            {isHomeModalOpen.calendarModal && (
                                <CalendarModal
                                    visible={isHomeModalOpen.calendarModal}
                                    setVisible={(show) =>
                                        show ? openModal("calendarModal") : closeModal("calendarModal")
                                    }
                                    value={new Date()}
                                    onSelectDate={handleCustomDateSelect}
                                />
                            )}
                        </View>

                        {/* Inspection Summary */}
                        <View className="p-2 rounded-lg border border-base-300 dark:border-base-100-dark">
                            <View className="gap-2">
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-start gap-2">
                                        <IconObjectScan size={30} color={colors.baseContent} />
                                        <Text variant={"h4"}>Inspection Summary</Text>
                                    </View>
                                    <Pressable className="active:opacity-40">
                                        <IconDownload size={20} color={colors.accent} />
                                    </Pressable>
                                </View>
                                <View>
                                    <Text variant={"caption-large"}>Total Inspections: 202</Text>
                                </View>
                            </View>
                            {/* Pie chart */}
                            <View className="p-4 items-center">
                                <PieChart
                                    donut
                                    data={inspectionPieData}
                                    radius={80}
                                    innerRadius={70}
                                    backgroundColor={bg}
                                />
                            </View>

                            {/* Inspection count */}
                            <View className="flex-row flex-wrap justify-between gap-6">
                                <Button
                                    variant="ghost"
                                    onPress={() =>
                                        router.push({
                                            pathname: "/(app)/search",
                                            params: {
                                                value: "completed",
                                                key: "inspectionStatus",
                                            },
                                        })
                                    }
                                >
                                    <View>
                                        <View className="flex-row items-center gap-1">
                                            <View className="w-4 h-4 bg-accent rounded" />
                                            <Text variant={"label"}>Complete</Text>
                                            <IconArrowUpRight size={20} color={colors.baseContent} />
                                        </View>
                                        <Text variant={"h1"}>231</Text>
                                    </View>
                                </Button>

                                <Button
                                    variant="ghost"
                                    onPress={() =>
                                        router.push({
                                            pathname: "/(app)/search",
                                            params: {
                                                value: "analysis",
                                                key: "inspectionStatus",
                                            },
                                        })
                                    }
                                >
                                    <View>
                                        <View className="flex-row items-center gap-1">
                                            <View className="w-4 h-4 bg-warning rounded" />
                                            <Text variant={"label"}>In Progress</Text>
                                            <IconArrowUpRight size={20} color={colors.baseContent} />
                                        </View>
                                        <Text variant={"h1"}>4</Text>
                                    </View>
                                </Button>
                                <Button
                                    variant="ghost"
                                    onPress={() =>
                                        router.push({
                                            pathname: "/(app)/search",
                                            params: {
                                                value: "incomplete",
                                                key: "inspectionStatus",
                                            },
                                        })
                                    }
                                >
                                    <View>
                                        <View className="flex-row items-center gap-1">
                                            <View className="w-4 h-4 bg-error rounded" />
                                            <Text>Incomplete</Text>
                                            <IconArrowUpRight size={20} color={colors.baseContent} />
                                        </View>
                                        <Text variant={"h1"}>9</Text>
                                    </View>
                                </Button>
                            </View>
                        </View>

                        {/* Summary by type */}
                        <View className="mt-4 p-2 rounded-lg border border-base-300 dark:border-base-100-dark">
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row items-start gap-2">
                                    <IconObjectScan size={30} color={colors.baseContent} />
                                    <Text variant={"h4"}>Inspection Summary - by type</Text>
                                </View>
                            </View>

                            {/* Inspection count */}
                            <View className="mt-4 flex-row justify-between">
                                <View>
                                    <Pressable
                                        className="active:opacity-40"
                                        onPress={() =>
                                            router.push({
                                                pathname: "/(app)/search",
                                                params: {
                                                    value: "start-of-shift",
                                                    key: "inspectionType",
                                                },
                                            })
                                        }
                                    >
                                        <View className="flex-row items-center gap-1">
                                            <Text variant={"label"}>Start of Shift Inspection</Text>
                                            <IconArrowUpRight size={20} color={colors.baseContent} />
                                        </View>
                                        <Text variant={"h1"}>0</Text>
                                    </Pressable>

                                    <Pressable
                                        className="active:opacity-40"
                                        onPress={() =>
                                            router.push({
                                                pathname: "/(app)/search",
                                                params: {
                                                    value: "end-of-shift",
                                                    key: "inspectionType",
                                                },
                                            })
                                        }
                                    >
                                        <View className="flex-row items-center gap-1">
                                            <Text variant={"label"}>End of Shift Inspection</Text>
                                            <IconArrowUpRight size={20} color={colors.baseContent} />
                                        </View>
                                        <Text variant={"h1"}>0</Text>
                                    </Pressable>
                                </View>

                                <View>
                                    <Pressable
                                        className="active:opacity-40"
                                        onPress={() =>
                                            router.push({
                                                pathname: "/(app)/search",
                                                params: {
                                                    value: "on-hire-check",
                                                    key: "inspectionType",
                                                },
                                            })
                                        }
                                    >
                                        <View className="flex-row items-center gap-1">
                                            <Text>On Hire Check</Text>
                                            <IconArrowUpRight size={20} color={colors.baseContent} />
                                        </View>
                                        <Text variant={"h1"}>0</Text>
                                    </Pressable>

                                    <Pressable
                                        className="active:opacity-40"
                                        onPress={() =>
                                            router.push({
                                                pathname: "/(app)/search",
                                                params: {
                                                    value: "off-hire-check",
                                                    key: "inspectionType",
                                                },
                                            })
                                        }
                                    >
                                        <View className="flex-row items-center gap-1">
                                            <Text>Off Hire Check</Text>
                                            <IconArrowUpRight size={20} color={colors.baseContent} />
                                        </View>
                                        <Text variant={"h1"}>0</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        {/* Alerts */}
                        <View className="mt-4 p-2 rounded-lg border border-base-300 dark:border-base-100-dark">
                            <View className="flex-row items-start gap-2">
                                <IconExclamationCircle size={20} color={colors.baseContent} />
                                <Text variant={"h4"}>Alerts</Text>
                            </View>
                            <View className="mt-4 flex-row flex-wrap justify-between gap-4">
                                <Pressable
                                    className="active:opacity-40"
                                    onPress={() =>
                                        router.push({
                                            pathname: "/(app)/search",
                                            params: { value: "new-damage", key: "damageStatus" },
                                        })
                                    }
                                >
                                    <View className="flex-row items-center gap-1">
                                        <Text variant={"label"}>New Damage</Text>
                                        <IconArrowUpRight size={20} color={colors.baseContent} />
                                    </View>
                                    <Text variant={"h1"}>1</Text>
                                </Pressable>

                                <Pressable
                                    className="active:opacity-40"
                                    onPress={() =>
                                        router.push({
                                            pathname: "/(app)/search",
                                            params: { value: "checklist-defect", key: "defects" },
                                        })
                                    }
                                >
                                    <View className="flex-row items-center gap-1">
                                        <Text variant={"label"}>Checklist Defect</Text>
                                        <IconArrowUpRight size={20} color={colors.baseContent} />
                                    </View>
                                    <Text variant={"h1"}>0</Text>
                                </Pressable>

                                <Pressable
                                    className="active:opacity-40"
                                    onPress={() =>
                                        router.push({
                                            pathname: "/(app)/search",
                                            params: { value: "safety-audit", key: "defects" },
                                        })
                                    }
                                >
                                    <View className="flex-row items-center gap-1">
                                        <Text>Safety Audit Issue</Text>
                                        <IconArrowUpRight size={20} color={colors.baseContent} />
                                    </View>
                                    <Text variant={"h1"}>0</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Card>

                    {/* Vehicle Summary */}
                    <Card className="mt-4">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-start gap-2">
                                <IconTruckDelivery size={30} color={colors.baseContent} />
                                <Text variant={"h4"}>Vehicle Summary</Text>
                            </View>
                            <View className="flex-row items-center justify-between gap-2">
                                <Pressable
                                    className="active:opacity-40"
                                    onPress={() => openModal("vehicleSummaryModal")}
                                >
                                    <IconBoxMultiple size={20} color={colors.baseContent} />
                                </Pressable>
                                <Pressable className="active:opacity-40">
                                    <IconDownload size={20} color={colors.accent} />
                                </Pressable>
                            </View>
                        </View>
                        <View>
                            <Text variant={"caption-large"}>Vehicle Assigned: --</Text>
                        </View>
                        {/* Pie chart */}
                        <View className="p-4 items-center">
                            <PieChart donut data={vehiclePieData} radius={80} innerRadius={70} backgroundColor={bg} />
                        </View>

                        {/* Inspection count */}
                        <View className="mt-4 flex-row flex-wrap justify-between gap-4">
                            <Pressable
                                className="active:opacity-40"
                                onPress={() =>
                                    router.push({
                                        pathname: "/(app)/search",
                                        params: {
                                            value: "completed",
                                            key: "inspectionStatus",
                                        },
                                    })
                                }
                            >
                                <View className="flex-row items-center gap-1">
                                    <View className="w-4 h-4 bg-accent rounded" />
                                    <Text variant={"label"}>Inspected</Text>
                                    <IconArrowUpRight size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>24</Text>
                            </Pressable>

                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <View className="w-4 h-4 bg-warning rounded" />
                                    <Text variant={"label"}>To be Inspected</Text>
                                </View>
                                <Text variant={"h1"}>13</Text>
                            </Pressable>

                            <Pressable
                                className="active:opacity-40"
                                onPress={() =>
                                    router.push({
                                        pathname: "/(app)/vehicles",
                                        params: { value: "active", key: "status" },
                                    })
                                }
                            >
                                <View className="flex-row items-center gap-1">
                                    <Text>Active Vehicles</Text>
                                    <IconArrowUpRight size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>37</Text>
                            </Pressable>
                        </View>

                        {/* Vehicle Summary Modal */}
                        {isHomeModalOpen.vehicleSummaryModal && (
                            <VehicleSummary
                                isVisible={isHomeModalOpen.vehicleSummaryModal}
                                closeModal={closeModal}
                                vehicleSummaryData={inspectedData}
                                rows={selectedBtn.vehicleSummaryBtn === "inspected" ? inspectedRows : toBeInspectedRows}
                                selectedBtn={selectedBtn.vehicleSummaryBtn}
                                setSelectedBtnHandler={setSelectedBtnHandler}
                            />
                        )}
                    </Card>

                    {/* MOT Status */}
                    <Card className="mt-4">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <IconHierarchy2 size={30} color={colors.baseContent} />
                                <Text variant={"h4"}>MOT Status</Text>
                            </View>
                            <Pressable className="active:opacity-40" onPress={() => openModal("motStatusModal")}>
                                <IconBoxMultiple size={20} color={colors.baseContent} />
                            </Pressable>
                        </View>
                        <View className="mt-4 flex-row items-center gap-2">
                            <View className="w-1/2">
                                <Text variant={"label"}>Overdue</Text>
                                <Text variant={"h1"}>0</Text>
                            </View>
                            <View className="w-1/2">
                                <Text variant={"label"}>Due Soon</Text>
                                <Text variant={"h1"}>0</Text>
                            </View>
                        </View>

                        {/* MOT Status Modal */}
                        {isHomeModalOpen.motStatusModal && (
                            <MOTStatus
                                isVisible={isHomeModalOpen.motStatusModal}
                                closeModal={closeModal}
                                selectedBtn={selectedBtn.motStatusBtn}
                                setSelectedBtnHandler={setSelectedBtnHandler}
                                motColumnData={
                                    selectedBtn.motStatusBtn === "mot-overdue" ? motOverDueData : motDueSoonData
                                }
                            />
                        )}
                    </Card>

                    {/* Tax Due */}
                    <Card className="mt-4">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <IconCashBanknote size={30} color={colors.baseContent} />
                                <Text variant={"h4"}>Tax Due</Text>
                            </View>
                            <Pressable className="active:opacity-40" onPress={() => openModal("taxStatusModal")}>
                                <IconBoxMultiple size={20} color={colors.baseContent} />
                            </Pressable>
                        </View>
                        <View className="mt-4 flex-row items-center gap-2">
                            <View className="w-1/2">
                                <Text variant={"label"}>Overdue</Text>
                                <Text variant={"h1"}>0</Text>
                            </View>
                            <View className="w-1/2">
                                <Text variant={"label"}>Due Soon</Text>
                                <Text variant={"h1"}>0</Text>
                            </View>
                        </View>

                        {/* Tax Due Modal */}
                        {isHomeModalOpen.taxStatusModal && (
                            <TaxDueStatus
                                isVisible={isHomeModalOpen.taxStatusModal}
                                closeModal={closeModal}
                                selectedBtn={selectedBtn.taxStatusBtn}
                                setSelectedBtnHandler={setSelectedBtnHandler}
                                taxColumnData={
                                    selectedBtn.taxStatusBtn === "tax-overdue" ? taxOverDueData : taxDueSoonData
                                }
                            />
                        )}
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
