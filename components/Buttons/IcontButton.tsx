import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export interface IconButtonProps {
  icon: React.ReactNode;
}

const IcontButton = ({ icon }: IconButtonProps) => {
  return <TouchableOpacity>{icon}</TouchableOpacity>;
};

export default IcontButton;

const styles = StyleSheet.create({});
