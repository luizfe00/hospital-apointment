import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Stack, Tabs } from "expo-router";
import colors from "../constants/colors";
import HeaderRight from "../components/HeaderRight/HeaderRight";
import TabRouter from "../Router/TabRouter";

const HomeScreen = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerRight: () => <HeaderRight signOut={signOut} />,
        }}
      />
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
