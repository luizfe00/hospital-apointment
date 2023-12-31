import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AppointmentScreen = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "" }} />
      <Text>AppointmentScreen</Text>
    </SafeAreaView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
