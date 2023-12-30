import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { useSignUp } from "@clerk/clerk-expo";
import colors from "../../constants/colors";
import CustomTextInput from "../Input/TextInput";
import CustomButton from "../Buttons/Button";

interface SignUpFormProps {
  goBack?: () => void;
}

const SignUpForm = ({ goBack }: SignUpFormProps) => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!pendingVerification ? (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <CustomTextInput
              label="First Name"
              autoCapitalize="none"
              value={firstName}
              onChangeText={(firstName) => setFirstName(firstName)}
            />
            <CustomTextInput
              label="Last Name"
              autoCapitalize="none"
              value={lastName}
              onChangeText={(lastName) => setLastName(lastName)}
            />
            <CustomTextInput
              label="Email"
              autoCapitalize="none"
              value={emailAddress}
              onChangeText={(email) => setEmailAddress(email)}
            />

            <CustomTextInput
              label="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />

            <CustomTextInput
              label="Password confirmation"
              value={passwordConfirmation}
              secureTextEntry={true}
              onChangeText={(password) => setPasswordConfirmation(password)}
            />
            <View style={styles.btnWrapper}>
              <CustomButton
                disabled={!password.length || password !== passwordConfirmation}
                label="Sign up"
                onPress={onSignUpPress}
              />
              <CustomButton
                styleType="ghost"
                label="Go back"
                onPress={goBack}
              />
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View>
            <CustomTextInput
              value={code}
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrapper: {
    gap: 20,
    flex: 1,
  },
  wrapper: {
    padding: 25,
    backgroundColor: colors.lightBackground,
    justifyContent: "space-between",
    width: Dimensions.get("screen").width * 0.8,
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, .12)",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    gap: 40,
  },
  btnWrapper: {
    gap: 10,
  },
});
