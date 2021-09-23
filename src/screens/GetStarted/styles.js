import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  bgImage: {
    position: "absolute",
  },
  logo: {
    width: wp(55),
    height: wp(55),
  },
});

export default styles;
