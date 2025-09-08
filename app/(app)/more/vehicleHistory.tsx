import { Select } from '@/components/select';
import { useVehicleHistory } from '@/components/tabBar/more/vehicleHistory/vehicleHistory';
import { Text } from '@/components/text';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const vehicleHistory = () => {
    const { colors } = useVehicleHistory();
    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className='flex-1 bg-base-300 dark:bg-base-300-dark'>
            <View className='flex-1 p-4 '>
                <View className='border-b border-base-100 dark:border-base-100-dark'>
                    <Text variant={"h4"} className='py-1'>Vehicle History</Text>
                </View>

                <View className='mt-4'>
                    <Select
                        data={[]}
                        variant='primary'
                        placeholder="LICENSEPLATE"
                        leftIcon={<FontAwesome name="search" size={18} color={colors.infoContent} />}
                    >
                    </Select>
                </View>

                <View className='flex-1 flex-col items-center justify-center'>
                    <View className='flex-row items-center'>
                        <AntDesign name="arrowup" size={70} color={colors.accent} />
                        <FontAwesome6 name="file-clipboard" size={70} color={colors.accent} />
                    </View>
                    <Text variant={"caption-large"} className='py-4'>PLEASE SELECT DEALER LICENSE PLATE TO VIEW CONTENT</Text>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default vehicleHistory