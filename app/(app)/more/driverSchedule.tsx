import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Select } from '@/components/select';
import { useDriverSchedule } from '@/components/tabBar/more/driverSchedule/driverSchedule';
import { Text } from '@/components/text';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { SafeAreaView } from 'react-native-safe-area-context';

const driverSchedule = () => {
    const { colors, vehiclePieData } = useDriverSchedule();
    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className='flex-1 bg-base-300 dark:bg-base-300-dark'>
            <View className='p-4'>
                <View className='pb-4 border-b border-base-100'>
                    <Text variant={"h4"}>Driver Schedule</Text>
                    <View className='mt-4'>
                        <View className='gap-4'>
                            <Button disabled={true} variant='outline'>
                                <View className='flex-row items-center gap-2'>
                                    <FontAwesome6 name="file-csv" size={24} color={colors.accent} />
                                    <Text>
                                        Download CSV
                                    </Text>
                                </View>
                            </Button>

                            <Button variant='primary'>
                                <View className='flex-row items-center gap-2'>
                                    <AntDesign name="plus" size={20} color="white" />
                                    <Text>
                                        Bulk Assignment
                                    </Text>
                                </View>
                            </Button>
                        </View>
                        <View className='mt-4 gap-4'>
                            <Card className='bg-base-100 dark:bg-base-100-dark'>
                                <Text variant={"h2"}>Vehicles</Text>
                                <View className='flex-row items-center justify-evenly'>
                                    <View className='px-1 border-r border-white'>
                                        <View className='flex-row items-center justify-between gap-1'>
                                            <View className='flex-row items-center gap-1'>
                                                <View className='w-5 h-5 rounded bg-white'>

                                                </View>
                                                <FontAwesome5 name="truck" size={18} color="white" />
                                                <Text>Total Active Vehicles</Text>
                                            </View>
                                            <Text>37</Text>
                                        </View>
                                        <View className='flex-row items-center justify-between gap-1'>
                                            <View className='flex-row items-center gap-1'>
                                                <View className='w-5 h-5 rounded bg-primary'>

                                                </View>
                                                <Entypo name="link" size={24} color="white" />
                                                <Text>No of Vehicles Assigned</Text>
                                            </View>
                                            <Text>0</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <PieChart
                                            donut
                                            data={vehiclePieData}
                                            radius={30}
                                            innerRadius={20}
                                            backgroundColor={colors.base100}
                                        />
                                    </View>
                                </View>
                            </Card>

                            <Card className='bg-base-100 dark:bg-base-100-dark'>
                                <Text variant={"h2"}>Drivers</Text>
                                <View className='flex-row items-center justify-evenly'>
                                    <View className='px-1 border-r border-white'>
                                        <View className='flex-row items-center justify-between gap-1'>
                                            <View className='flex-row items-center gap-1'>
                                                <View className='w-5 h-5 rounded bg-white'>

                                                </View>
                                                <FontAwesome5 name="users" size={24} color="white" />
                                                <Text>Total Number of Drivers</Text>
                                            </View>
                                            <Text>37</Text>
                                        </View>
                                        <View className='flex-row items-center justify-between gap-1'>
                                            <View className='flex-row items-center gap-1'>
                                                <View className='w-5 h-5 rounded bg-primary'>

                                                </View>
                                                <AntDesign name="adduser" size={24} color="white" />
                                                <Text>No of Drivers Assigned</Text>
                                            </View>
                                            <Text>85</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <PieChart
                                            donut
                                            data={vehiclePieData}
                                            radius={30}
                                            innerRadius={20}
                                            backgroundColor={colors.base100}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </View>
                </View>

                <View className='mt-4 gap-4'>
                    <Select
                        data={[]}
                        placeholder='Search Registration Number'
                        leftIcon={<FontAwesome name="search" size={18} color={colors.primary} />}
                    />

                    <Select
                        data={[]}
                        placeholder='Search Driver'
                        leftIcon={<FontAwesome name="search" size={18} color={colors.primary} />}
                    />

                    <View className='flex-row items-center justify-between gap-4'>
                        <Button variant='outline'>
                            <FontAwesome5 name="pen" size={20} color="primary" />
                        </Button>
                        <View className='flex-1'>
                            <Select
                                data={[]}
                                placeholder='Sub Location'
                                leftIcon={<FontAwesome name="search" size={18} color={colors.primary} />}
                            />
                        </View>
                    </View>
                </View>
        </View>
        </SafeAreaView >
    )
}

export default driverSchedule