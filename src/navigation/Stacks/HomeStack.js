import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Home, Settings } from "../../screens";

const { Navigator, Screen } = createStackNavigator();

const StackOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export default () => {
  return (
    <Navigator initialRouteName={"Home"}>
      <Screen name="Home" options={StackOptions} component={Home} />
      <Screen name="Settings" options={StackOptions} component={Settings} />
    </Navigator>
  );
};
