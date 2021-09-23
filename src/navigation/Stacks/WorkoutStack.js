import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Workout, Planner } from "../../screens";

const { Navigator, Screen } = createStackNavigator();

const StackOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export default () => {
  return (
    <Navigator initialRouteName={"Workout"}>
      <Screen name="Workout" options={StackOptions} component={Workout} />
      <Screen name="Planner" options={StackOptions} component={Planner} />
    </Navigator>
  );
};
