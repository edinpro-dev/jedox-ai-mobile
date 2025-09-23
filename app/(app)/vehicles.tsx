import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import { AddBulkVehicle } from "@/features/vehicles/components/modals/add-bulk-vehicle";
import { AddNewVehicle } from "@/features/vehicles/components/modals/add-new-vehicle";
import { DeactivateVehicle } from "@/features/vehicles/components/modals/deactivate-vehicle";
import { EditVehicle } from "@/features/vehicles/components/modals/edit-vehicle";
import { VehicleHistory } from "@/features/vehicles/components/modals/history";
import { useVehicle } from "@/features/vehicles/hooks/useVehicle";
import { IconCsv, IconSearch, IconTruck, IconTruckDelivery } from "@tabler/icons-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Vehicles = () => {
    const {
        colors,
        fuelTypeData,
        ownershipTypeData,
        locationData,
        isVehicleModalOpen,
        closeModal,
        openModal,
        isStatusActive,
        toggleAddNewVehicleStatus,
        toggleEditVehicleModalStatus,
        translateX,
        vehicleDummyData,
        rows,
        toggleRowStatus,
        translateXRow,
        toggleIndividualRow,
        deactivateVehicle,
        toggleAllRow,
        selectedVehicle,
    } = useVehicle();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4">
                <Text variant={"h4"}>Vehicles</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-1 px-4">
                    <View className="gap-4">
                        <Button variant="outline">
                            <View className="flex-row items-center gap-2">
                                <IconCsv size={24} color={"white"} />
                                <Text>Export vehicle list</Text>
                            </View>
                        </Button>

                        <Button variant="outline" onPress={() => openModal("addNewVehicle")}>
                            <View className="flex-row items-center gap-2">
                                <IconTruck size={24} color={"white"} />
                                <Text>Add New Vehicle</Text>
                            </View>
                        </Button>

                        <Button variant="outline" onPress={() => openModal("addNewVehicle")}>
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
                            closeModal={closeModal}
                            isStatusActive={isStatusActive}
                            toggleAddNewVehicleStatus={toggleAddNewVehicleStatus}
                            translateX={translateX}
                        />
                    )}

                    {isVehicleModalOpen.addBulkVehicle && (
                        <AddBulkVehicle isVisible={isVehicleModalOpen.addBulkVehicle} closeModal={closeModal} />
                    )}

                    {/* Vehicle table */}
                    <View className="my-4 flex-1">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Table
                                title="Vehicles"
                                columns={vehicleDummyData}
                                rows={rows}
                                sortable={true}
                                sortableColumns={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                                useIsActive={false}
                                checked={deactivateVehicle}
                                checkbox={true}
                                isStatusActive={isStatusActive}
                                translateXRow={translateXRow}
                                toggleRowStatus={toggleRowStatus}
                                toggleIndividualRow={toggleIndividualRow}
                                toggleAll={toggleAllRow}
                                onEditClick={() => openModal("editVehicle")}
                                onHistoryClick={() => openModal("history")}
                            />
                        </ScrollView>

                        {/* Deactivate modal */}
                        {isVehicleModalOpen.deactivateVehicle && (
                            <View className="absolute bottom-0 left-0 right-0 items-center justify-center bg-transparent">
                                <DeactivateVehicle
                                    isVisible={isVehicleModalOpen.deactivateVehicle}
                                    closeModal={closeModal}
                                    selectedVehicle={selectedVehicle}
                                />
                            </View>
                        )}

                        {/* Edit vehicle modal */}
                        {isVehicleModalOpen.editVehicle && (
                            <EditVehicle
                                isVisible={isVehicleModalOpen.editVehicle}
                                closeModal={closeModal}
                                isStatusActive={isStatusActive}
                                toggleEditVehicleModalStatus={toggleEditVehicleModalStatus}
                                translateX={translateX}
                            />
                        )}

                        {/* History modal */}
                        {isVehicleModalOpen.history && (
                            <VehicleHistory isVisible={isVehicleModalOpen.history} closeModal={closeModal} />
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Vehicles;
