import Profile from '@/components/profile/Profile';
import { useThemeColor } from '@/hooks/useThemeColor';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

const AppLayout = () => {
    const activeTint = useThemeColor({}, "tabIconSelected");
    const inActiveTint = useThemeColor({}, "tabIconDefault");
    const background = useThemeColor({}, "background");

    return (
        <SafeAreaView className='flex-1'>
            <Tabs
                initialRouteName='more'
                screenOptions={{
                    header: () => <Profile />,
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: activeTint,
                    tabBarInactiveTintColor: inActiveTint,
                    tabBarStyle: { backgroundColor: background }
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="home" size={size} color={color} />
                        )
                    }}
                />

                <Tabs.Screen
                    name="search"
                    options={{
                        title: "Search",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="search" size={size} color={color} />
                        )
                    }}
                />

                <Tabs.Screen
                    name="dashboard"
                    options={{
                        title: "Dashboard",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="space-dashboard" size={size} color={color} />
                        )
                    }}
                />

                <Tabs.Screen
                    name="vehicles"
                    options={{
                        title: "Vehicles",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="truck" size={size} color={color} />
                        )
                    }}
                />

                <Tabs.Screen
                    name="more"
                    options={{
                        title: "More",
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="more-horizontal" size={size} color={color} />
                        )
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
};

export default AppLayout;
