import { StyleSheet, TouchableOpacity } from "react-native";
import React, { PropsWithChildren } from "react";

export interface IconButtonProps {
  onPress?: () => void;
}

const IconButton = ({
  onPress,
  children,
}: PropsWithChildren<IconButtonProps>) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default IconButton;

const styles = StyleSheet.create({});
