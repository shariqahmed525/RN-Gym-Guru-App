import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { THEME } from "./src/utils/constants";
import { persistor, store } from "./src/redux";
import SplashScreen from "react-native-splash-screen";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={THEME}>
          <Navigation theme={THEME} />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
