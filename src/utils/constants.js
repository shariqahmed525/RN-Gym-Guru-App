import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DeviceInfo from "react-native-device-info";
import { DefaultTheme } from "react-native-paper";
import { Dimensions, Platform } from "react-native";

export const isTablet = DeviceInfo.isTablet();
export const hasNotch = DeviceInfo.hasNotch();

export const isVitualDevice = async () => {
  return DeviceInfo.isEmulator();
};

export const IOSSyncUniqueId = async () => {
  return DeviceInfo?.syncUniqueId?.();
};

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
export const ASPECT_RATIO = HEIGHT / WIDTH;

export const IOS = Platform.OS === "ios";
export const ANDROID = Platform.OS === "android";

export const CONTAINER_PADDING_X = WIDTH * 0.06;
export const CONTAINER_PADDING_Y = WIDTH * 0.06;
export const PADDING_TOP = (top, num = 2) => {
  return top + hp(num);
};
export const PADDING_BOTTOM = hp(2);
export const PADDING_HORIZONTAL = wp(5) > 20 ? 20 : wp(5);
export const ITEM_WIDTH = wp("100%") - PADDING_HORIZONTAL * 2;

export const WORKOUT_DATA = [
  {
    text: "Shoulders",
    stretches: {
      beginnerAndIntermediate: ["Arm circles", "Wall arm stretch"],
      advanced: ["Laying foam roll"],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Plank to downward dog"],
      advanced: ["Inclined pushups", "Pike pushups"],
    },
    equipment: {
      beginnerAndIntermediate: ["Rows", "Shoulder press"],
      advanced: ["Lateral raises", "Dumbell snatch"],
    },
  },
  {
    text: "Pecs",
    stretches: {
      beginnerAndIntermediate: ["Standing wall stretch"],
      advanced: [],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Push ups [C]", "Dips"],
      advance: ["Diamond pushups", "Wide pushups"],
    },
    equipment: {
      beginnerAndIntermediate: ["Bench press"],
      advanced: ["Incline bench", "Cable fly"],
    },
  },
  {
    text: "Back",
    heading: "Lats/Back",
    stretches: {
      beginnerAndIntermediate: ["Cat and camel stretch", "Cobra stretch"],
      advanced: ["Bar hanging"],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Superman"],
      advanced: ["Pull ups [C]"],
    },
    equipment: {
      beginnerAndIntermediate: ["Bent over row"],
      advanced: ["Lat pull downs", "Goodmornings"],
    },
  },
  {
    text: "Biceps",
    stretches: {
      beginnerAndIntermediate: [],
      advanced: ["Laying foam roll"],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Plank up down"],
      advanced: ["Pushups/variations [C]"],
    },
    equipment: {
      beginnerAndIntermediate: ["Seated/incline dumbell curls"],
      advanced: ["Cable curl", "Hammer curlm"],
    },
  },
  {
    text: "Triceps",
    stretches: {
      beginnerAndIntermediate: ["Overhead tricep stretch"],
      advanced: [""],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Tricep dips"],
      advanced: ["Tricep pushups", ""],
    },
    equipment: {
      beginnerAndIntermediate: ["Tricep extensions"],
      advanced: ["Cable pull down"],
    },
  },
  {
    text: "Abs and Care",
    heading: "Abs/Care",
    stretches: {
      beginnerAndIntermediate: ["Cobra Stretch"],
      advanced: [""],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Sit ups/crunches", "Dead bugs"],
      advanced: ["Plank to downward dog", "Something"],
    },
    equipment: {
      beginnerAndIntermediate: ["Russian twists"],
      advanced: ["Lateral raises", ""],
    },
  },
  {
    text: "Glutes",
    stretches: {
      beginnerAndIntermediate: [],
      advanced: ["Sitting foam roll"],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Clams", "Fire hydrants"],
      advanced: ["45 degree kickbakcs", "Glute bridge"],
    },
    equipment: {
      beginnerAndIntermediate: ["Back/front squat [C]", "Deadlift [C]"],
      advanced: ["Hip thrust [C]", "Something"],
    },
  },
  {
    text: "Quads",
    stretches: {
      beginnerAndIntermediate: ["Knee flex quad stretch"],
      advanced: ["Laying foam roll"],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Squats [C]", "Lunges [C]"],
      advanced: ["Step ups/box jumps", "Wall sit"],
    },
    equipment: {
      beginnerAndIntermediate: ["Back/front squat", "Goblet squat"],
      advanced: ["Bulgarian split squat", "Shoulder press"],
    },
  },
  {
    text: "Hamstring",
    stretches: {
      beginnerAndIntermediate: [
        "Belt hamstring stretch",
        "Straight leg toe touch",
      ],
      advanced: ["Foam roll hamstrings"],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Glute bridge"],
      advanced: ["Walking lunges [C]"],
    },
    equipment: {
      beginnerAndIntermediate: [
        "Deadlift/ deadlift variations",
        "Kettlebell swing",
      ],
      advanced: ["Hamstring curls", "Cable pull-through"],
    },
  },
  {
    text: "Calves",
    stretches: {
      beginnerAndIntermediate: ["Downward dog", "Calf foam roll"],
      advanced: [" Stair calf stretch"],
    },
    noEquipment: {
      beginnerAndIntermediate: ["Seated calf raises", "Standing calf raises"],
      advanced: ["Jump rope", "Farmers walk"],
    },
    equipment: {
      beginnerAndIntermediate: ["Add weight to excercises"],
      advanced: ["Lateral raises", "Shoulder press"],
    },
  },
];

export const THEME = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
    theme: "#003060",
    lightTheme: "#8CA3B7",
    lighterTheme: "#B3C1CF",
    lightestTheme: "#ECEFF3",
    moderateTheme: "#6683A0",
    secondaryTheme: "#436e95",
    gray: "#A7A7A7",
    mediumGray: "#BDBDBD",
    lightGray: "#DEDEE3",
    lighterGray: "#ECECEC",
    darkGray: "#6E7373",
    darkerGray: "#757575",
    dark: "#393939",
    black: "#000000",
    extremeDark: "#212121",
    orange: "#FF9800",
    lightpink: "#FFEFEF",
    lightGreen: "#64E28E",
    red: "#F67171",
    light: "#FFFFFF",
    offWhite: "#F4F4F6",
    lightBorder: "rgba(0,0,0,0.15)",
    lighterBorder: "rgba(0,0,0,0.08)",
    lightestBorder: "rgba(0,0,0, 0.04)",
    orangeStroke: "#CC7321",
    orangeFill: "#FBAB62",
    redStroke: "#974A4A",
    redFill: "#E47575",
    purpleStroke: "#354E8D",
    purpleFill: "#6B8DE5",
    skyBlueStroke: "#4884B1",
    skyBlueFill: "#87C1EC",
  },
};
