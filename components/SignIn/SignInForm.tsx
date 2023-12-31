import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import Button from "../Buttons/Button";
import { useSignIn } from "@clerk/clerk-expo";
import CustomTextInput from "../Input/TextInput";

interface SignInFormProps {
  goBack?: () => void;
}

const SignInForm = ({ goBack }: SignInFormProps) => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    setIsLoading(true);

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <CustomTextInput
            label="Email"
            styleType="outlined"
            autoCapitalize="none"
            value={emailAddress}
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          />
          <CustomTextInput
            label="Password"
            styleType="outlined"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.btnWrapper}>
          <Button
            label="Sign In"
            onPress={onSignInPress}
            disabled={isLoading}
            loading={isLoading}
          />
          <Button styleType="ghost" label="Go back" onPress={goBack} />
        </View>
      </View>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    marginTop: -50,
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
    gap: 12,
  },
  inputWrapper: {
    gap: 24,
  },
});
