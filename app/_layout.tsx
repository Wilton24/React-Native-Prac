// app/_layout.tsx
import "@/global.css"; // Import your Tailwind CSS here!
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            {/* Hides the header for the grouping folders */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
    );
}