import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-bold font-sans-extrabold">Home</Text>
      <Link
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
        href="/(auth)/sign-in"
      >
        Go to Sign In
      </Link>
      <Link
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
        href="/(auth)/sign-up"
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
