import React from "react";
import { Redirect, Stack } from "expo-router";
import colors from "../constants/colors";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInContent from "../components/SignIn/SignInContent";

const Login = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <SignedIn>
        <Redirect href="(tabs)/home" />
      </SignedIn>
      <SignedOut>
        <SignInContent />
      </SignedOut>
    </>
  );
};

export default Login;
