import React from "react";
import { Slot, Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import { ClerkProvider } from "@clerk/clerk-expo";

const clerkPublishableKey = CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const _layout = () => {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
};

export default _layout;
