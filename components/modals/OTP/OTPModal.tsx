import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Text } from '@/components/text';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

type OTPModalProps = {
    visible: boolean
}

const OTPModal = ({ visible }: OTPModalProps) => {
    return (
        <Modal
            isVisible={visible}
            style={{ padding: 2 }}
        >
            <SafeAreaView className='rounded-lg py-2 bg-base-300 dark:bg-base-100-dark'>
                <View className='relative p-4 border-b border-black'>
                    <Text variant={"h3"} align={"left"}>Enter OTP</Text>
                    <Pressable
                        className='absolute right-2 top-0 bottom-0 flex items-center justify-center'
                    >
                        <MaterialIcons name="close" size={24} color="white" />
                    </Pressable>
                </View>
                <View className="p-4 gap-5 w-full"
                    style={{
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: 'gray',
                    }}>
                    <Text variant={"label-large"}>
                        Please enter the OTP sent to your email.
                    </Text>
                    <Input
                        placeholder='Enter OTP'
                    />
                </View>
                <View className='py-4 flex items-center justify-center'>
                    <Button>
                        <Text>Verify OTP</Text>
                    </Button>
                </View>
                <View className='flex-row items-center justify-center'>
                    <Text variant={"caption"}>
                        Resend OTP available in 0:00
                    </Text>
                    <Button
                        variant='ghost'
                        className='border border-red-400'
                    >
                        <Text variant={"caption"} color={"accent"} >Resend OTP</Text>
                    </Button>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default OTPModal