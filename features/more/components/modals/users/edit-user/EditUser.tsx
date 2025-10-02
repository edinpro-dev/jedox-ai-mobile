import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { UserModalState, UserStatusState } from "@/features/more/hooks/useUsers";
import { IconCheck, IconPoint, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type EditUserProps = {
    isVisible: boolean;
    sendEmailToTheUser: boolean;
    closeModal: (key: keyof UserModalState) => void;
    toggleEditUserStatus: () => void;
    toggleSendEmailCheckbox: () => void;
    translateX: Animated.AnimatedInterpolation<string | number>;
    isStatusActive: UserStatusState;
};

const EditUser = ({
    isVisible,
    closeModal,
    toggleEditUserStatus,
    translateX,
    isStatusActive,
    toggleSendEmailCheckbox,
    sendEmailToTheUser,
}: EditUserProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="pb-4 flex-row items-center justify-between">
                    <Text variant={"h3"}>Edit User</Text>
                    <Pressable onPress={() => closeModal("editUser")}>
                        <IconX size={24} color={"grey"} />
                    </Pressable>
                </View>

                <View className="border-y border-base-200 dark:border-base-200-dark">
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
                        <Text>User Role *</Text>
                        <Select search={false} data={[]} placeholder="Select User Role" />

                        <View className="gap-5">
                            <View>
                                <Text>Name</Text>
                                <Input variant="primary" placeholder="Name" />
                            </View>

                            <View>
                                <Text>Email *</Text>
                                <Input variant="primary" placeholder="Email" />
                            </View>

                            <View>
                                <Text>User ID *</Text>
                                <Input variant="primary" placeholder="User ID*" />
                            </View>

                            <View>
                                <Text>Password *</Text>
                                <Input variant="primary" isPassword={true} placeholder="Password *" />
                            </View>

                            {/* Status button */}
                            <View>
                                <Text variant={"label"} className="mb-2">
                                    Status
                                </Text>
                                <View className="flex-row items-center gap-4">
                                    <Pressable
                                        onPress={toggleEditUserStatus}
                                        style={{
                                            width: 60,
                                            height: 30,
                                            borderRadius: 15,
                                            backgroundColor: isStatusActive.editUser ? "#10b981" : "#d1d5db",
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
                                            {isStatusActive.editUser && <IconCheck size={18} color="#10b981" />}
                                        </Animated.View>
                                    </Pressable>
                                    <Text variant={"caption"}>{isStatusActive.editUser ? "Active" : "Inactive"}</Text>
                                </View>
                            </View>

                            <View className="flex-row items-center justify-start gap-2">
                                <Pressable className="active:opacity-40" onPress={toggleSendEmailCheckbox}>
                                    <View
                                        className={`w-5 h-5 border border-gray-300 rounded flex-row items-center justify-center ${sendEmailToTheUser ? "bg-accent" : ""}`}
                                    >
                                        {sendEmailToTheUser && <IconCheck size={18} color="white" />}
                                    </View>
                                </Pressable>
                                <Text variant={"label"}>Send an email to the user</Text>
                            </View>

                            <View className="gap-4">
                                <Button
                                    onPress={() => {
                                        // save
                                    }}
                                >
                                    <Text variant={"button"}>Save</Text>
                                </Button>

                                <Button variant="outline-primary" onPress={() => closeModal("editUser")}>
                                    <Text variant={"button"}>Cancel</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default EditUser;
