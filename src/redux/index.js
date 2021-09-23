import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import logger from "redux-logger";
import appSlice from "./slices/appSlice";
import userSlice from "./slices/userSlice";
import AsyncStorage from "@react-native-community/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducers = combineReducers({
  appReducer: appSlice,
  userReducer: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
