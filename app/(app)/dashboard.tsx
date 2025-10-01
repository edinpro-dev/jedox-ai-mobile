import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import { useDashboard } from "@/features/dashboard/hooks/useDashboard";
import {
    IconBrandWhatsapp,
    IconCheck,
    IconCircleCheckFilled,
    IconCloudDownload,
    IconCloudUpload,
    IconDownload,
    IconExclamationCircleFilled,
    IconExternalLink,
    IconFileTextFilled,
    IconHourglassHigh,
    IconMail,
    IconMapPin,
    IconPencil,
    IconPrinter,
    IconShare,
} from "@tabler/icons-react-native";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
    const {
        comparisonRows,
        comparisonTableData,
        repairEstimateRows,
        repairEstimateData,
        availableItemsRows,
        functionalChecksRows,
        generalRows,
        inspectionChecklistAvailableItems,
        inspectionChecklistFunctionalChecks,
        inspectionChecklistGeneralChecks,
    } = useDashboard();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="p-4 gap-4">
                    <Card className="flex-row items-center gap-2">
                        <IconCircleCheckFilled size={24} color={"#06b6d4"} />
                        <Text variant={"h4"} color={"accent"}>
                            Inspection approved by Admin
                        </Text>
                    </Card>

                    <Card>
                        <View className="flex-row items-center justify-between">
                            {/* Step 1 */}
                            <View className="items-center">
                                <IconFileTextFilled size={28} color="#9ca3af" />
                            </View>

                            {/* Line */}
                            <View className="flex-1 h-0.5 bg-gray-300 mx-2" />

                            {/* Step 2 */}
                            <View className="items-center">
                                <IconHourglassHigh size={28} color="#f59e0b" />
                            </View>

                            {/* Line */}
                            <View className="flex-1 h-0.5 bg-gray-300 mx-2" />

                            {/* Step 3 */}
                            <View className="items-center">
                                <IconCheck size={28} color="#10b981" />
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View className="gap-4 py-1">
                            <View className="gap-1">
                                <View>
                                    <Text variant={"h4"}>KJ24BRX</Text>
                                    <Text variant={"h4"}>W1V3HBFZ2SP721625</Text>
                                </View>
                                <Text variant={"label"}>Mercedes Sprinter</Text>
                                <View className="flex-row items-center">
                                    <Text variant={"caption-large"}>Inspection Type: </Text>
                                    <Text variant={"caption-large"}>Start of Shift Inspection</Text>
                                </View>
                                <View className="flex-row items-center">
                                    <Text variant={"caption-large"}>Previous Driver: </Text>
                                    <Text variant={"caption-large"}>viliam.jankovec@teamjedox.co.uk</Text>
                                </View>
                                <View className="flex-row items-center">
                                    <Text variant={"caption-large"}>Pre-Inspection: </Text>
                                    <Text variant={"caption-large"}>30th Sep 2025 03:07</Text>
                                </View>
                                <View className="flex-row items-center">
                                    <Text variant={"caption-large"}>Post-Inspection: </Text>
                                    <Text variant={"caption-large"}>30th Sep 2025 18:17</Text>
                                </View>
                            </View>

                            {/* Line */}
                            <View className="border-t border-gray-600" />

                            {/* Buttons */}
                            <View className="gap-4">
                                <Button variant="outline">
                                    <View className="flex-row items-center gap-2">
                                        <IconPencil size={20} color={"#06b6d4"} />
                                        <Text variant={"button"} color={"accent"}>
                                            Edit
                                        </Text>
                                    </View>
                                </Button>

                                <Button variant="outline">
                                    <View className="flex-row items-center gap-2">
                                        <IconExternalLink size={20} color={"#06b6d4"} />
                                        <Text variant={"button"} color={"accent"}>
                                            Vehicle details
                                        </Text>
                                    </View>
                                </Button>
                            </View>

                            {/* Line */}
                            <View className="border-t border-gray-600" />

                            <View className="flex-row items-center">
                                <Text variant={"caption-large"}>Inspection ID: </Text>
                                <Text variant={"caption-large"}>Q-EBPUghWEJ</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text variant={"caption-large"}>Source (Leased from...): </Text>
                                <Text variant={"caption-large"}>ARVAL</Text>
                            </View>

                            <View className="flex-row items-center flex-wrap">
                                <Text variant={"caption-large"}>Created by: </Text>
                                <Text variant={"caption-large"}>codie.brown@teamjedox.co.uk, Jedox Couriers</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text variant={"caption-large"}>Bodystyle: </Text>
                                <Text variant={"caption-large"}>LWB</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text variant={"caption-large"}>Current Location: </Text>
                                <Text variant={"caption-large"}>DEH1 - Bathgate</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text variant={"caption-large"}>Ownership type: </Text>
                                <Text variant={"caption-large"}>Leased</Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View className="flex-row items-center justify-between">
                            <Text variant={"h4"}>Inspection report</Text>
                            <View className="flex-row items-center gap-4">
                                <Pressable className="active:opacity-40">
                                    <IconShare size={20} color={"#06b6d4"} />
                                </Pressable>
                                <Pressable className="active:opacity-40">
                                    <IconMail size={20} color={"#06b6d4"} />
                                </Pressable>
                                <Pressable className="active:opacity-40">
                                    <IconDownload size={20} color={"#06b6d4"} />
                                </Pressable>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View className="p-4 gap-4">
                            <View className="gap-2">
                                <Text variant={"h4"}>Inspection Images</Text>
                                <Button variant="outline">
                                    <View className="flex-row items-center gap-1">
                                        <IconMapPin size={20} color={"#06b6d4"} />
                                        <Text variant={"button"}>Location</Text>
                                    </View>
                                </Button>
                                <Button variant="outline">
                                    <View className="flex-row items-center gap-1">
                                        <IconMail size={20} color={"#06b6d4"} />
                                        <Text variant={"button"}>Send in Email</Text>
                                    </View>
                                </Button>
                                <Button variant="outline">
                                    <View className="flex-row items-center gap-1">
                                        <IconCloudDownload size={20} color={"#06b6d4"} />
                                        <Text variant={"button"}>Download</Text>
                                    </View>
                                </Button>
                                <Button variant="outline">
                                    <View className="flex-row items-center gap-1">
                                        <IconCloudUpload size={20} color={"#06b6d4"} />
                                        <Text variant={"button"}>Uploads</Text>
                                    </View>
                                </Button>
                            </View>

                            {/* Line */}
                            <View className="border-t border-gray-600" />

                            {/* Images */}
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View>
                                    <View className="flex-row items-center border-b border-gray-600">
                                        <Button variant="ghost">
                                            <Text>Exterior(10)</Text>
                                        </Button>
                                        <Button variant="ghost">
                                            <Text>Interior(1)</Text>
                                        </Button>
                                        <Button variant="ghost">
                                            <Text>Vehicle Details OCR(3)</Text>
                                        </Button>
                                        <Button variant="ghost">
                                            <Text>Exeptions(1)</Text>
                                        </Button>
                                    </View>

                                    <View>
                                        <Text variant={"h1"}>Images</Text>
                                        <Text variant={"h1"}>Images</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </Card>

                    {/* Car overview */}
                    <Card>
                        <View className="p-4 gap-4">
                            <View className="gap-2">
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Overview
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Heatmap
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Front
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Left Front
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Left Rear
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Rear
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Right Rear
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Right Front
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Roof
                                    </Text>
                                </Pressable>
                                <Pressable className={`py-2 border border-accent rounded-full active:opacity-40`}>
                                    <Text variant={"button"} className="text-center">
                                        Others
                                    </Text>
                                </Pressable>
                            </View>
                            <Text variant={"label-large"} className="py-4 text-center">
                                Tap on icons to view panels
                            </Text>

                            <View className="border border-base-300 dark:border-base-100-dark rounded-lg">
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                                <Text> Car Overview</Text>
                            </View>

                            {/* Comparison */}
                            <View className="p-4 gap-2 border border-base-300 dark:border-base-100-dark rounded-lg">
                                <Text variant={"h4"}>Comparison</Text>
                                <View className="gap-2">
                                    <Pressable className="py-2 border border-accent rounded-full active:opacity-40">
                                        <View className="flex-row items-center justify-center gap-1">
                                            <IconExclamationCircleFilled size={18} color={"#ef4444"} />
                                            <Text variant={"button"}>New damages</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable className="py-2 border border-accent rounded-full active:opacity-40">
                                        <View className="flex-row items-center justify-center gap-1">
                                            <IconExclamationCircleFilled size={18} color={"#f59e0b"} />
                                            <Text variant={"button"}>Existing damages</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable className="py-2 border border-accent rounded-full active:opacity-40">
                                        <View className="flex-row items-center justify-center gap-1">
                                            <IconExclamationCircleFilled size={18} color={"#000"} />
                                            <Text variant={"button"}>Manual inspection needed</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable className="py-2 border border-accent rounded-full active:opacity-40">
                                        <View className="flex-row items-center justify-center gap-1">
                                            <IconExclamationCircleFilled size={18} color={"#10b981"} />
                                            <Text variant={"button"}>No damages</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable className="py-2 border border-accent rounded-full active:opacity-40">
                                        <View className="flex-row items-center justify-center gap-1">
                                            <IconExclamationCircleFilled size={18} color={"#ff7f50"} />
                                            <Text variant={"button"}>Unrecognized</Text>
                                        </View>
                                    </Pressable>
                                </View>
                                <ScrollView horizontal>
                                    <Table
                                        title="Comparison Table"
                                        columns={comparisonTableData}
                                        rows={comparisonRows}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                    </Card>

                    {/*  Repair estimate*/}
                    <Card>
                        <View className="p-4 gap-4">
                            <View>
                                <Text variant={"h4"}>Repair estimate</Text>
                            </View>
                            <ScrollView horizontal>
                                <Table title="Repair Estimate" columns={repairEstimateData} rows={repairEstimateRows} />
                            </ScrollView>
                            <View className="gap-4">
                                <Button variant="outline">
                                    <Text className="button">Email Inspection Report</Text>
                                </Button>
                                <Button variant="outline">
                                    <Text className="button">Approve</Text>
                                </Button>
                                <Button variant="outline">
                                    <Text className="button">Reject</Text>
                                </Button>
                                <Button variant="outline">
                                    <Text className="button">Request approval</Text>
                                </Button>
                                <View className="flex-row items-center justify-between">
                                    <Pressable className="active:opacity-40">
                                        <IconPencil size={24} color={"#06b6d4"} />
                                    </Pressable>
                                    <Pressable className="active:opacity-40">
                                        <IconPrinter size={24} color={"#06b6d4"} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Card>

                    {/* Inspection Checklist */}
                    <Card>
                        <View className="p-4 gap-4">
                            <Text variant={"h4"}>Inspection Checklist</Text>

                            <ScrollView horizontal>
                                <Table
                                    title="General Checks"
                                    columns={inspectionChecklistGeneralChecks}
                                    rows={generalRows}
                                />
                            </ScrollView>

                            <ScrollView horizontal>
                                <Table
                                    title="Available Items"
                                    columns={inspectionChecklistAvailableItems}
                                    rows={availableItemsRows}
                                />
                            </ScrollView>

                            <ScrollView horizontal>
                                <Table
                                    title="Functional Checks"
                                    columns={inspectionChecklistFunctionalChecks}
                                    rows={functionalChecksRows}
                                />
                            </ScrollView>
                        </View>
                    </Card>

                    {/* Remarks */}
                    <Card>
                        <View className="p-4 gap-4">
                            <Text variant={"h4"}>Remarks</Text>
                            {/* Line */}
                            <View className="border-t border-accent" />
                        </View>
                    </Card>

                    {/* Share with customer */}
                    <Card>
                        <View className="p-4 gap-4">
                            <View className="flex-row items-center justify-between">
                                <Text variant={"label"}>Share with customer</Text>
                                <View className="flex-row items-center gap-2">
                                    <Pressable className="active:opacity-40">
                                        <IconShare size={20} color={"#06b6d4"} />
                                    </Pressable>

                                    <Pressable className="active:opacity-40">
                                        <IconBrandWhatsapp size={20} color={"#06b6d4"} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Dashboard;
