import moment from "moment";
import jwt_decode from "jwt-decode";
import { IOSSyncUniqueId } from "./constants";
import NetInfo from "@react-native-community/netinfo";
import { CommonActions } from "@react-navigation/native";
import { setIosSyncUniqueId } from "../redux/slices/userSlice";
import AsyncStorage from "@react-native-community/async-storage";

export const isTokenExpired = (token) => {
  if (!token) return false;
  const decoded = jwt_decode(token);
  if (decoded.exp <= Date.now()) return true;
  return false;
};

export const checkConnection = async () => {
  try {
    const { isConnected } = await NetInfo.fetch();
    console.log("connection ===> ", isConnected);
    return isConnected;
  } catch (err) {
    console.log("error in check connection ===> ", err);
    throw new Error(err);
  }
};

export const checkInternet = async (func, falseAlert = false) => {
  try {
    const connection = await checkConnection();
    if (!connection && !falseAlert) {
      popupError("Make sure your device is connected to the internet");
      return;
    }
    func();
  } catch (error) {
    !falseAlert && popupError(error?.response?.data?.message);
    console.log("Got error in checkInternet ===> ", error);
  }
};

export const onRetry = async (retry) => {
  if (retry && typeof retry === "function") {
    await retry();
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw new Error(error);
  }
};

export const fullResetNavigationHandler = (
  navigation,
  screenName,
  params = null
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: screenName,
          params,
        },
      ],
    })
  );
};

export const resetRouteWithSomeScreens = (
  navigation,
  removeScreens,
  setRoutes = []
) => {
  navigation.dispatch((state) => {
    const routes = state.routes.filter((r) => !removeScreens.includes(r.name));
    return CommonActions.reset({
      ...state,
      index: routes.length,
      routes: [...routes, ...setRoutes],
    });
  });
};

export const trimName = (name = "", splitBy = " ", index = 0) => {
  return name.split(splitBy)[index];
};

export const IsJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const setIOSSyncUniqueId = async (dispatch) => {
  const syncUniqueId = await IOSSyncUniqueId();
  setTimeout(async () => {
    dispatch(setIosSyncUniqueId(syncUniqueId));
  }, 1000);
};

export const weekDays = (month, year) => {
  const endDate = moment().date(0).month(month).year(year);

  return Array(endDate.date())
    .fill(0)
    .map((_, i) =>
      moment()
        .date(i + 1)
        .month(month)
        .year(year)
    )
    .map((day) => ({ day, week: day.week() }))
    .filter(
      ({ week }, i, arr) => arr.findIndex((info) => info.week === week) === i
    )
    .map(({ day, week }) => ({
      week,
      days: Array(7)
        .fill(0)
        .map((_, i) => moment(day).week(week).startOf("week").add(i, "day")),
    }));
};

export const isPastDate = (date) => {
  const todayDate = moment(moment().format("DD-MM-YYYY"), "DD-MM-YYYY");
  const pastDate = moment(date, "DD-MM-YYYY");
  const dDiff = todayDate.diff(pastDate);
  if (dDiff > 0) {
    return true;
  } else {
    return false;
  }
};
