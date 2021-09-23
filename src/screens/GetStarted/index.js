import React from "react";
import {
  IOS,
  hasNotch,
  PADDING_TOP,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
} from "../../utils/constants";
import styles from "./styles";
import { Image } from "react-native";
import Box from "../../components/Box";
import { useTheme } from "react-native-paper";
import Typography from "../../components/Typography";
import CustomButton from "../../components/CustomButton";

const GetStarted = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Box
      flex
      relative
      color={colors?.light}
      paddingTop={PADDING_TOP(IOS && hasNotch ? 60 : 30)}
      paddingBottom={IOS && hasNotch ? PADDING_BOTTOM + 60 : PADDING_BOTTOM}
    >
      <Image
        resizeMode="contain"
        style={styles.bgImage}
        source={require("../../assets/images/GetStartedBg.png")}
      />
      <Box absolute bottom={IOS && hasNotch ? 30 : 20} left={30}>
        <Typography size={10} color={colors?.theme} marginTop={5}>
          Powered by Teens4tech
        </Typography>
      </Box>
      <Box flex center itemsCenter>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Typography h4 bold color={colors?.theme} marginTop={2}>
          G Y M <Box width={7} height={1} /> G U R U
        </Typography>
        <Typography size={15} color={colors?.theme} marginTop={5}>
          Your personal gym guru
        </Typography>
      </Box>
      <Box center itemsCenter paddingHorizontal={PADDING_HORIZONTAL}>
        <CustomButton
          height={70}
          text="Get Started"
          textProps={{ size: 22, semiBold: true }}
          onPress={() => navigation?.replace("SignUp")}
        />
      </Box>
    </Box>
  );
};

export default GetStarted;
