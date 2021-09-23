import React from "react";
import Box from "../Box";
import Typography from "../Typography";
import { useTheme } from "react-native-paper";

const CustomCheckbox = ({ text, handleCheck, isChecked }) => {
  const { colors } = useTheme();
  return (
    <Box
      isTouchable
      itemsCenter
      marginTop={15}
      direction="row"
      paddingRight={10}
      onPress={() => handleCheck(text)}
    >
      <Box
        center
        width={18}
        height={18}
        itemsCenter
        borderWidth={1}
        borderRadius={5}
        color={isChecked ? colors?.theme : "transparent"}
        borderColor={isChecked ? colors?.theme : colors?.darkGray}
      />
      <Typography
        flex
        light
        size={15}
        marginLeft={15}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CustomCheckbox;
