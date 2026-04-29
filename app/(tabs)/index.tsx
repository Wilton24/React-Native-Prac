import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";


const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="p-6 bg-blue-500 rounded-3xl border-4 border-blue-300 shadow-xl">
        <Text className="text-xl font-sans-extrabold">
          NativeWind v5 is Working in da Haus! 🚀
        </Text>
      </View>
      <Text className="mt-4 text-slate-400 font-medium">
        If you see a blue card on a dark background, you're set.
      </Text>
      <Link href="/onboarding" className="mt-4 font-sans-bold rounded-2xl bg-primary text-white p-4">
        Get Started
      </Link>
      <Link href="/sign-in" className="mt-4 font-sans-bold rounded-2xl bg-primary text-white p-4">
        Sign-in
      </Link>
      <Link href="/subscriptions/spotify" className="mt-4 font-sans-bold rounded-2xl bg-primary text-white p-4">
        Sign-up
      </Link>


    </SafeAreaView>
  );
}