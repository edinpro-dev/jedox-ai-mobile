import { Button } from '@/components/button'
import { Text } from '@/components/text'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const checklist = () => {
    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className='flex-1 bg-base-300 dark:bg-base-300-dark'>
            <View className='p-4'>
                <View className='pb-4 border-b border-base-100 dark:border-base-100-dark'>
                    <View className='mb-4'>
                        <Text variant={"h4"}>Checklist SetUp</Text>

                    </View>
                    <Button>
                        <View className='flex-row items-center gap-2'>
                            <AntDesign name="plus" size={20} color="white" />

                            <Text>New</Text>
                        </View>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default checklist