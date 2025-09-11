import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <Text>Dashboard</Text>
        </SafeAreaView>
    );
};

export default Dashboard;
