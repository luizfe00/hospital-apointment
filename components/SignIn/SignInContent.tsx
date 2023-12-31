import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import SignInForm from "./SignInForm";
import SignUpForm from "../SignUp/SignUpForm";
import SignInWithOAuth from "./SignInWithOAuth";
import CustomButton from "../Buttons/Button";

type SignInScreenContentOptions = "default" | "signIn" | "signUp";

const SignInContent = () => {
  const [currContent, setCurrContent] =
    React.useState<SignInScreenContentOptions>("default");

  const content: Record<SignInScreenContentOptions, React.ReactNode> = {
    default: (
      <>
        <View style={styles.imageBackground}>
          <icons.Medics width={Dimensions.get("screen").width * 0.9} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentWrapper}>
            <Text style={styles.header}>Welcome to DocTime</Text>
            <Text style={styles.header}>Your Health, Your Way!</Text>
            <Text style={styles.subheader}>
              Your health is top priority! Experience the convenience of
              managing your doctor appointments anytime, anywhere
            </Text>

            <View style={styles.btnContainers}>
              <CustomButton
                label="Sign In"
                onPress={() => setCurrContent("signIn")}
              />
              <SignInWithOAuth />
              <CustomButton
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
    signUp: <SignUpForm goBack={() => setCurrContent("default")} />,
  };

  return <View style={styles.backgroundContainer}>{content[currContent]}</View>;
};

export default SignInContent;

export const styles = StyleSheet.create({
  backgroundContainer: {
    width: Dimensions.get("screen").width,
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "flex-end",
  },
  imageBackground: {
    position: "absolute",
    top: "-20%",
    right: "5%",
  },
  contentContainer: {
    marginBottom: 0,
    backgroundColor: colors.lightBackground,
    width: Dimensions.get("screen").width,
    justifyContent: "flex-end",
    height: Dimensions.get("screen").height * 0.6,
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
