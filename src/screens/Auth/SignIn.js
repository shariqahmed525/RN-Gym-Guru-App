import React from "react";
import Box from "../../components/Box";
import { useTheme } from "react-native-paper";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Typography from "../../components/Typography";
import { PADDING_TOP, PADDING_BOTTOM } from "../../utils/constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SignIn = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Box
        flex
        color={colors?.light}
        paddingTop={PADDING_TOP(0)}
        paddingBottom={PADDING_BOTTOM + 90}
      >
        <Header
          headerWrapperProps={{
            itemsCenter: true,
          }}
          renderLeft={<Typography h4>Today</Typography>}
          renderRight={
            <Box
              isTouchable
              paddingHorizontal={5}
              onPress={() => alert("Notification")}
            ></Box>
          }
        />
      </Box>
    </Container>
  );
};

export default SignIn;
