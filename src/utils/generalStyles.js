import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IOS, PADDING_TOP } from "./constants";

const generalStyles = StyleSheet.create({
  iconScale: (scale = 1) => ({
    transform: [
      {
        scale,
      },
    ],
  }),
  w100: {
    width: "100%",
  },
  flex: {
    flex: 1,
  },
  alignCenter: {
    alignItems: "center",
  },
  bold: {
    fontWeight: IOS ? "600" : "bold",
  },
  safe: (flex = 1, color) => ({
    flex,
    backgroundColor: color,
  }),
  subText: (color) => ({
    color,
    fontSize: wp(4) > 25 ? 25 : wp(4),
  }),
  circleImage: (width, height) => ({
    width,
    height,
    borderRadius: 100,
  }),
  mainText: (color) => ({
    color,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: wp(8) > 55 ? 55 : wp(8),
  }),
  headerWrapper: (top) => ({
    paddingTop: IOS && top > 20 ? 0 : PADDING_TOP,
  }),
  eventError: (color, mt) => ({
    color: color,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: mt || hp(5),
    fontSize: wp(5) > 28 ? 28 : wp(5),
  }),
  btnWrapper: {
    marginTop: hp(3) - 10,
    alignItems: "center",
    justifyContent: "center",
    width: wp(85) > 650 ? 650 : wp(85),
  },
  linkText: (color, fontSize) => ({
    color,
    textAlign: "center",
    fontSize: fontSize ? fontSize : wp(4) > 16 ? 16 : wp(4),
  }),
});

export default generalStyles;
