import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { AddBulkVehicle } from "@/features/vehicles/components/modals/add-bulk-vehicle";
import { AddNewVehicle } from "@/features/vehicles/components/modals/add-new-vehicle";
import { useVehicle } from "@/features/vehicles/hooks/useVehicle";
import { IconCsv, IconSearch, IconTruck, IconTruckDelivery } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Vehicles = () => {
    const {
        colors,
        fuelTypeData,
        ownershipTypeData,
        locationData,
        isVehicleModalOpen,
        setIsVehicleModalOpen,
        isStatusActive,
        toggleStatus,
        translateX,
    } = useVehicle();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4">
                <Text variant={"h4"}>Vehicles</Text>
                <View className="mt-4 gap-4">
                    <Button variant="outline">
                        <View className="flex-row items-center gap-2">
                            <IconCsv size={24} color={"white"} />
                            <Text>Export vehicle list</Text>
                        </View>
                    </Button>

                    <Button
                        variant="outline"
                        onPress={() => setIsVehicleModalOpen((prev) => ({ ...prev, addNewVehicle: true }))}
                    >
                        <View className="flex-row items-center gap-2">
                            <IconTruck size={24} color={"white"} />
                            <Text>Add New Vehicle</Text>
                        </View>
                    </Button>

                    <Button
                        variant="outline"
                        onPress={() => setIsVehicleModalOpen((prev) => ({ ...prev, addBulkVehicle: true }))}
                    >
                        <View className="flex-row items-center gap-2">
                            <IconTruckDelivery size={24} color={"white"} />
                            <Text>Bulk Vehicle Upload</Text>
                        </View>
                    </Button>
                </View>

                <View className="mt-4 gap-4">
                    <Input
                        placeholder="Search Vehicle/Reg. No"
                        iconLeft={<IconSearch size={24} color={colors.primary} />}
                    />

                    <Button variant="outline">
                        <Text>Total Active Vehicles: 37</Text>
                    </Button>

                    <Button variant="outline">
                        <Text>Total Inactive Vehicles: 32</Text>
                    </Button>
                </View>

                <View className="mt-4 gap-4">
                    <Select search={false} data={fuelTypeData} placeholder="Fuel Type" />
                    <Select search={false} data={ownershipTypeData} placeholder="Ownership Type" />
                    <Select search={false} data={locationData} placeholder="Location" />
                </View>

                {isVehicleModalOpen.addNewVehicle && (
                    <AddNewVehicle
                        isVisible={isVehicleModalOpen.addNewVehicle}
                        setIsVehicleModalOpen={setIsVehicleModalOpen}
                        isStatusActive={isStatusActive}
                        toggleStatus={toggleStatus}
                        translateX={translateX}
                    />
                )}

                {isVehicleModalOpen.addBulkVehicle && (
                    <AddBulkVehicle
                        isVisible={isVehicleModalOpen.addBulkVehicle}
                        setIsVehicleModalOpen={setIsVehicleModalOpen}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default Vehicles;
