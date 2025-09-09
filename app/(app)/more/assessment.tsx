import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Text } from "@/components/text";
import { useAssessment } from "@/features/more/hooks/assessment/assessment";
import { IconCamera, IconCloudUpload } from "@tabler/icons-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const assessment = () => {
    const { colors } = useAssessment();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <ScrollView className="flex-1">
                <View className="p-4 gap-4">
                    <Card className="gap-4">
                        <View>
                            <View className="flex-row items-center justify-between border-b border-base-100 dark:border-base-100-dark">
                                <Text variant={"h4"}>Vehicle details</Text>

                                <Button variant="ghost">
                                    <Text variant={"button"} color={"accent"}>
                                        Reset
                                    </Text>
                                </Button>
                            </View>
                            <View className="mt-4 gap-4">
                                {/* License plate */}
                                <Input
                                    variant="primary"
                                    placeholder="License Plate Now*"
                                    iconRight={<IconCamera size={24} color={colors.accent} />}
                                />

                                {/* Inspection type */}

                                <Input variant="primary" placeholder="Inspection Type*" />

                                {/* Make and Model */}
                                <Input variant="primary" placeholder="Enter make & model*" />

                                {/* Bloodstyle */}
                                <Input disabled={true} placeholder="Bloodstyle*" />
                            </View>
                        </View>

                        <View>
                            <View className="flex-row items-center justify-between border-b border-base-100 dark:border-base-100-dark">
                                <Text variant={"h4"}>Customer details</Text>
                                <Button variant="ghost">
                                    <Text variant={"button"} color={"accent"}></Text>
                                </Button>
                            </View>

                            <View className="mt-4 gap-4">
                                {/* License plate */}
                                <Input
                                    variant="primary"
                                    placeholder="License Plate Now*"
                                    iconRight={<IconCamera size={24} color={colors.accent} />}
                                />

                                {/* Name */}

                                <Input variant="primary" placeholder="Name" />

                                {/* Email */}
                                <Input variant="primary" placeholder="Email" />

                                {/* Code */}
                                <Input variant="primary" placeholder="Code." />

                                {/* Contact Number */}
                                <Input variant="primary" placeholder="Contact phone." />
                            </View>
                        </View>

                        <View className="py-2 flex-row items-center justify-between">
                            <Text variant={"h4"}>*Mandatory fields</Text>

                            <Button variant="accent">
                                <Text variant={"button"}>Next</Text>
                            </Button>
                        </View>
                    </Card>
                    <Card>
                        <View className="border-b border-accent">
                            <Text variant={"h4"} className="p-2">
                                Uploads
                            </Text>
                        </View>
                        <View className="py-6 gap-3 items-center border-b border-accent/25">
                            <Text variant={"h2"}>Images</Text>
                            <Text variant={"caption"}>(png, jpg, jpeg, mp4, mov)</Text>

                            <IconCloudUpload size={68} color={colors.baseContent} />

                            <Button variant="accent">
                                <Text variant={"button"}>Upload</Text>
                            </Button>
                        </View>
                        <View className="p-2 items-start">
                            <Button variant="accent">
                                <Text variant={"button"}>Prev</Text>
                            </Button>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default assessment;
