import { Text } from "@/components/text";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const More = () => {
    const menuItems = [
        { title: "Assessment", route: "/assessment" },
        { title: "Vehicle History", route: "/vehicle-history" },
        { title: "Users", route: "/users" },
        { title: "Auto Emailer", route: "/auto-emailer" },
        { title: "Driver Schedule", route: "/driver-schedule" },
        { title: "Checklist", route: "/checklist" },
    ];

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 p-4">
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="p-4 border-b border-gray-300"
                        onPress={() => router.push(`/more/${item.route}` as any)}
                    >
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default More;
