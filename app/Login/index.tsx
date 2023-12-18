import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import colors from "../../constants/colors";
import Button from "../../components/Buttons/Button";
import IconButton from "../../components/Buttons/IconButton";

const LoginOption = () => {
  const router = useRouter();

  const [showForm, setShowForm] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.background },
          headerLeft: () =>
            showForm ? (
              <IconButton onPress={() => setShowForm(false)}>
                <Text>Go back</Text>
              </IconButton>
            ) : undefined,
        }}
      />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {!showForm ? (
            <>
              <Button
                label="Sign in with E-mail"
                onPress={() => setShowForm(true)}
              />
              <Button label="Sign in with Google" />
              <Button label="Sign in with Facebook" />
            </>
          ) : (
            <>
              <TextInput
                onBlur={() => Keyboard.dismiss()}
                placeholder="E-mail"
                style={styles.textInputWrapper}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="password"
                style={styles.textInputWrapper}
                onBlur={() => Keyboard.dismiss()}
              />
              <Button label="Sign In" onPress={() => router.push("/home")} />
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginOption;

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
    height: Dimensions.get("screen").height * 0.28,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, .12)",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  textInputWrapper: {
    backgroundColor: colors.background,
    padding: 18,
    borderRadius: 8,
  },
});
