import { Text } from "@/components/text";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <Text>Dashboard</Text>
        </SafeAreaView>
    );
};

export default Dashboard;
