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

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f8f9fa" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <View style={styles.backgroundContainer}>
        <icons.Medics width={Dimensions.get("screen").width * 0.7} />
        <View style={styles.contentContainer}>
          <View style={styles.contentWrapper}>
            <Text style={styles.header}>Welcome to DocTime</Text>
            <Text style={styles.header}>Your Health, Your Way!</Text>
            <Text style={styles.subheader}>
              Your health is top priority! Experience the convenience of
              managing your doctor appointments anytime, anywhere
            </Text>

            <View style={styles.btnContainers}>
              <View>
                <Button label="Sign In" onPress={() => router.push("/Login")} />
                <TouchableOpacity style={styles.secondaryBtn}>
                  <Text style={styles.secondaryBtnText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  backgroundContainer: {
    width: Dimensions.get("screen").width,
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    marginTop: -(Dimensions.get("screen").height * 0.15),
  },
  contentContainer: {
    marginTop: -(Dimensions.get("screen").height * 0.3),
    backgroundColor: colors.lightBackground,
    width: Dimensions.get("screen").width,
    flex: 1,
  },
  contentWrapper: {
    padding: 25,
    flex: 1,
  },
  header: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
  },
  subheader: {
    color: colors.muted,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 1,
    marginTop: 8,
  },
  btnContainers: {
    flex: 1,
    justifyContent: "center",
    marginTop: -25,
  },
  secondaryBtn: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: colors.primary,
    textDecorationLine: "underline",
    lineHeight: 22,
  },
});

export default Login;
