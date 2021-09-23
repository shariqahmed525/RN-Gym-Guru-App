import React from "react";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Typography = ({
  flex,
  w100,

  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,

  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,

  size,
  left,
  right,
  center,

  bold,
  medium,
  thin,
  black,
  light,
  regular,
  semiBold,
  heavy,
  ultraLight,

  h1,
  h2,
  h3,
  h3_5,
  h4,
  h4_5,
  h5,
  h5_5,
  h6,
  h6_5,
  h7,

  body,
  body2,
  body3,
  body4,
  lineheight,

  note,
  color,
  bgColor,
  style,

  uppercase,
  lowercase,
  capatialize,
  children,
  ...props
}) => {
  const { colors } = useTheme();

  const styleComponent = [
    {
      fontSize: 15,
      color: colors?.black,
      ...(!(thin || bold || black || light || medium) && {
        fontFamily: "SFProDisplay-Regular",
      }),
    },
    flex && { flex: typeof flex !== "number" ? 1 : flex },
    w100 && { width: "100%" },
    h1 && {
      fontFamily: "SFProDisplay-Bold",
      fontSize: wp(11) > 50 ? 50 : wp(11),
    },
    h2 && {
      fontFamily: "SFProDisplay-Bold",
      fontSize: wp(10.5) > 44 ? 44 : wp(10.5),
    },
    h3 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(9) > 38 ? 38 : wp(9),
    },
    h3_5 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(8.25) > 35 ? 35 : wp(8.25),
    },
    h4 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(7.5) > 32 ? 32 : wp(7.5),
    },
    h4_5 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(6.75) > 29 ? 29 : wp(6.75),
    },
    h5 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(6) > 26 ? 26 : wp(6),
    },
    h5_5 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(5.25) > 23 ? 23 : wp(5.25),
    },
    h6 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(4.5) > 20 ? 20 : wp(4.5),
    },
    h6_5 && {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(3.75) > 17 ? 17 : wp(3.75),
    },
    h7 && {
      color: colors.darkgray,
      fontFamily: "SFProDisplay-Semibold",
      fontSize: wp(3) > 14 ? 14 : wp(3),
    },

    thin && { fontFamily: "SFProDisplay-Thin" },
    ultraLight && { fontFamily: "SFProDisplay-Ultralight" },
    light && { fontFamily: "SFProDisplay-Light" },
    regular && { fontFamily: "SFProDisplay-Regular" },
    medium && { fontFamily: "SFProDisplay-Medium" },
    semiBold && { fontFamily: "SFProDisplay-Semibold" },
    bold && { fontFamily: "SFProDisplay-Bold" },
    heavy && { fontFamily: "SFProDisplay-Heavy" },
    black && { fontFamily: "SFProDisplay-Black" },

    margin && { margin },
    marginLeft && { marginLeft },
    marginRight && { marginRight },
    marginTop && { marginTop },
    marginBottom && { marginBottom },
    marginVertical && { marginVertical },
    marginHorizontal && { marginHorizontal },

    padding && { padding },
    paddingLeft && { paddingLeft },
    paddingRight && { paddingRight },
    paddingTop && { paddingTop },
    paddingBottom && { paddingBottom },
    paddingVertical && { paddingVertical },
    paddingHorizontal && { paddingHorizontal },

    size && { fontSize: size },
    left && { textAlign: "left" },
    right && { textAlign: "right" },
    center && { textAlign: "center" },

    lineheight && { lineHeight: lineheight },

    note && { color: colors.gray },
    color && { color },
    bgColor && { backgroundColor: bgColor },
    lowercase && { textTransform: "lowercase" },
    uppercase && { textTransform: "uppercase" },
    capatialize && { textTransform: "capatialize" },

    style,
  ];
  return (
    <Text style={styleComponent} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
