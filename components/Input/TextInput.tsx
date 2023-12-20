import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { styles } from "./TextInput.styles";

export type TextInputStyleType = "default" | "outlined";

interface CustomTextInputStyleProps {
  styleType?: TextInputStyleType;
  error?: boolean;
}

interface CustomTextInputProps
  extends TextInputProps,
    CustomTextInputStyleProps {
  label?: string;
}

export interface ITextInputStyle extends CustomTextInputStyleProps {
  isFocused?: boolean;
  isFilled?: boolean;
}

const CustomTextInput = ({
  label,
  styleType,
  value,
  error,
  ...props
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const styleObj: ITextInputStyle = {
    styleType,
    isFocused,
    isFilled: !!value?.trim(),
    error,
  };

  return (
    <View>
      <View style={styles(styleObj).labelWrapper}>
        <Text style={styles(styleObj).labelText}>{label}</Text>
      </View>
      <TextInput
        style={styles(styleObj).textInput}
        onBlur={handleBlur}
        onFocus={() => setIsFocused(true)}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;
