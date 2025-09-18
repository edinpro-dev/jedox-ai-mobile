import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { ModalKey, VehicleStatusState } from "@/features/vehicles/hooks/useVehicle";
import { IconCheck, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type EditVehicleProps = {
    isVisible: boolean;
    isStatusActive: VehicleStatusState;
    closeModal: (key: ModalKey) => void;
    toggleEditVehicleModalStatus: () => void;
    translateX: Animated.AnimatedInterpolation<string | number>;
};

const EditVehicle = ({
    isVisible,
    closeModal,
    isStatusActive,
    toggleEditVehicleModalStatus,
    translateX,
}: EditVehicleProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="flex-row items-center justify-between">
                    <Text variant={"h3"}>Edit vehicle</Text>
                    <Pressable onPress={() => closeModal("editVehicle")}>
                        <IconX size={24} color={"grey"} />
                    </Pressable>
                </View>
                <View className="py-4 gap-2 border-y border-base-200 dark:border-base-200-dark">
                    <View>
                        <Text>Registration Number</Text>
                        <Input placeholder="Enter" />
                    </View>

                    <View>
                        <Text>Make</Text>
                        <Input placeholder="Enter" />
                    </View>

                    <View>
                        <Text>Model</Text>
                        <Input placeholder="Enter" />
                    </View>

                    <View>
                        <Text>VIN</Text>
                        <Input placeholder="Enter" />
                    </View>

                    <View>
                        <Text>Variant</Text>
                        <Input placeholder="Enter" />
                    </View>

                    <View>
                        <Text>Bloodstyle</Text>
                        <Input placeholder="Enter" />
                    </View>

                    <View>
                        <View className="flex-row gap-1">
                            <Text>Fuel Type</Text>
                            <Text color={"error"}>*</Text>
                        </View>
                        <Select search={false} data={[]} placeholder="Select" />
                    </View>

                    <View>
                        <View className="flex-row gap-1">
                            <Text>Current Location</Text>
                            <Text color={"error"}>*</Text>
                        </View>
                        <Select search={false} data={[]} placeholder="Select" />
                    </View>

                    <View>
                        <Text>Ownership type Type</Text>
                        <Select search={false} data={[]} placeholder="Select" />
                    </View>

                    <View>
                        <Text>Source(Leased from...)</Text>
                        <Input placeholder="Enter" />
                    </View>

                    {/* Status button */}
                    <View className="py-4">
                        <Text variant={"label"} className="mb-2">
                            Status
                        </Text>
                        <View className="flex-row items-center gap-4">
                            <Pressable
                                onPress={toggleEditVehicleModalStatus}
                                style={{
                                    width: 60,
                                    height: 30,
                                    borderRadius: 15,
                                    backgroundColor: isStatusActive.editVehicleModalStatus ? "#10b981" : "#d1d5db",
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
                                    {isStatusActive.editVehicleModalStatus && <IconCheck size={18} color="#10b981" />}
                                </Animated.View>
                            </Pressable>
                            <Text variant={"caption"}>
                                {isStatusActive.editVehicleModalStatus ? "Active" : "Inactive"}
                            </Text>
                        </View>
                    </View>

                    <View className="gap-4">
                        <Button>Save</Button>
                        <Button variant="outline" onPress={() => closeModal("editVehicle")}>
                            Cancel
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default EditVehicle;
