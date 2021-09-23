import React from "react";
import { IOS } from "../../utils/constants";
import generalStyles from "../../utils/generalStyles";
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from "react-native";

const KeyboardAvoidingView = ({ children, ...rest }) => {
  return (
    <RNKeyboardAvoidingView
      behavior={IOS && "padding"}
      style={generalStyles.flex}
      {...rest}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
};

export default KeyboardAvoidingView;
