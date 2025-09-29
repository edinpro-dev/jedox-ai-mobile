import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { ModalKey, VehicleStatusState } from "@/features/vehicles/hooks/useVehicle";
import { IconCheck, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type AddNewVehicleProps = {
    isVisible: boolean;
    isStatusActive: VehicleStatusState;
    toggleAddNewVehicleStatus: () => void;
    closeModal: (key: ModalKey) => void;
    translateX: Animated.AnimatedInterpolation<string | number>;
};

const AddNewVehicle = ({
    isVisible,
    isStatusActive,
    closeModal,
    toggleAddNewVehicleStatus,
    translateX,
}: AddNewVehicleProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="flex-row items-center justify-between">
                    <Text variant={"h3"}>Add New Vehicle</Text>
                    <Button variant="ghost" onPress={() => closeModal("addNewVehicle")}>
                        <IconX size={24} color="grey" />
                    </Button>
                </View>

                <View className="flex-1 mt-4 gap-4">
                    <View>
                        <Text variant={"label"}>Registration Number*</Text>
                        <Input placeholder="Enter*" />
                    </View>

                    <View>
                        <Text variant={"label"}>Model*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text variant={"label"}>VIN</Text>
                        <Input placeholder="Enter*" />
                    </View>

                    <View>
                        <Text variant={"label"}>Current Location*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text variant={"label"}>Make*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text variant={"label"}>Bloodstyle</Text>
                        <Input placeholder="Enter*" />
                    </View>

                    <View>
                        <Text variant={"label"}>Fuel Type*</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    <View>
                        <Text variant={"label"}>Ownership type</Text>
                        <Select data={[]} placeholder="Select*" />
                    </View>

                    {/* Status button */}
                    <View>
                        <Text variant={"label"} className="mb-2">
                            Status
                        </Text>
                        <View className="flex-row items-center gap-4">
                            <Pressable
                                onPress={toggleAddNewVehicleStatus}
                                style={{
                                    width: 60,
                                    height: 30,
                                    borderRadius: 15,
                                    backgroundColor: isStatusActive.addNewVehicleStatus ? "#10b981" : "#d1d5db",
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
                                    {isStatusActive.addNewVehicleStatus && <IconCheck size={18} color="#10b981" />}
                                </Animated.View>
                            </Pressable>
                            <Text variant={"caption"}>
                                {isStatusActive.addNewVehicleStatus ? "Active" : "Inactive"}
                            </Text>
                        </View>
                    </View>

                    <View className="mt-4">
                        <Button variant="primary">
                            <Text variant={"button"}>Create Vehicle</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default AddNewVehicle;
