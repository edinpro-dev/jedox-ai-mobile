import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { useUsers } from '@/components/tabBar/more/users/users'
import { Text } from '@/components/text'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const users = () => {
    const { colors, usersDummyData, userRoleDummyData } = useUsers();
    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className='flex-1 bg-base-300 dark:bg-base-300-dark'
        >
            <Card>
                <View className='flex-row items-center justify-between'>
                    <Text variant={"h4"}>Users</Text>
                    <View className='flex-col items-start gap-4'>
                        <Button variant='outline' className='w-full items-center'>
                            <AntDesign name="adduser" size={20} color="white" />
                            <Text>Add new user</Text>
                        </Button>
                        <Button variant='outline' className='w-full items-center'>
                            <AntDesign name="addusergroup" size={20} color="white" />
                            <Text>Bulk User Upload</Text>
                        </Button>
                    </View>
                </View>
                <View className='flex-row justify-between items-center mt-4'>
                    <View className='w-[50%]'>
                        <Input
                            variant='primary'
                            placeholder='User'
                            className='w-full'
                            iconLeft={<FontAwesome name="search" size={18} color={colors.primary} />}
                        />
                    </View>

                    <View className='flex-col gap-4'>
                        <Select
                            search={false}
                            variant='primary'
                            data={usersDummyData}
                            placeholder='Status'
                            style={{ width: 120 }}
                        />

                        <Select
                            search={false}
                            variant='primary'
                            data={userRoleDummyData}
                            placeholder='User Role'
                            style={{ width: 120 }}
                        />
                    </View>
                </View>
            </Card>
        </SafeAreaView>
    )
}

export default users