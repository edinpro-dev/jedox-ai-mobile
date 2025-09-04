import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Colors } from "@/constants/Colors";
import { CalendarModalProps } from "@/features/shared/types";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, View } from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";

interface DateTimePickerProps {
    // Required props
    value: Date;
    onChange?: (event: DateTimePickerEvent, date?: Date) => void;

    // Optional props
    mode?: "date" | "time" | "datetime";
    display?: "default" | "spinner" | "calendar" | "clock" | "inline";

    // Date/time constraints
    minimumDate?: Date;
    maximumDate?: Date;

    // Styling (iOS specific)
    accentColor?: string;
    themeVariant?: "light" | "dark";

    // Android specific
    positiveButtonLabel?: string;
    negativeButtonLabel?: string;

    // General props
    disabled?: boolean;
    timeZoneOffsetInMinutes?: number;
    timeZoneOffsetInSeconds?: number;
    locale?: string;

    // Event handlers
    onError?: (error: string) => void;
}

const CalendarModal = ({ visible, setVisible, onSelectDate, ...props }: CalendarModalProps & DateTimePickerProps) => {
    const colorScheme = useColorScheme();
    const [tempDate, setTempDate] = useState(new Date());

    const handleChange = (event: DateTimePickerEvent, date?: Date) => {
        if (Platform.OS === "android") {
            // On Android: closes automatically when user picks
            setVisible(false);
            if (date) onSelectDate(date);
        } else {
            // On iOS: update temp date until user confirms
            if (date) setTempDate(date);
        }
    };

    const handleConfirm = () => {
        setVisible(false);
        onSelectDate(tempDate);
    };

    if (Platform.OS === "android") {
        return <>{visible && <DateTimePicker {...props} mode="date" display="default" onChange={handleChange} />}</>;
    }

    // iOS popup modal
    return (
        <Modal isVisible={visible} onBackdropPress={() => setVisible(false)}>
            <SafeAreaView className="bg-base-300 dark:bg-base-100-dark p-2 pb-8 rounded-2xl items-center">
                <DateTimePicker
                    {...props}
                    className="font-poppins-medium text-xs"
                    mode="date"
                    display="inline"
                    onChange={handleChange}
                    themeVariant={colorScheme as "light" | "dark"}
                    accentColor={Colors.light.primary}
                />
                <View className="w-full flex flex-row items-center justify-end gap-4 px-4">
                    <Button variant="ghost" onPress={() => setVisible(false)}>
                        <Text>Cancel</Text>
                    </Button>
                    <Button onPress={handleConfirm}>Confirm</Button>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default CalendarModal;
