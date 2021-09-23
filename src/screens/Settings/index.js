import React from "react";
import {
  PADDING_TOP,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
} from "../../utils/constants";
import Box from "../../components/Box";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { useTheme } from "react-native-paper";
import { EvilIcons } from "../../assets/icons";
import ListItem from "../../components/ListItem";
import Container from "../../components/Container";
import TextInput from "../../components/CustomInput";

const arr = [
  "Account settings",
  "Weight settings",
  "Display settings",
  "Profile settings",
  "Device settings",
];

const Settings = ({ navigation }) => {
  const { colors } = useTheme();
  const { control } = useForm();

  return (
    <Container bounces={false}>
      <Box
        flex
        color={colors?.light}
        paddingTop={PADDING_TOP(-10)}
        paddingBottom={PADDING_BOTTOM + 50}
      >
        <Header
          headerWrapperProps={{
            itemsCenter: true,
          }}
          allowBackIcon
          title="Settings"
        />
        <Box flex marginVertical={20} paddingHorizontal={PADDING_HORIZONTAL}>
          <TextInput
            inputWrapperProps={{
              paddingLeft: 20,
              borderRadius: 100,
              borderColor: colors?.theme,
            }}
            inputStyle={{
              fontSize: 15,
            }}
            right={<EvilIcons size={30} name="search" color={colors?.theme} />}
            control={control}
            placeholder="Search"
            inputnName={"search"}
            placeholderTextColor={colors?.dark}
          />
          <Box>
            {arr.map((v, i) => (
              <ListItem key={i} text={v} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;
