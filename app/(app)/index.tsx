import CalendarModal from "@/components/modals/calendar/CalendarModal";
import { Select } from "@/components/select";
import { useHome } from "@/components/tabBar/home/home";
import { Text } from "@/components/text";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
    const { locationData, dateData, selectedLocation, setSelectedLocation, selectedDate, handleDateChange, isCalendarOpen, setIsCalendarOpen, handleCustomDateSelect } = useHome();
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1">

                {/* Location select */}
                <View
                    style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'gray', padding: 26 }}
                >
                    <Select
                        search={false}
                        variant="primary"
                        data={locationData}
                        value={selectedLocation?.value}
                        placeholder="Select Location"
                        onChange={(item) => setSelectedLocation(item)}
                    />
                </View>

                {/* Date select */}
                <View
                    style={{ padding: 26 }}
                >

                    <View
                        className="flex-row justify-end">
                        <Select
                            search={false}
                            variant="primary"
                            data={dateData}
                            value={selectedDate?.value}
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

                    <View className="mt-4"
                    >
                        <View
                            style={{ flexDirection: "row", justifyContent: "space-between" }}
                        >
                            <View className="flex-row items-start">
                                <AntDesign name="form" size={30} color="white" />
                                <Text variant={"h4"}>InspectionSummary</Text>
                            </View>
                            <Pressable>
                                <Text color={"accent"}>
                                    <AntDesign name="download" size={24} />
                                </Text>
                            </Pressable>
                        </View>
                        <View>
                            <Text variant={"caption-large"}>Total Inspections: 242</Text>
                        </View>
                        <View>
                            <Text>
                                Pie Chart
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text>Complete</Text>
                                <Text>231</Text>
                            </View>
                            <View>
                                <Text>In Progress</Text>
                                <Text>2</Text>
                            </View>
                            <View>
                                <Text>Incomplete</Text>
                                <Text>9</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
