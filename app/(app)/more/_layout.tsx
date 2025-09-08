import { Stack } from "expo-router";

export default function MoreLayout() {
    return <Stack initialRouteName="checklist" screenOptions={{ headerShown: false }} />
}