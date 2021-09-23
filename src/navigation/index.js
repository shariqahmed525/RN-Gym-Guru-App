import React, { forwardRef, useMemo } from "react";
import TabBar from "./TabBar";
import { useSelector } from "react-redux";
import AuthStack from "./Stacks/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

export default forwardRef(({ theme }, ref) => {
  const {
    appReducer: { doesShowSlider },
  } = useSelector((state) => {
    return useMemo(() => state, [state?.appReducer?.doesShowSlider]);
  });

  const render = (
    <NavigationContainer theme={theme} ref={ref}>
      {/* {doesShowSlider ? <AuthStack /> : <TabBar />} */}
      <AuthStack />
    </NavigationContainer>
  );
  return render;
});
