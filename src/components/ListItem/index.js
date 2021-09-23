import React from "react";
import Box from "../Box";
import Typography from "../Typography";
import { Icon } from "../../assets/icons";
import { useTheme } from "react-native-paper";

const ListItem = ({
  text,
  onPress,
  onIconPress,
  showLeftIcon = true,
  showRightIcon = true,
}) => {
  const { colors } = useTheme();
  return (
    <Box
      between
      itemsCenter
      marginTop={30}
      direction="row"
      onPress={onPress}
      isTouchable={onPress}
    >
      {showLeftIcon && <Icon name="person" size={22} color={colors?.theme} />}
      <Typography
        flex
        light
        size={18}
        paddingLeft={showLeftIcon ? 15 : 0}
        paddingRight={showRightIcon ? 15 : 0}
      >
        {text}
      </Typography>
      {showRightIcon && (
        <Box isTouchable paddingLeft={10} onPress={onIconPress}>
          <Icon
            size={25}
            color={colors?.darkGray}
            name="arrow-forward-outline"
          />
        </Box>
      )}
    </Box>
  );
};

export default ListItem;
