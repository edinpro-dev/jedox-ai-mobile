import { Profile } from "@/features/shared/components/profile";
import { useThemeColor } from "@/hooks/useThemeColor";
import { IconDashboard, IconDots, IconHome, IconSearch, IconTruck } from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AppLayout = () => {
    const activeTint = useThemeColor({}, "primary");

    return (
        <SafeAreaView className="flex-1">
            <Tabs
                initialRouteName="index"
                screenOptions={{
                    header: () => <Profile />,
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: activeTint,
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, size }) => <IconHome size={size} color={color} />,
                    }}
                />

                <Tabs.Screen
                    name="search"
                    options={{
                        title: "Search",
                        tabBarIcon: ({ color, size }) => <IconSearch size={size} color={color} />,
                    }}
                />

                <Tabs.Screen
                    name="dashboard"
                    options={{
                        title: "Dashboard",
                        tabBarIcon: ({ color, size }) => <IconDashboard size={size} color={color} />,
                    }}
                />

                <Tabs.Screen
                    name="vehicles"
                    options={{
                        title: "Vehicles",
                        tabBarIcon: ({ color, size }) => <IconTruck size={size} color={color} />,
                    }}
                />

                <Tabs.Screen
                    name="more"
                    options={{
                        title: "More",
                        tabBarIcon: ({ color, size }) => <IconDots size={size} color={color} />,
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
};

export default AppLayout;
