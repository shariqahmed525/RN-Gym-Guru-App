import React, { forwardRef } from "react";
import AuthStack from "./Stacks/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

export default forwardRef(({ theme }, ref) => {
  const render = (
    <NavigationContainer theme={theme} ref={ref}>
      <AuthStack />
    </NavigationContainer>
  );
  return render;
});
