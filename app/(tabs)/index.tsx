import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        className="mt-4 rounded bg-primary text-white p-4"
        href="/(auth)/sign-in"
      >
        Go to Sign In
      </Link>
      <Link
        className="mt-4 rounded bg-primary text-white p-4"
        href="/(auth)/sign-up"
      >
        Go to Sign Up
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
    </View>
  );
}
