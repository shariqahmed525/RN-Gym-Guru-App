import React from "react";
import Box from "../Box";
import SafeAreaView from "../SafeAreaView";
import { IOS } from "../../utils/constants";
import { useTheme } from "react-native-paper";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

const Container = ({
  bgColor,
  children,
  safeAreaColor,
  allowSafeAreaTop,
  allowSafeAreaBottom,
  isScrollView = true,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={IOS && "padding"}
      keyboardVerticalOffset={25}
      style={styles.flex(bgColor || colors?.light)}
    >
      <SafeAreaView
        safeAreaColor={safeAreaColor}
        allowSafeAreaTop={allowSafeAreaTop}
        allowSafeAreaBottom={allowSafeAreaBottom}
      >
        {isScrollView ? (
          <Box
            flexGrow
            allowScroll
            color={bgColor || colors?.light}
            keyboardShouldPersistTaps="always"
            {...rest}
          >
            {children}
          </Box>
        ) : (
          <Box flex color={bgColor || colors?.light} {...rest}>
            {children}
          </Box>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({
  flex: (color) => ({
    flex: 1,
    backgroundColor: color,
  }),
});
