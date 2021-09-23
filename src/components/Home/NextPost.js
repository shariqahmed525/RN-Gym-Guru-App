import React from "react";
import Box from "../Box";
import Typography from "../Typography";
import { useTheme } from "react-native-paper";
import styles from "../../screens/Home/styles";
import { ImageBackground } from "react-native";
import { PADDING_HORIZONTAL } from "../../utils/constants";
import { widthPercentageToDP } from "react-native-responsive-screen";

const NextPost = ({ img, text, date, index, length }) => {
  const { colors } = useTheme();
  return (
    <Box
      hidden
      flex={0}
      isTouchable
      height={170}
      borderWidth={1}
      borderRadius={20}
      color={colors?.light}
      width={widthPercentageToDP(80)}
      borderColor={colors?.lightBorder}
      marginRight={index + 1 !== length ? 15 : 0}
    >
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.nextBoxImage}
        style={styles?.nextBoxImageWrapper(colors?.light)}
        source={img || require("../../assets/images/Mask-Group.png")}
      >
        <Box paddingHorizontal={PADDING_HORIZONTAL}>
          <Typography size={18} paddingVertical={10}>
            {text}
          </Typography>
        </Box>
      </ImageBackground>
      <Typography paddingVertical={10} paddingHorizontal={PADDING_HORIZONTAL}>
        {date}
      </Typography>
    </Box>
  );
};

export default NextPost;
