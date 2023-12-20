import { StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../constants/colors";

type ButtonStyleType = "primary" | "secondary" | "ghost";

export interface ButtonStyleProps extends TextStyle {
  backgroundColor?: string;
}

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  styles?: ButtonStyleProps;
  styleType?: ButtonStyleType;
}

const Button = ({
  label,
  onPress,
  styles: btnStyles,
  styleType = "primary",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(styleType, btnStyles ?? {}).btnContainer}
    >
      <Text style={styles(styleType, btnStyles ?? {}).btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (
  styleType: ButtonStyleType,
  { backgroundColor, color, fontSize, fontWeight }: ButtonStyleProps
) => {
  switch (styleType) {
    case "primary":
      return StyleSheet.create({
        btnContainer: {
          backgroundColor: backgroundColor ?? colors.primary,
          alignItems: "center",
          padding: 12,
          borderRadius: 50,
        },
        btnText: {
          color: color ?? "white",
          fontSize: fontSize ?? 20,
          fontWeight: fontWeight ?? "600",
        },
      });
    case "secondary":
      return StyleSheet.create({
        btnContainer: {
          backgroundColor: backgroundColor ?? colors.secondary,
          alignItems: "center",
          padding: 12,
          borderRadius: 50,
        },
        btnText: {
          color: color ?? colors.lightBackground,
          fontSize: fontSize ?? 20,
          fontWeight: fontWeight ?? "600",
        },
      });
    case "ghost":
      return StyleSheet.create({
        btnContainer: {
          backgroundColor: backgroundColor ?? "transparent",
          alignItems: "center",
          padding: 12,
          borderRadius: 50,
        },
        btnText: {
          color: color ?? colors.muted,
          fontSize: fontSize ?? 20,
          fontWeight: fontWeight ?? "600",
        },
      });
    default:
      return StyleSheet.create({
        btnContainer: {
          backgroundColor: backgroundColor ?? colors.primary,
          alignItems: "center",
          padding: 12,
          borderRadius: 50,
        },
        btnText: {
          color: color ?? "white",
          fontSize: fontSize ?? 20,
          fontWeight: fontWeight ?? "600",
        },
      });
  }
};
