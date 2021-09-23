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
import Container from "../../components/Container";
import TextInput from "../../components/CustomInput";
import Typography from "../../components/Typography";
import { LineChart } from "react-native-gifted-charts";
import ScheduleBox from "../../components/ScheduleBox";
import ProgressCircle from "react-native-progress-circle";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const padd = PADDING_HORIZONTAL * 2 + 10 * 4;

const BoxSize = (wp(100) - padd) / 4;
const data = [
  { value: 0 },
  { value: 100 },
  { value: 50 },
  { value: 90 },
  { value: 40 },
  { value: 80 },
];

const Note = ({ navigation }) => {
  const { colors } = useTheme();
  const { control } = useForm();

  const nutritionData = [
    {
      text: "kc",
      title: "Cals",
      fill: colors?.orangeFill,
      stroke: colors?.orangeStroke,
    },
    {
      text: "g",
      title: "Protien",
      fill: colors?.redFill,
      stroke: colors?.redStroke,
    },
    {
      text: "g",
      title: "Fats",
      fill: colors?.purpleFill,
      stroke: colors?.purpleStroke,
    },
    {
      text: "g",
      title: "Carbs",
      fill: colors?.skyBlueFill,
      stroke: colors?.skyBlueStroke,
    },
  ];

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
              Schedule &amp; Tracking
            </Typography>
          }
        />
        <Box marginTop={40}>
          <Box paddingHorizontal={PADDING_HORIZONTAL}>
            <ScheduleBox />
            <Box
              hidden
              width={"100%"}
              marginTop={30}
              paddingTop={20}
              borderRadius={20}
              color={colors?.lighterTheme}
            >
              <Typography
                h5_5
                light
                marginBottom={20}
                paddingHorizontal={PADDING_HORIZONTAL}
              >
                Calore Intake
              </Typography>
              <LineChart
                hideRules
                data={data}
                height={70}
                spacing={40}
                horizSections
                initialSpacing={0}
                hideYAxisText={true}
                color={colors?.black}
              />
            </Box>
            <Box
              hidden
              width={"100%"}
              marginTop={30}
              paddingTop={20}
              borderRadius={20}
              color={colors?.lighterTheme}
            >
              <Typography
                h5_5
                light
                marginBottom={20}
                paddingHorizontal={PADDING_HORIZONTAL}
              >
                Weight Over Time
              </Typography>
              <LineChart
                hideRules
                data={data}
                height={70}
                spacing={40}
                horizSections
                initialSpacing={0}
                hideYAxisText={true}
                color={colors?.black}
              />
            </Box>
            <Typography size={18} light marginTop={20}>
              Averaging around 7 hours of sleep each night
            </Typography>
            <Typography size={18} light marginTop={3}>
              Averaging around 6020 steps every day.
            </Typography>

            <Typography
              h4_5
              light
              marginTop={25}
              marginBottom={15}
              color={colors?.dark}
            >
              Goals
            </Typography>
          </Box>
          <Box
            width="100%"
            paddingVertical={30}
            color={colors?.lightestTheme}
            paddingHorizontal={PADDING_HORIZONTAL}
          >
            <Typography h5_5 regular>
              WORKOUTS
            </Typography>
            <Typography h6 marginTop={10} regular>
              How many workouts a week?
            </Typography>
            <Box
              shadow
              alignStart
              itemsCenter
              marginTop={30}
              direction="row"
              borderRadius={10}
              paddingVertical={10}
              paddingHorizontal={15}
              color={colors?.lighterTheme}
            >
              <ProgressCircle
                radius={22}
                percent={30}
                borderWidth={6}
                color={colors?.theme}
                bgColor={colors?.lighterTheme}
                shadowColor={colors?.lightTheme}
              />
              <Typography marginLeft={15} h3 color={colors?.theme}>
                0 / _
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            paddingVertical={30}
            color={colors?.lighterTheme}
            paddingHorizontal={PADDING_HORIZONTAL}
          >
            <Typography h5_5 regular>
              BODY
            </Typography>
            <Typography h6 light marginTop={20}>
              BMI calculator:
            </Typography>
            <Typography h6 light marginTop={10}>
              Height:
            </Typography>
            <Typography h6 light marginTop={10}>
              Weight:
            </Typography>
            <Typography h6 light marginTop={10}>
              Goal Weight:
            </Typography>
          </Box>
          <Box
            width="100%"
            paddingVertical={30}
            color={colors?.lightTheme}
            paddingHorizontal={PADDING_HORIZONTAL}
          >
            <Typography h5_5 regular>
              ACTIVITY
            </Typography>
            <Typography h6 light marginTop={20}>
              Active hours goal:
            </Typography>
            <Typography h6 light marginTop={10}>
              Daily Steps goal:
            </Typography>
          </Box>
          <Box
            width="100%"
            paddingVertical={30}
            color={colors?.moderateTheme}
            paddingHorizontal={PADDING_HORIZONTAL}
          >
            <Typography h5_5 regular>
              NUTRITION
            </Typography>
            <Box marginTop={20} direction="row" between itemsCenter>
              {nutritionData.map((v, i) => (
                <Box width={BoxSize} key={i}>
                  <Typography
                    bold
                    center
                    size={20}
                    color={v?.fill}
                    paddingBottom={10}
                    adjustsFontSizeToFit
                  >
                    {v.title}
                  </Typography>
                  <Box
                    itemsCenter
                    direction="row"
                    width={BoxSize}
                    borderWidth={5}
                    color={v?.fill}
                    height={BoxSize}
                    borderRadius={100}
                    paddingHorizontal={5}
                    borderColor={v?.stroke}
                  >
                    <Typography h6 medium marginRight={2}>
                      {v?.text}:
                    </Typography>
                    <TextInput
                      inputContainerProps={{
                        flex: true,
                      }}
                      control={control}
                      inputnName={v?.text}
                      inputStyle={{
                        fontFamily: "SFProDisplay-Medium",
                        fontSize: wp(4.5) > 20 ? 20 : wp(4.5),
                      }}
                      inputWrapperProps={{
                        paddingVertical: 2,
                        paddingHorizontal: 0,
                        borderBottomWidth: 1,
                        borderColor: colors?.dark,
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Note;
