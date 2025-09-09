import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { useVehicle } from "@/features/vehicles/hooks/vehicle";
import { IconCsv, IconSearch, IconTruck, IconTruckDelivery } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const vehicles = () => {
    const { colors, fuelTypeData, ownershipTypeData, locationData } = useVehicle();
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

                    <Button variant="outline">
                        <View className="flex-row items-center gap-2">
                            <IconTruck size={24} color={"white"} />
                            <Text>Add New Vehicle</Text>
                        </View>
                    </Button>

                    <Button variant="outline">
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
            </View>
        </SafeAreaView>
    );
};

export default vehicles;
