import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { VehicleModalState } from "@/features/vehicles/hooks/useVehicle";
import { IconCheck, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type AddNewVehicleProps = {
    isVisible: boolean;
    isStatusActive: boolean;
    toggleStatus: () => void;
    translateX: Animated.AnimatedInterpolation<string | number>;
    setIsVehicleModalOpen: React.Dispatch<React.SetStateAction<VehicleModalState>>;
};

const AddNewVehicle = ({
    isVisible,
    isStatusActive,
    setIsVehicleModalOpen,
    toggleStatus,
    translateX,
}: AddNewVehicleProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="gap-3">
                    <View className="flex-row items-center justify-between">
                        <Text variant={"h3"}>Add New Vehicle</Text>
                        <Button
                            variant="ghost"
                            onPress={() => setIsVehicleModalOpen((prev) => ({ ...prev, addNewVehicle: false }))}
                        >
                            <IconX size={24} color="grey" />
                        </Button>
                    </View>

                    <View>
                        <Text>Registration Number*</Text>
                        <Input placeholder="Enter*" />
                    </View>

                    <View>
                        <Text>Model*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text>VIN</Text>
                        <Input placeholder="Enter*" />
                    </View>

                    <View>
                        <Text>Current Location*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text>Make*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text>Bloodstyle</Text>
                        <Input placeholder="Enter*" />
                    </View>

                    <View>
                        <Text>Fuel Type*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text>Ownership type</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text variant={"label"} className="mb-2">
                            Status
                        </Text>
                        <View className="flex-row items-center gap-4">
                            <Pressable
                                onPress={toggleStatus}
                                style={{
                                    width: 60,
                                    height: 30,
                                    borderRadius: 15,
                                    backgroundColor: isStatusActive ? "#10b981" : "#d1d5db",
                                    justifyContent: "center",
                                    padding: 2,
                                }}
                            >
                                <Animated.View
                                    style={{
                                        width: 26,
                                        height: 26,
                                        borderRadius: 13,
                                        backgroundColor: "white",
                                        transform: [{ translateX }],
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {isStatusActive && <IconCheck size={18} color="#10b981" />}
                                </Animated.View>
                            </Pressable>
                            <Text variant={"caption"}>{isStatusActive ? "Active" : "Inactive"}</Text>
                        </View>
                    </View>

                    <Button variant="primary">
                        <Text>Create Vehicle</Text>
                    </Button>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default AddNewVehicle;
