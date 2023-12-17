import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import icons from "../../constants/icons";

const Login = () => {
  return (
    <View style={styles.backgroundContainer}>
      <icons.Medics width={Dimensions.get("screen").width * 0.7} />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Welcome to DocTime</Text>
        <Text style={styles.header}>Your Health, Your Way!</Text>
        <Text style={styles.subheader}>
          Your health is top priority! Experience the convenience of managing
          your doctor appointments anytime, anywhere
        </Text>

        <View style={styles.btnContainers}>
          <View>
            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  backgroundContainer: {
    width: Dimensions.get("screen").width,
    backgroundColor: "#f8f9fa",
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    padding: 25,
    marginTop: -(Dimensions.get("screen").height * 0.3),
    backgroundColor: "#fff",
    borderRadius: 8,
    flex: 1,
  },
  header: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
  },
  subheader: {
    color: "#6c757d",
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
  primaryBtn: {
    backgroundColor: "#665df5",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  primaryBtnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  secondaryBtn: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#665df5",
    textDecorationLine: "underline",
    lineHeight: 22,
  },
});

export default Login;
