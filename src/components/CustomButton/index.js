import React from "react";
import Box from "../Box";
import Typography from "../Typography";
import { useTheme } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

const CustomButton = ({
  color,
  onPress,
  loading,
  text,
  textColor,
  textProps = {},
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Box
      center
      height={47}
      width={"75%"}
      borderRadius={10}
      onPress={onPress}
      isTouchable={onPress}
      paddingHorizontal={20}
      shadowColor={colors?.theme}
      color={color || colors?.theme}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors?.light} />
      ) : (
        <Typography
          center
          regular
          size={15}
          adjustsFontSizeToFit
          color={textColor || colors?.light}
          {...textProps}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default CustomButton;
