import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Note } from "../../screens";

const { Navigator, Screen } = createStackNavigator();

const StackOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export default () => {
  return (
    <Navigator initialRouteName={"Note"}>
      <Screen name="Note" options={StackOptions} component={Note} />
    </Navigator>
  );
};
