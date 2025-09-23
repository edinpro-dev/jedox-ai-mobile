import { Card } from "@/components/card";
import { Text } from "@/components/text";
import { ModalKey } from "@/features/vehicles/hooks/useVehicle";
import { IconArrowUpRight, IconChevronRight, IconExclamationCircleFilled, IconX } from "@tabler/icons-react-native";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";

type VehicleHistoryProps = {
    isVisible: boolean;
    closeModal: (key: ModalKey) => void;
};

const VehicleHistory = ({ isVisible, closeModal }: VehicleHistoryProps) => {
    return (
        <Modal isVisible={isVisible} className="p-4 rounded bg-base-100 dark:bg-base-100-dark">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                <View className="bg-base-100 dark:bg-base-100-dark">
                    <View className="flex-row items-center justify-between">
                        <Text variant={"h3"}>History</Text>
                        <Pressable onPress={() => closeModal("history")}>
                            <IconX size={24} color={"grey"} />
                        </Pressable>
                    </View>

                    <View className="py-4 gap-4 border-b border-base-200 dark:border-base-200-dark">
                        <View className="gap-1">
                            <Text variant={"label-large"}>Registration Number.: WN74NBX</Text>
                            <Text variant={"label-large"}>VIN No.:</Text>
                        </View>

                        <View className="gap-1">
                            <Text variant={"label-large"}>Ford Transit</Text>
                            <Pressable className="active:opacity-40">
                                <View className="flex-row items-center justify-start">
                                    <Text variant={"label-large"} color={"primary"}>
                                        Vehicle Details
                                    </Text>
                                    <IconChevronRight size={18} color={"#7367f0"} />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View className="flex-1 gap-4 mt-4">
                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>

                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>

                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>

                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>

                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>

                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>

                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>

                    <Card className="py-4">
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection History</Text>
                            <Pressable>
                                <IconArrowUpRight size={20} color={"#06b6d4"} />
                            </Pressable>
                        </View>

                        <View className="gap-3">
                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Existing Damages</Text>
                                <IconExclamationCircleFilled size={20} color="#f59e0b" />
                            </View>

                            <View className="flex-row items-center justify-between">
                                <Text variant="label-small">Start of Shift Inspection</Text>
                                <Text variant="label-small">17th Sep 2025 18:32</Text>
                            </View>

                            <View>
                                <Text variant="label-small">Inspected By:</Text>
                                <Text variant="label">conor.duncan@teamjedox.co.uk</Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default VehicleHistory;
