import React, { useState } from "react";
import {
  IOS,
  hasNotch,
  PADDING_TOP,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
} from "../../utils/constants";
import styles from "./styles";
import Box from "../../components/Box";
import { Icon } from "../../assets/icons";
import Header from "../../components/Header";
import { useTheme } from "react-native-paper";
import Typography from "../../components/Typography";
import { Image, ImageBackground } from "react-native";
import NextPost from "../../components/Home/NextPost";
import ProgressCircle from "react-native-progress-circle";
import CustomCheckbox from "../../components/CustomCheckbox";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const arr = [0, 1, 2, 3, 4, 5];

const remindersArr = [
  "Waterbottle",
  "Towel",
  "Snack",
  "Wallet",
  "Preworkout",
  "Extra clothes",
  "Running shoes",
  "Keys",
];

const OptionWidth = (wp(100) - PADDING_HORIZONTAL * 2 - 10) / 2;

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const [reminders, setReminders] = useState([]);

  const _reminderHandler = (reminder) => {
    if (reminders.includes(reminder)) {
      setReminders([...reminders.filter((o) => o !== reminder)]);
      return;
    }
    setReminders((prevState) => [...prevState, reminder]);
  };

  return (
    <Box
      flexGrow
      allowScroll
      bounces={false}
      color={colors?.light}
      paddingBottom={PADDING_BOTTOM}
      showsVerticalScrollIndicator={false}
      paddingTop={PADDING_TOP(IOS && hasNotch ? 40 : 30)}
    >
      <Image
        resizeMode="contain"
        style={styles.bgImage}
        source={require("../../assets/images/homeEllipse.png")}
      />
      <Header
        headerWrapperProps={{
          itemsCenter: true,
        }}
        renderLeft={
          <Box flex>
            <Typography h5 flex light color={colors?.dark}>
              Good Morning,{"\n"}George
            </Typography>
          </Box>
        }
        title=""
        renderRight={
          <Box itemsCenter direction="row" paddingHorizontal={5}>
            <Box
              isTouchable
              marginRight={12}
              onPress={() => navigation?.navigate("Settings")}
            >
              <Icon size={28} name="settings-sharp" color={colors?.theme} />
            </Box>
            <Box>
              <Icon size={26} name="person" color={colors?.theme} />
            </Box>
          </Box>
        }
      />

      <Box flex marginTop={25}>
        <Typography
          h5_5
          light
          color={colors?.dark}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          Are you planning to workout today?
        </Typography>

        <Box paddingHorizontal={PADDING_HORIZONTAL}>
          <ImageBackground
            resizeMode="stretch"
            imageStyle={styles.bannerImage}
            style={styles.bannerImageWrapper}
            source={require("../../assets/images/homeBanner.png")}
          >
            <Box direction="row" between itemsCenter>
              <Box center itemsCenter>
                <Typography h4_5 thin color={colors?.black}>
                  Yes
                </Typography>
                <Typography regular marginTop={5} color={colors?.black}>
                  Continue my streak
                </Typography>
              </Box>
              <Box center itemsCenter>
                <Typography h4_5 thin color={colors?.black}>
                  NO
                </Typography>
                <Typography regular marginTop={5} color={colors?.black}>
                  Rest day
                </Typography>
              </Box>
            </Box>
            <Box direction="row" marginTop={30} between itemsCenter>
              <Box center direction="row" itemsCenter>
                <ProgressCircle
                  radius={20}
                  percent={0}
                  borderWidth={6}
                  color={colors?.theme}
                  bgColor={colors?.lightestTheme}
                  shadowColor={colors?.lightTheme}
                />
                <Typography marginLeft={10} h3_5 color={colors?.theme}>
                  2 / 3
                </Typography>
              </Box>
              <Box center direction="row" itemsCenter>
                <Image
                  resizeMode="contain"
                  style={styles.bannerIcon}
                  source={require("../../assets/images/Fire.png")}
                />
                <Typography marginLeft={10} h3_5 color={colors?.theme}>
                  24
                </Typography>
              </Box>
            </Box>
          </ImageBackground>
        </Box>

        <Typography
          h5_5
          light
          marginTop={25}
          color={colors?.dark}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          Up Next
        </Typography>
        <Box>
          <Box
            allowScroll
            marginTop={15}
            bounces={false}
            direction="row"
            horizontal={true}
            paddingHorizontal={PADDING_HORIZONTAL}
            showsHorizontalScrollIndicator={false}
          >
            {arr.map((v, i) => (
              <NextPost
                key={i}
                index={i}
                length={arr.length}
                date="Wednesday, July 21 12:00 AM"
                text={`BEGINNER\nStretches & Mobility`}
              />
            ))}
          </Box>
        </Box>
        <Typography
          h5
          light
          marginTop={25}
          color={colors?.dark}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          REMINDERS:
        </Typography>
        <Box
          wrap
          between
          marginTop={10}
          width={"100%"}
          direction="row"
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          {remindersArr.map((v, i) => (
            <Box width={OptionWidth}>
              <CustomCheckbox
                key={i}
                text={v}
                handleCheck={_reminderHandler}
                isChecked={reminders.includes(v)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
