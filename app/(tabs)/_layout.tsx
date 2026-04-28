// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="insights"
                options={{
                    title: "Insights"
                }}
            />
            <Tabs.Screen
                name="subscriptions"
                options={{
                    title: "Subscriptions"
                }}
            />
        </Tabs>
    );
}