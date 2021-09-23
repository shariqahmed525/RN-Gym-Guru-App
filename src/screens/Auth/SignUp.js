import React from "react";
import Box from "../../components/Box";
import { useTheme } from "react-native-paper";
import Typography from "../../components/Typography";
import CustomButton from "../../components/CustomButton";
import {
  IOS,
  hasNotch,
  PADDING_TOP,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
} from "../../utils/constants";
import styles from "./styles";
import { Image } from "react-native";
import { useForm } from "react-hook-form";
import TextInput from "../../components/CustomInput";

const SignUp = ({ navigation }) => {
  const { control } = useForm();
  const { colors } = useTheme();

  return (
    <Box
      relative
      flexGrow
      allowScroll
      bounces={false}
      color={colors?.light}
      paddingTop={PADDING_TOP(IOS && hasNotch ? 60 : 30)}
      paddingBottom={IOS && hasNotch ? PADDING_BOTTOM + 50 : PADDING_BOTTOM}
    >
      <Image
        resizeMode="cover"
        style={styles.bgImage}
        source={require("../../assets/images/signupBg.png")}
      />
      <Box absolute bottom={IOS && hasNotch ? 30 : 20} left={30}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
        />
      </Box>
      <Box flex center itemsCenter paddingHorizontal={PADDING_HORIZONTAL + 10}>
        <Typography
          light
          center
          size={20}
          marginBottom={5}
          color={colors?.black}
        >
          Welcome Onboard!
        </Typography>
        <Typography
          light
          center
          size={20}
          marginBottom={20}
          color={colors?.black}
        >
          Lets help you keep track of your health, and fitness journet.
        </Typography>
        <TextInput
          control={control}
          inputnName="name"
          placeholder="Name"
          inputStyle={{
            fontSize: 16,
          }}
          inputWrapperProps={{
            borderRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderColor: colors?.theme,
          }}
          inputContainerProps={{
            marginVertical: 20,
          }}
          placeholderTextColor={colors?.dark}
        />
        <TextInput
          control={control}
          inputnName="email"
          placeholder="Email"
          inputStyle={{
            fontSize: 16,
          }}
          inputWrapperProps={{
            borderRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderColor: colors?.theme,
          }}
          inputContainerProps={{
            marginVertical: 20,
          }}
          placeholderTextColor={colors?.dark}
        />
        <TextInput
          control={control}
          inputnName="password"
          placeholder="Password"
          inputStyle={{
            fontSize: 16,
          }}
          inputWrapperProps={{
            borderRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderColor: colors?.theme,
          }}
          inputContainerProps={{
            marginVertical: 20,
          }}
          placeholderTextColor={colors?.dark}
        />
        <TextInput
          control={control}
          inputnName="cpassword"
          placeholder="Confirm Password"
          inputStyle={{
            fontSize: 16,
          }}
          inputWrapperProps={{
            borderRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderColor: colors?.theme,
          }}
          inputContainerProps={{
            marginVertical: 20,
          }}
          placeholderTextColor={colors?.dark}
        />

        <CustomButton
          height={70}
          text="Sign up"
          marginTop={20}
          textProps={{ size: 22, semiBold: true }}
          onPress={() => navigation?.replace("AuthenticatedUser")}
        />
        <Typography light center marginTop={30} color={colors?.black}>
          Already have an account? <Typography semiBold>Sign in</Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
