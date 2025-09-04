import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Colors } from "@/constants/Colors";
import { ErrorModalProps } from "@/features/shared/types";
import { setErrorModal } from "@/redux/appSlice";
import { RootState } from "@/redux/store";
import { IconAlertCircle } from "@tabler/icons-react-native";
import { View } from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const ErrorModal = ({ visible, children, message, onOk, setVisible }: ErrorModalProps) => {
    const { errorModal } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    return (
        <Modal
            isVisible={errorModal?.visible! || visible}
            onBackdropPress={() => {
                dispatch(setErrorModal(undefined));
                setVisible?.(false);
            }}
        >
            <SafeAreaView className="flex flex-1 items-center justify-center">
                <View className="bg-base-300 dark:bg-base-300-dark w-full p-4 rounded-lg">
                    <View className="flex flex-row items-center gap-2">
                        <IconAlertCircle size={24} color={Colors.light.error} />
                        <Text variant="h2" className="text-error">
                            Error
                        </Text>
                    </View>
                    {message ? (
                        <Text variant="body" className="py-4">
                            {errorModal?.message || message}
                        </Text>
                    ) : (
                        children
                    )}
                    <View className="w-full flex items-center justify-end">
                        <Button
                            variant="primary"
                            className="self-end"
                            onPress={() => {
                                onOk?.();
                                dispatch(setErrorModal(undefined));
                                setVisible?.(false);
                            }}
                        >
                            Close
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default ErrorModal;
