import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "" }} />
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
