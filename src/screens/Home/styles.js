import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { PADDING_HORIZONTAL } from "../../utils/constants";

const val = wp(5) > 20 ? 20 : wp(5);

const styles = StyleSheet.create({
  bgImage: {
    position: "absolute",
  },
  bannerImageWrapper: {
    marginTop: 15,
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: wp(100) - val * 2,
  },
  bannerImage: {
    width: wp(100) - val * 2,
  },
  logo: {
    width: wp(7),
    height: wp(7),
  },
  bannerIcon: {
    width: 35,
    height: 35,
  },
  gradientBox: {
    marginTop: 15,
    borderRadius: 20,
    borderTopRightRadius: 75,
  },
  nextBoxImageWrapper: (bgColor) => ({
    height: 130,
    width: wp(80),
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: bgColor,
  }),
  nextBoxImage: {
    height: 130,
    width: "100%",
  },
});

export default styles;
