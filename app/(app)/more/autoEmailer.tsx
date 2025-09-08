import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { useAutoEmailer } from '@/components/tabBar/more/autoEmailer/autoEmailer';
import { Text } from '@/components/text';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const autoEmailer = () => {
    const { colors, emailerTypeData } = useAutoEmailer();
    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className='flex-1 bg-base-300 dark:bg-base-300-dark'>
            <View className='p-4 '>
                <View className='py-2 border-b border-base-100 dark:border-base-100-dark'>
                    <View className='flex-row items-center justify-between'>
                        <Text>Emailer Setup</Text>
                        <Button
                            variant='primary'
                        >
                            <View className='flex-row items-center gap-1'
                            >
                                <AntDesign name="plus" size={20} color="white" />
                                <Text>New Email Config</Text>
                            </View>
                        </Button>
                    </View>
                </View>

                <View className='mt-4 gap-4'>
                    <Input
                        placeholder='Search'
                        iconLeft={<FontAwesome name="search" size={18} color={colors.infoContent} />}
                    />

                    <Select
                        search={false}
                        data={emailerTypeData}
                        placeholder='Emailer Type'
                        renderMode='checkbox'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default autoEmailer