import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/more/hooks/useUsers";
import { IconPoint, IconX } from "@tabler/icons-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type AddNewUserProps = {
    isVisible: boolean;
    addNewUserRole: {
        label: string;
        value: string;
    }[];
    pdfFormatData: {
        label: string;
        value: string;
    }[];
    closeModal: (key: ModalKey) => void;
};
const AddNewUser = ({ isVisible, addNewUserRole, pdfFormatData, closeModal }: AddNewUserProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="gap-4">
                    <View className="flex-row items-center justify-between">
                        <Text variant={"h3"}>Add New User</Text>
                        <Button variant="ghost" onPress={() => closeModal("addNewUser")}>
                            <IconX size={24} color="grey" />
                        </Button>
                    </View>

                    <View className="py-4 border-y border-base-200 dark:border-base-200-dark">
                        <Card className="my-4">
                            <Text variant={"h2"}>User Role Permissions</Text>
                            <View className="my-2">
                                <Text variant={"h3"}>Location Admin</Text>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Create inspections</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Create users</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Access all inspections in their dealer/location</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Access BI dashboards</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Activate/Deactivate vehicle in fleet</Text>
                                </View>
                            </View>

                            <View className="my-2">
                                <Text variant={"h3"}>Location Admin</Text>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Create inspections</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Create users</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Access all inspections in their dealer/location</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Access BI dashboards</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Activate/Deactivate vehicle in fleet</Text>
                                </View>
                            </View>

                            <View className="my-2">
                                <Text variant={"h3"}>Inspector</Text>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Create inspections</Text>
                                </View>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Search & view inpections</Text>
                                </View>
                            </View>

                            <View>
                                <Text variant={"h3"}>Driver</Text>
                                <View className="px-2 flex-row items-center">
                                    <IconPoint size={20} color="grey" />
                                    <Text>Create inspections</Text>
                                </View>
                            </View>
                        </Card>

                        {/* Form */}
                        <View className="my-4">
                            <Text variant={"label"}>User Role *</Text>
                            <Select
                                variant="primary"
                                search={false}
                                data={addNewUserRole}
                                placeholder="Select User Role"
                            />

                            <View className="gap-5">
                                <View>
                                    <Text variant={"label"}>Name</Text>
                                    <Input variant="primary" placeholder="Name" />
                                </View>

                                <View>
                                    <Text variant={"label"}>Email *</Text>
                                    <Input variant="primary" placeholder="Email" />
                                </View>

                                <View>
                                    <Text variant={"label"}>User ID *</Text>
                                    <Input variant="primary" placeholder="User ID*" />
                                </View>

                                <View>
                                    <Text variant={"label"}>Password *</Text>
                                    <Input variant="primary" isPassword={true} placeholder="Password *" />
                                </View>

                                <View>
                                    <Text variant={"label"}> PDF Formats *</Text>
                                    <Select
                                        variant="primary"
                                        search={false}
                                        data={pdfFormatData}
                                        placeholder="Choose PDF Formats"
                                        renderMode="checkbox"
                                    />
                                </View>

                                <Button>
                                    <Text variant={"button"}>Create User</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default AddNewUser;
