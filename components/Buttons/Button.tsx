import { StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../constants/colors";

export interface ButtonStyleProps extends TextStyle {
  backgroundColor?: string;
}

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  styles?: ButtonStyleProps;
}

const Button = ({ label, onPress, styles: btnStyles }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(btnStyles ?? {}).btnContainer}
    >
      <Text style={styles(btnStyles ?? {}).btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = ({
  backgroundColor,
  color,
  fontSize,
  fontWeight,
}: ButtonStyleProps) =>
  StyleSheet.create({
    btnContainer: {
      backgroundColor: backgroundColor ?? colors.primary,
      alignItems: "center",
      padding: 12,
      borderRadius: 8,
    },
    btnText: {
      color: color ?? "white",
      fontSize: fontSize ?? 20,
      fontWeight: fontWeight ?? "600",
    },
  });
