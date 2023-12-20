import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode } from "react";
import { router } from "expo-router";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import Button from "../Buttons/Button";
import SignInForm from "./SignInForm";
import SignUpForm from "../SignUp/SignUpForm";
import SignInWithOAuth from "./SignInWithOAuth";

type SignInScreenContentOptions = "default" | "signIn" | "signUp";

const SignInContent = () => {
  const [currContent, setCurrContent] =
    React.useState<SignInScreenContentOptions>("default");

  const content: Record<SignInScreenContentOptions, React.ReactNode> = {
    default: (
      <>
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
              <Button
                label="Sign In"
                onPress={() => setCurrContent("signIn")}
              />
              <SignInWithOAuth />
              <Button
                label="Sign Up"
                styleType="ghost"
                onPress={() => setCurrContent("signUp")}
              />
            </View>
          </View>
        </View>
      </>
    ),
    signIn: <SignInForm goBack={() => setCurrContent("default")} />,
    signUp: <SignUpForm />,
  };

  return <View style={styles.backgroundContainer}>{content[currContent]}</View>;
};

export default SignInContent;

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
    gap: 10,
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
