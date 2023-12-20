import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import icons from "../constants/icons";
import { Stack, useRouter } from "expo-router";
import colors from "../constants/colors";
import Button from "../components/Buttons/Button";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import SignInContent from "../components/SignIn/SignInContent";

const clerkPublishableKey = CLERK_PUBLISHABLE_KEY;

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Text>You are Signed In</Text>
      <Button
        label="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

const Login = () => {
  const router = useRouter();

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#f8f9fa" },
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
        <SignedIn>
          <SignOut />
        </SignedIn>
        <SignedOut>
          <SignInContent />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
};

export default Login;
