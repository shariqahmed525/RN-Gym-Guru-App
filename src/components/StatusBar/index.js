import React from "react";
import Box from "../Box";
import { IOS } from "../../utils/constants";
import { StatusBar as RNStatusBar } from "react-native";

const StatusBar = ({ color = "#fff", top = 20 }) => {
  return (
    <Box color={color} height={IOS && top > 20 ? 0 : top}>
      <RNStatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={color}
      />
    </Box>
  );
};

export default StatusBar;
