import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const HomeScreen = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "" }} />
      <View>
        <View>
          <Image
            source={{ uri: user.imageUrl }}
            style={{ height: 45, width: 45, borderRadius: 99 }}
          />
        </View>
        <Text>{user.fullName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
