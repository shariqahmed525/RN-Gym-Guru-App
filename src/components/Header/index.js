import React, { useState } from "react";
import Box from "../Box";
import Typography from "../Typography";
import { Icon } from "../../assets/icons";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { PADDING_HORIZONTAL } from "../../utils/constants";
import { StyleSheet, ImageBackground } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Header = ({
  title,
  bgImage,
  bgColor,
  titleStyle,
  renderLeft,
  renderRight,
  renderCenter,
  imageStyle,
  onBackPress,
  containeStyle,
  backIconColor,
  allowBackIcon = true,
  headerWrapperProps = {},
}) => {
  const { colors } = useTheme();

  const [width, setWidth] = useState(0);
  const navigation = useNavigation();
  const find_dimesions = (layout) => setWidth(layout?.width);

  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      imageStyle={styles.imageStyle(imageStyle)}
      style={styles.container(bgColor, containeStyle)}
    >
      <Box width="100%" direction="row" between {...headerWrapperProps}>
        {renderLeft
          ? renderLeft
          : allowBackIcon && (
              <Box
                isTouchable
                onPress={
                  onBackPress ? onBackPress : () => navigation?.goBack?.()
                }
                onLayout={(event) => find_dimesions(event?.nativeEvent?.layout)}
              >
                <Icon
                  size={30}
                  name="arrow-back-outline"
                  color={backIconColor || colors?.dark}
                />
              </Box>
            )}
        {renderCenter ? (
          <Box flex paddingHorizontal={10}>
            {renderCenter}
          </Box>
        ) : (
          title !== "" &&
          title !== null && (
            <Typography
              numberOfLines={1}
              ellipsizeMode="tail"
              {...(titleStyle
                ? {
                    style: [styles?.centerComponent, titleStyle],
                  }
                : {
                    flex: 1,
                    center: true,
                    paddingHorizontal: 10,
                    size: wp(5.5) > 30 ? 30 : wp(5.5),
                  })}
            >
              {title}
            </Typography>
          )
        )}
        {renderRight
          ? renderRight
          : allowBackIcon && <Box width={width || 0} />}
      </Box>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (color, style = {}) => ({
    width: "100%",
    backgroundColor: color || "transparent",
    paddingHorizontal: PADDING_HORIZONTAL,
    ...style,
  }),
  imageStyle: (style = {}) => ({
    width: "100%",
    resizeMode: "contain",
    ...style,
  }),
});
