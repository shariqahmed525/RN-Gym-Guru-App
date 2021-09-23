import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import TabBar from "../TabBar";
import { SignUp, SignIn, GetStarted } from "../../screens";

const { Navigator, Screen } = createStackNavigator();

const StackOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export default () => {
  return (
    <Navigator initialRouteName={"GetStarted"}>
      <Screen name="GetStarted" options={StackOptions} component={GetStarted} />
      <Screen name="SignUp" options={StackOptions} component={SignUp} />
      <Screen name="SignIn" options={StackOptions} component={SignIn} />
      <Screen
        component={TabBar}
        name="AuthenticatedUser"
        options={StackOptions}
      />
    </Navigator>
  );
};
