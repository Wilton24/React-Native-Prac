import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <View className="p-6 bg-blue-500 rounded-3xl border-4 border-blue-300 shadow-xl">
        <Text className="text-white text-2xl font-bold tracking-widest uppercase">
          NativeWind v5 is Working in da Haus! 🚀
        </Text>
      </View>
      <Text className="mt-4 text-slate-400 font-medium">
        If you see a blue card on a dark background, you're set.
      </Text>
      <Link href="/onboarding" className="mt-4 text-blue-500 font-bold">
        Get Started
      </Link>
    </View>
  );
}