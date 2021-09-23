import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  bgImage: {
    width: wp(100),
    position: "absolute",
  },
  logo: {
    width: wp(7),
    height: wp(7),
  },
});

export default styles;
