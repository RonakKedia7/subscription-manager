import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Don't have an account? Sign Up</Link>
      <Link href="/">Go to Home</Link>
    </View>
  );
};

export default SignIn;
