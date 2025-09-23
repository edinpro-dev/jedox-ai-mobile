import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import { AddNewUser } from "@/features/more/components/modals/users/add-new-user-form";
import { AddBulkUser } from "@/features/more/components/modals/users/bulk-user-form";
import { DeactivateUser } from "@/features/more/components/modals/users/deactivate-user";
import { EditUser } from "@/features/more/components/modals/users/edit-user";
import { useUsers } from "@/features/more/hooks/useUsers";
import { IconArrowLeft, IconSearch, IconUserPlus, IconUsersPlus } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
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
        dummyUsersData,
        rows,
        deactivateUser,
        toggleAllRow,
        toggleIndividualRow,
        selectedUser,
        isStatusActive,
        toggleEditUserStatus,
        translateX,
        sendEmailToTheUser,
        toggleSendEmailCheckbox,
    } = useUsers();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <View className="p-4 flex-row items-center gap-4">
                <Pressable className="active:opacity-40" onPress={() => router.back()}>
                    <IconArrowLeft size={24} color={colors.accent} />
                </Pressable>
                <Text variant={"h2"}>Users</Text>
            </View>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="flex-1 p-4 gap-4">
                    <View className="items-start gap-4">
                        <Button
                            variant="outline"
                            className="w-full items-center"
                            onPress={() => openModal("addNewUser")}
                        >
                            <View className="flex-row items-center gap-2">
                                <IconUserPlus size={20} color="white" />
                                <Text>Add new user</Text>
                            </View>
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full items-center"
                            onPress={() => openModal("addBulkUser")}
                        >
                            <View className="flex-row items-center gap-2">
                                <IconUsersPlus size={20} color="white" />
                                <Text>Bulk User Upload</Text>
                            </View>
                        </Button>
                    </View>
                    <View className="gap-4">
                        <Input
                            variant="primary"
                            placeholder="User"
                            className="w-full"
                            iconLeft={<IconSearch size={18} color={colors.primary} />}
                        />
                        <Select search={false} variant="primary" data={usersDummyData} placeholder="Status" />
                        <Select search={false} variant="primary" data={userRoleDummyData} placeholder="User Role" />
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

                    {/* Users Table */}
                    <View className="flex-1">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Table
                                title="Users"
                                columns={dummyUsersData}
                                rows={rows}
                                sortable={true}
                                sortableColumns={[1, 2, 3]}
                                checkbox
                                checked={deactivateUser}
                                toggleAll={toggleAllRow}
                                toggleIndividualRow={toggleIndividualRow}
                                onEditClick={() => openModal("editUser")}
                            />
                        </ScrollView>

                        {/* Deactivate modal */}
                        {isUserModalOpen.deactivateUser && (
                            <View className="absolute bottom-0 left-0 right-0 items-center justify-center bg-transparent">
                                <DeactivateUser
                                    isVisible={isUserModalOpen.deactivateUser}
                                    closeModal={closeModal}
                                    selectedUser={selectedUser}
                                />
                            </View>
                        )}

                        {/* Edit User modal */}
                        {isUserModalOpen.editUser && (
                            <EditUser
                                isVisible={isUserModalOpen.editUser}
                                closeModal={closeModal}
                                toggleEditUserStatus={toggleEditUserStatus}
                                translateX={translateX}
                                isStatusActive={isStatusActive}
                                toggleSendEmailCheckbox={toggleSendEmailCheckbox}
                                sendEmailToTheUser={sendEmailToTheUser}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default users;
