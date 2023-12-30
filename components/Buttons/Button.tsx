import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { ActivityIndicator } from "react-native";

type ButtonStyleType = "primary" | "secondary" | "ghost";

export interface ButtonStyleProps extends TextStyle {
  backgroundColor?: string;
}

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress?: () => void;
  styles?: ButtonStyleProps;
  styleType?: ButtonStyleType;
  loading?: boolean;
}

const CustomButton = ({
  label,
  onPress,
  styles: btnStyles,
  styleType = "primary",
  loading,
  ...props
}: ButtonProps) => {
  const stylesResult = styles(styleType, btnStyles ?? {}, props.disabled);

  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={stylesResult.btnContainer}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={stylesResult.btnText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = (
  styleType: ButtonStyleType,
  { backgroundColor, color, fontSize, fontWeight }: ButtonStyleProps,
  disabled?: boolean
) => {
  if (disabled)
    return StyleSheet.create({
      btnContainer: {
        backgroundColor: colors.disabled,
        alignItems: "center",
        padding: 12,
        borderRadius: 50,
        opacity: 0.65,
        pointerEvents: "none",
      },
      btnText: {
        opacity: 0.8,
        color: "#fff",
        fontSize: fontSize ?? 20,
        fontWeight: fontWeight ?? "600",
      },
    });

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
          borderColor: colors.border,
          borderWidth: 1,
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
