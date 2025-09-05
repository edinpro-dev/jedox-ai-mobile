import { Input } from '@/components/input';
import { CalendarModal } from '@/components/modals/calendar';
import { Select } from '@/components/select';
import { useSearch } from '@/components/tabBar/search/search';
import { Text } from '@/components/text';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const search = () => {
    const { createdData, colors, isCalendarOpen, setIsCalendarOpen, selectedDate, setSelectedDate, inspectionStatusData, createdByValue, setCreatedByValue } = useSearch();
    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className='flex-1 bg-base-300 dark:bg-base-300-dark'
        >
            <Text variant={"h4"} className='p-4'>
                Search inspections
            </Text>

            {/* Search Inputs */}
            <View className='p-4 gap-4'>
                <Input
                    placeholder='🔍Search License plate/Vehicle number/VIN/Customer name/Quote ID'
                />

                {/* Disabled input */}
                <Input
                    disabled={true}
                    placeholder='🔍Jedox Couriers'
                />

                {/* Created by select */}
                <Select
                    data={createdData}
                    renderMode="checkbox"
                    value={createdByValue}
                    onChange={(val) => {
                        if (Array.isArray(val)) setCreatedByValue(val);
                    }} />

                {/* Date Input */}
                <Input
                    iconRight={
                        <AntDesign
                            name="calendar"
                            size={24}
                            color={colors.accent}
                            onPress={() => setIsCalendarOpen(true)}
                        />}
                    value={selectedDate.toDateString()}
                />
                {isCalendarOpen && (
                    <CalendarModal
                        visible={isCalendarOpen}
                        setVisible={setIsCalendarOpen}
                        value={selectedDate}
                        onSelectDate={setSelectedDate}
                    />
                )}

                {/* Inspection status select */}
                <Select
                    search={false}
                    data={inspectionStatusData}
                    placeholder='Inspection Status'
                />
            </View>
        </SafeAreaView>
    )
}

export default search;