import React from "react";
import { useTheme } from "react-native-paper";
import { ScrollView, View, TouchableOpacity } from "react-native";
import {
  ScrollView as GHScrollView,
  TouchableOpacity as GHTouchableOpacity,
} from "react-native-gesture-handler";

const Box = ({
  top,
  left,
  right,
  bottom,
  absolute,
  relative,

  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,

  margin,
  marginTop,
  marginEnd,
  marginStart,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,

  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingVertical,
  paddingHorizontal,

  border,
  borderStyle,
  borderColor,
  borderWidth,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  borderRadius,

  flex,
  flexGrow,
  direction,
  wrap,
  nowrap,
  wrapReverse,

  // justify-content
  end,
  start,
  center,
  evenly,
  around,
  between,

  // align-items
  itemsEnd,
  itemsStart,
  itemsStrech,
  itemsCenter,
  itemsBaseline,

  // align-self
  alignEnd,
  alignAuto,
  alignStart,
  alignStrech,
  alignCenter,
  alignBaseline,

  color,
  shadow,
  shadowColor,
  zIndex,
  hidden,

  style,
  isTouchable,
  allowScroll,
  children,
  gh,
  ...rest
}) => {
  const { colors } = useTheme();

  const boxStyle = [
    top && { top: top },
    left && { left: left },
    right && { right: right },
    bottom && { bottom: bottom },
    absolute && { position: "absolute" },
    relative && { position: "relative" },

    width && { width },
    minWidth && { minWidth },
    maxWidth && { maxWidth },
    height && { height },
    minHeight && { minHeight },
    maxHeight && { maxHeight },

    margin && { margin },
    marginTop && { marginTop },
    marginEnd && { marginEnd },
    marginStart && { marginStart },
    marginBottom && { marginBottom },
    marginLeft && { marginLeft },
    marginRight && { marginRight },
    marginVertical && { marginVertical },
    marginHorizontal && { marginHorizontal },

    padding && { padding },
    paddingTop && { paddingTop },
    paddingBottom && { paddingBottom },
    paddingLeft && { paddingLeft },
    paddingRight && { paddingRight },
    paddingVertical && { paddingVertical },
    paddingHorizontal && { paddingHorizontal },

    border && { borderWidth: 1, borderColor: colors?.lighterBorder },
    borderStyle && { borderStyle },
    borderWidth &&
      !borderTopWidth &&
      !borderLeftWidth &&
      !borderRightWidth &&
      !borderBottomWidth && { borderWidth },
    borderTopWidth && { borderTopWidth },
    borderLeftWidth && { borderLeftWidth },
    borderRightWidth && { borderRightWidth },
    borderBottomWidth && { borderBottomWidth },
    borderColor && { borderColor },
    borderRadius && { borderRadius },

    flex && { flex: typeof flex !== "number" ? 1 : flex },
    flexGrow && { flexGrow: typeof flexGrow !== "number" ? 1 : flexGrow },
    direction && { flexDirection: direction },
    wrap && { flexWrap: "wrap" },
    nowrap && { flexWrap: "nowrap" },
    wrapReverse && { flexWrap: "wrap-reverse" },

    end && { justifyContent: "flex-end" },
    start && { justifyContent: "flex-start" },
    center && { justifyContent: "center" },
    evenly && { justifyContent: "space-evenly" },
    around && { justifyContent: "space-around" },
    between && { justifyContent: "space-between" },

    itemsEnd && { alignItems: "flex-end" },
    itemsStart && { alignItems: "flex-start" },
    itemsStrech && { alignItems: "stretch" },
    itemsCenter && { alignItems: "center" },
    itemsBaseline && { alignItems: "baseline" },

    alignEnd && { alignSelf: "flex-end" },
    alignAuto && { alignSelf: "auto" },
    alignStart && { alignSelf: "flex-start" },
    alignStrech && { alignSelf: "stretch" },
    alignCenter && { alignSelf: "center" },
    alignBaseline && { alignSelf: "baseline" },

    color && { backgroundColor: color },
    hidden && { overflow: "hidden" },
    shadow && {
      ...(typeof shadow === "object"
        ? { ...shadow }
        : {
            shadowColor: shadowColor || "#999",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }),
    },
    zIndex && { zIndex: typeof zIndex !== "number" ? 1 : zIndex },
    style,
  ];
  const Component = isTouchable
    ? gh
      ? GHTouchableOpacity
      : TouchableOpacity
    : allowScroll
    ? gh
      ? GHScrollView
      : ScrollView
    : View;
  return (
    <Component
      activeOpacity={0.8}
      {...(allowScroll
        ? {
            contentContainerStyle: boxStyle,
          }
        : {
            style: boxStyle,
          })}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Box;
