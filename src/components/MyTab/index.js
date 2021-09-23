import React from "react";
import Box from "../Box";
import { useTheme } from "react-native-paper";
import { hasNotch, IOS } from "../../utils/constants";

const MyTab = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box
      direction="row"
      paddingTop={15}
      color={colors?.light}
      paddingBottom={IOS && hasNotch ? 30 : 15}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Box
            flex
            center
            itemsCenter
            isTouchable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {options &&
              options.tabBarIcon &&
              options?.tabBarIcon?.({
                color: colors?.theme,
              })}
          </Box>
        );
      })}
    </Box>
  );
};

export default MyTab;
