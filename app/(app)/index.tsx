import Card from "@/components/card/Card";
import CalendarModal from "@/components/modals/calendar/CalendarModal";
import { Select } from "@/components/select";
import { SelectDataItem } from "@/components/select/Select";
import { useHome } from "@/components/tabBar/home/home";
import { Text } from "@/components/text";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Pressable, ScrollView, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
    const { locationData, dateData, selectedLocation, setSelectedLocation, selectedDate, handleDateChange, isCalendarOpen, setIsCalendarOpen, handleCustomDateSelect, inspectionPieData, colors, vehiclePieData } = useHome();
    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            className="flex-1 bg-base-300 dark:bg-base-300-dark">
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

                {/* Date select */}
                <View className="p-4">
                    <View
                        className="flex-row justify-end">
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
                    <CalendarModal
                        visible={isCalendarOpen}
                        setVisible={setIsCalendarOpen}
                        value={new Date()}
                        onSelectDate={handleCustomDateSelect}
                    />

                    {/* Inspection Summary */}
                    <Card className="mt-4 bg-base-100 dark:bg-base-100-dark">
                        <View className="p-4 flex-row items-center justify-between" >
                            <View className="flex-row items-start gap-2">
                                <AntDesign name="form" size={30} color={colors.baseContent} />
                                <Text variant={"h4"}>Inspection Summary</Text>
                            </View>
                            <Pressable className="active:opacity-40">
                                <AntDesign name="download" size={20} color={colors.accent} />
                            </Pressable>
                        </View>
                        <View className="px-4">
                            <Text variant={"caption-large"}>Total Inspections: 202</Text>
                        </View>
                        {/* Pie chart */}
                        <View className="p-4 items-center">
                            <PieChart
                                donut
                                data={inspectionPieData}
                                radius={80}
                                innerRadius={70}
                                backgroundColor={colors.base100}

                            />
                        </View>

                        {/* Inspection count */}
                        <View className="mt-4 flex-row flex-wrap justify-between gap-4">
                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <View className="w-4 h-4 bg-accent rounded" />
                                    <Text variant={"label"}>Complete</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>231</Text>
                            </Pressable>

                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <View className="w-4 h-4 bg-warning rounded" />
                                    <Text variant={"label"}>In Progress</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>4</Text>
                            </Pressable>

                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <View className="w-4 h-4 bg-error rounded" />
                                    <Text>Incomplete</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>9</Text>
                            </Pressable>
                        </View>
                    </Card>

                    {/* Alerts */}
                    <Card className="mt-4 bg-base-100 dark:bg-base-100-dark">
                        <View className="p-4 flex-row items-start gap-2">
                            <AntDesign name="exclamationcircleo" size={20} color={colors.baseContent} />
                            <Text variant={"h4"}>Alerts</Text>
                        </View>
                        <View className="mt-4 flex-row flex-wrap justify-between gap-4">
                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <Text variant={"label"}>New Damage</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>1</Text>
                            </Pressable>

                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <Text variant={"label"}>Checklist Defect</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>0</Text>
                            </Pressable>

                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <Text>Safety Audit Issue</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>0</Text>
                            </Pressable>
                        </View>
                    </Card>

                    {/* Summary by type */}
                    <Card className="mt-4 bg-base-100 dark:bg-base-100-dark">
                        <View className="p-4 flex-row items-center justify-between" >
                            <View className="flex-row items-start gap-2">
                                <AntDesign name="form" size={30} color={colors.baseContent} />
                                <Text variant={"h4"}>Inspection Summary - by type</Text>
                            </View>
                        </View>

                        {/* Inspection count */}
                        <View className="mt-4 flex-row justify-between">
                            <View>
                                <Pressable className="active:opacity-40">
                                    <View className="flex-row items-center gap-1">
                                        <Text variant={"label"}>Start of Shift Inspection</Text>
                                        <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                    </View>
                                    <Text variant={"h1"}>0</Text>
                                </Pressable>

                                <Pressable className="active:opacity-40">
                                    <View className="flex-row items-center gap-1">
                                        <Text variant={"label"}>End of Shift Inspection</Text>
                                        <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                    </View>
                                    <Text variant={"h1"}>0</Text>
                                </Pressable>
                            </View>

                            <View>
                                <Pressable className="active:opacity-40">
                                    <View className="flex-row items-center gap-1">
                                        <Text>On Hire Check</Text>
                                        <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                    </View>
                                    <Text variant={"h1"}>0</Text>
                                </Pressable>

                                <Pressable className="active:opacity-40">
                                    <View className="flex-row items-center gap-1">
                                        <Text>Off Hire Check</Text>
                                        <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                    </View>
                                    <Text variant={"h1"}>0</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Card>

                    {/* Vehicle Summary */}
                    <Card className="mt-4 bg-base-100 dark:bg-base-100-dark">
                        <View className="p-4 flex-row items-center justify-between" >
                            <View className="flex-row items-start gap-2">
                                <AntDesign name="form" size={30} color={colors.baseContent} />
                                <Text variant={"h4"}>Vehicle Summary</Text>
                            </View>
                            <Pressable>
                                <AntDesign name="download" size={20} color={colors.accent} />
                            </Pressable>
                        </View>
                        <View className="px-4">
                            <Text variant={"caption-large"}>Vehicle Assigned: --</Text>
                        </View>
                        {/* Pie chart */}
                        <View className="p-4 items-center">
                            <PieChart
                                donut
                                data={vehiclePieData}
                                radius={80}
                                innerRadius={70}
                                backgroundColor={colors.base100}

                            />
                        </View>

                        {/* Inspection count */}
                        <View className="mt-4 flex-row flex-wrap justify-between gap-4">
                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <View className="w-4 h-4 bg-accent rounded" />
                                    <Text variant={"label"}>Inspected</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>24</Text>
                            </Pressable>

                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <View className="w-4 h-4 bg-warning rounded" />
                                    <Text variant={"label"}>To be Inspected</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>13</Text>
                            </Pressable>

                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center gap-1">
                                    <Text>Active Vehicles</Text>
                                    <Feather name="arrow-up-right" size={20} color={colors.baseContent} />
                                </View>
                                <Text variant={"h1"}>37</Text>
                            </Pressable>
                        </View>
                    </Card>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
