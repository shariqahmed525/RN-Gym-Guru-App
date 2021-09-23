import React from "react";
import Box from "../Box";
import Typography from "../Typography";
import { Feather } from "../../assets/icons";
import { useTheme } from "react-native-paper";
import { PADDING_HORIZONTAL } from "../../utils/constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const padd = PADDING_HORIZONTAL * 2 + 10 * 7 + 14;

const BoxSize = (wp(100) - padd) / 7 - 1;

const TrackingBox = ({ showBg = true, text, onPress, index, isChecked }) => {
  const { colors } = useTheme();
  return (
    <Box
      center
      itemsCenter
      marginEnd={5}
      marginTop={9}
      marginStart={5}
      width={BoxSize}
      height={BoxSize}
      isTouchable={onPress}
      borderRadius={BoxSize / 5}
      onPress={() => onPress && onPress(index)}
      color={showBg ? colors?.lighterTheme : "transparent"}
    >
      {!text && isChecked && (
        <Feather name="check" color={colors?.theme} size={BoxSize - 15} />
      )}
      {text && (
        <Typography uppercase light>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default TrackingBox;
