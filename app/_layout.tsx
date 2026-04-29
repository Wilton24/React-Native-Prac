// app/_layout.tsx
import "@/global.css"; // Import your Tailwind CSS here!
import { Stack } from "expo-router";


const options = { headerShown: false };

export default function RootLayout() {
    return (
        <Stack screenOptions={options}>
            {/* Hides the header for the grouping folders */}
            <Stack.Screen name="(tabs)" options={options} />
            <Stack.Screen name="(auth)" options={options} />
        </Stack>
    );
}