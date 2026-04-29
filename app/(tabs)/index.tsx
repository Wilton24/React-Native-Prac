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
      <Link href="/sign-in" className="mt-4 text-blue-500 font-bold">
        Sign-in
      </Link>
      <Link href="/subscriptions/spotify" className="mt-4 text-blue-500 font-bold">
        Sign-up
      </Link>

      <Link href="/sign-up" className="mt-4 text-blue-500 font-bold">
        Spotify Subscription
      </Link>

      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" },
      }} className="mt-4 text-blue-500 font-bold">
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}