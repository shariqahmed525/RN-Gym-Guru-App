import React from "react";
import {
  PADDING_TOP,
  WORKOUT_DATA,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
} from "../../utils/constants";
import Box from "../../components/Box";
import Header from "../../components/Header";
import { useTheme } from "react-native-paper";
import ListItem from "../../components/ListItem";
import Container from "../../components/Container";
import Typography from "../../components/Typography";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const buttons = ["Stretches", "Cardio", "Ready workouts", "At home"];

const buttonSize = (wp(100) - PADDING_HORIZONTAL - PADDING_HORIZONTAL * 2) / 2;

const Workout = ({ navigation }) => {
  const { colors } = useTheme();

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
          allowBackIcon={false}
          renderCenter={
            <Typography center h4_5>
              Workout
            </Typography>
          }
        />
        <Typography
          h5_5
          light
          center
          marginTop={30}
          color={colors?.dark}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          Select a muscel group
        </Typography>
        <Box flex paddingHorizontal={PADDING_HORIZONTAL}>
          {WORKOUT_DATA.map((v, i) => (
            <ListItem
              key={i}
              text={v?.text}
              showLeftIcon={false}
              onIconPress={() =>
                navigation?.navigate("Planner", {
                  data: {
                    ...v,
                  },
                })
              }
            />
          ))}
        </Box>
        <Box
          wrap
          between
          flex={0}
          width={"100%"}
          marginTop={20}
          direction="row"
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          {buttons.map((v, i) => (
            <Box
              shadow
              center
              key={i}
              isTouchable
              itemsCenter
              borderRadius={10}
              width={buttonSize}
              paddingVertical={20}
              paddingHorizontal={5}
              color={colors?.lightTheme}
              marginTop={PADDING_HORIZONTAL}
            >
              <Typography size={16} medium color={colors?.theme}>
                {v}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Workout;
