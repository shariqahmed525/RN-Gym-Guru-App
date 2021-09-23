import React from "react";
import { Image } from "react-native";
import MyTab from "../../components/MyTab";
import HomeStack from "../Stacks/HomeStack";
import NoteStack from "../Stacks/NoteStack";
import { useTheme } from "react-native-paper";
import WorkoutStack from "../Stacks/WorkoutStack";
import StatusBar from "../../components/StatusBar";
import { FontAwesome, Octicons } from "../../assets/icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen: TabScreen, Navigator: TabNavigator } =
  createBottomTabNavigator();

const TabBarScreensArr = [
  {
    name: "HomeTab",
    tabBarVisible: [""],
    component: HomeStack,
    icon: () => (
      <Image
        resizeMode="contain"
        style={{ width: 30, height: 30 }}
        source={require("../../assets/images/logo.png")}
      />
    ),
  },
  {
    name: "WorkoutTab",
    tabBarVisible: [""],
    component: WorkoutStack,
    icon: (color) => <Octicons color={color} size={30} name="plus" />,
  },
  {
    name: "NoteTab",
    tabBarVisible: [],
    component: NoteStack,
    icon: (color) => <FontAwesome size={30} color={color} name="sticky-note" />,
  },
];

const getTabBarVisible = (route, array) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (array.includes(routeName)) return false;
  return true;
};

export default () => {
  const { colors } = useTheme();
  return (
    <>
      <StatusBar top={40} />
      <TabNavigator
        initialRouteName="HomeTab"
        tabBar={(props) => <MyTab {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors?.theme,
          tabBarInactiveTintColor: colors?.gray,
        }}
      >
        {TabBarScreensArr.map((v, i) => (
          <TabScreen
            key={i}
            name={v.name}
            component={v.component}
            options={({ route }) => ({
              title: v.label,
              tabBarLabel: v.label,
              tabBarIcon: ({ color, size }) => v.icon(color, size),
              tabBarVisible:
                typeof v.tabBarVisible === "boolean"
                  ? v.tabBarVisible
                  : getTabBarVisible(route, v.tabBarVisible),
            })}
          />
        ))}
      </TabNavigator>
    </>
  );
};
