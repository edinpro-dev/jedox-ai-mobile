import { Text } from "@/components/text";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const More = () => {
    const menuItems = [
        { title: "Assessment", route: "/assessment", icon: <MaterialIcons name="assessment" size={24} color="black" /> },
        { title: "Vehicle History", route: "/vehicleHistory" },
        { title: "Users", route: "/users" },
        { title: "Auto Emailer", route: "/autoEmailer" },
        { title: "Driver Schedule", route: "/driverSchedule" },
        { title: "Checklist", route: "/checklist" },
    ];

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 p-4">
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="p-4 border-b border-gray-300"
                        onPress={() => router.push(`/(app)/more/${item.route}` as any)}
                    >
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default More;
