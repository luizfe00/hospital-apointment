import { StyleSheet, TextStyle } from "react-native";
import colors from "../../constants/colors";
import { ITextInputStyle, TextInputStyleType } from "./TextInput";

export const styles = (styleObject: ITextInputStyle) => {
  const textInputStyle = getTextStyle(styleObject);

  return StyleSheet.create({
    textInput: {
      padding: 16,
      borderRadius: 4,
      ...textInputStyle.textStyle,
    },
    labelWrapper: {
      position: "absolute",
      paddingHorizontal: 4,
      backgroundColor: colors.lightBackground,
      zIndex: 3,
      ...textInputStyle.labelStyle.labelWrapper,
    },
    labelText: {
      color: styleObject?.error ? colors.error : undefined,
      ...textInputStyle.labelStyle.labelText,
    },
  });
};

const getTextStyle = ({
  isFocused,
  isFilled,
  styleType = "default",
  error = false,
}: ITextInputStyle) => {
  const textStyle = getTextInputStyle(styleType, isFocused, error);
  const labelStyle = getLabelStyle(isFocused, isFilled, error);

  return {
    textStyle,
    labelStyle,
  };
};

const getLabelStyle = (
  isFocused?: boolean,
  isFilled?: boolean,
  error?: boolean
): { labelWrapper: TextStyle; labelText: TextStyle } => {
  if (isFocused || isFilled) {
    return {
      labelWrapper: {
        transform: "translateY(-10px)",
        left: 6,
      },
      labelText: {
        fontSize: 13,
      },
    };
  }
  return {
    labelWrapper: {
      transform: "translateY(15px)",
      left: 8,
    },
    labelText: {
      fontSize: 16,
    },
  };
};

const getTextInputStyle = (
  styleType: TextInputStyleType,
  isFocused?: boolean,
  error?: boolean
): TextStyle => {
  const commonStyle: TextStyle = {
    borderColor: error
      ? colors.error
      : isFocused
      ? colors.secondary
      : colors.border,
  };
  if (styleType === "default") {
    commonStyle.borderBottomWidth = 1;
  } else {
    commonStyle.borderWidth = 1;
  }

  return commonStyle;
};
