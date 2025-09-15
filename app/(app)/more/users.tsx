import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { AddNewUser } from "@/features/more/components/modals/users/add-new-user-form";
import { AddBulkUser } from "@/features/more/components/modals/users/bulk-user-form";
import { useUsers } from "@/features/more/hooks/useUsers";
import { IconSearch, IconUserPlus, IconUsersPlus } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const users = () => {
    const {
        colors,
        usersDummyData,
        userRoleDummyData,
        isUserModalOpen,
        closeModal,
        openModal,
        addNewUserRole,
        pdfFormatData,
    } = useUsers();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="flex-1 gap-4">
                <Text variant={"h4"} className="p-4">
                    Users
                </Text>
                <View className="p-4 items-start gap-4">
                    <Button variant="outline" className="w-full items-center" onPress={() => openModal("addNewUser")}>
                        <View className="flex-row items-center gap-2">
                            <IconUserPlus size={20} color="white" />
                            <Text>Add new user</Text>
                        </View>
                    </Button>
                    <Button variant="outline" className="w-full items-center" onPress={() => openModal("addBulkUser")}>
                        <View className="flex-row items-center gap-2">
                            <IconUsersPlus size={20} color="white" />
                            <Text>Bulk User Upload</Text>
                        </View>
                    </Button>
                </View>
                <View className="p-4 gap-4">
                    <Input
                        variant="primary"
                        placeholder="User"
                        className="w-full"
                        iconLeft={<IconSearch size={18} color={colors.primary} />}
                    />
                    <Select search={false} variant="primary" data={usersDummyData} placeholder="Status" />
                    <Select search={false} variant="primary" data={userRoleDummyData} placeholder="User Role" />
                </View>
            </View>

            {/* Add new user modal */}
            {isUserModalOpen.addNewUser && (
                <AddNewUser
                    isVisible={isUserModalOpen.addNewUser}
                    closeModal={closeModal}
                    addNewUserRole={addNewUserRole}
                    pdfFormatData={pdfFormatData}
                />
            )}

            {/* Add bulk user modal */}
            {isUserModalOpen.addBulkUser && (
                <AddBulkUser isVisible={isUserModalOpen.addBulkUser} closeModal={closeModal} />
            )}
        </SafeAreaView>
    );
};

export default users;
