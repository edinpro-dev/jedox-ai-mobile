import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { IconCheck, IconMenu2, IconX } from "@tabler/icons-react-native";
import { Pressable, View } from "react-native";
import DraggableFlatList, { RenderItemParams, ScaleDecorator } from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Modal from "react-native-modal";

export type Column = {
    id: number;
    label: string;
    isActive: boolean;
};

type Props = {
    isVisible: boolean;
    columns: Column[];
    toggleActive: (id: number) => void;
    setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleDragEnd: (params: { data: Column[]; from: number; to: number }) => void;
};

const Settings = ({ isVisible, toggleActive, columns, handleDragEnd, setIsSettingsOpen }: Props) => {
    const renderItem = ({ item, drag, isActive: isDragging }: RenderItemParams<Column>) => {
        return (
            <ScaleDecorator>
                {item.label === "Vehicle Info" ? (
                    <Pressable className="p-2 my-1.5">
                        <View className="flex-row items-center justify-start gap-2">
                            <IconMenu2 size={24} color="grey" />
                            <Pressable onPress={() => toggleActive(item.id)}>
                                <View
                                    className={`w-6 h-6 rounded border border-accent ${item.isActive ? "bg-accent" : ""}`}
                                >
                                    {item.isActive ? <IconCheck size={20} color="white" /> : null}
                                </View>
                            </Pressable>
                            <Text>{item.label}</Text>
                        </View>
                    </Pressable>
                ) : (
                    <Pressable
                        className={`p-2 my-1.5 ${isDragging ? "bg-base-300 dark:bg-base-300-dark" : ""} `}
                        onLongPress={drag}
                        onPress={() => console.log("press")}
                    >
                        <View className="flex-row items-center justify-start gap-2">
                            <IconMenu2 size={24} color="grey" />
                            <Pressable onPress={() => toggleActive(item.id)}>
                                <View
                                    className={`w-6 h-6 rounded border border-accent ${item.isActive ? "bg-accent" : ""}`}
                                >
                                    {item.isActive ? <IconCheck size={20} color="white" /> : null}
                                </View>
                            </Pressable>
                            <Text>{item.label}</Text>
                        </View>
                    </Pressable>
                )}
            </ScaleDecorator>
        );
    };

    return (
        <Modal
            isVisible={isVisible}
            swipeDirection={[]}
            propagateSwipe
            className="p-4 rounded bg-base-100 dark:bg-base-100-dark"
        >
            <GestureHandlerRootView className="flex-1">
                <View className="flex-row items-center justify-between">
                    <Text variant={"h3"}>Columns</Text>
                    <Button variant="ghost" onPress={() => setIsSettingsOpen(false)}>
                        <IconX size={24} color="grey" />
                    </Button>
                </View>
                <DraggableFlatList
                    data={columns}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    onDragEnd={handleDragEnd}
                    activationDistance={10}
                    className="py-2 border-y border-base-300 dark:border-base-300-dark"
                />

                <View className="flex-row items-center justify-between">
                    <Button variant="ghost">
                        <Text color={"primary"}>Apply</Text>
                    </Button>
                    <Button variant="ghost">
                        <Text color={"primary"}>Save & Apply</Text>
                    </Button>
                </View>
            </GestureHandlerRootView>
        </Modal>
    );
};

export default Settings;
