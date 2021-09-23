import React from "react";
import { useTheme } from "react-native-paper";
import generalStyles from "../../utils/generalStyles";
import { SafeAreaView as SafeArea } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeAreaView = ({
  children,
  flex,
  color,
  allowBottom,
  allowTop = true,
  ...rest
}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <SafeArea
      style={{
        ...generalStyles.safe(flex, color || colors?.light),
        marginTop: allowTop ? 0 : -insets.top,
        marginBottom: allowBottom ? 0 : -insets.bottom,
        ...rest,
      }}
    >
      {children}
    </SafeArea>
  );
};

export default SafeAreaView;
