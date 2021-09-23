import React, { useState } from "react";
import Box from "../Box";
import Typography from "../Typography";
import TrackingBox from "../TrackingBox";
import { useTheme } from "react-native-paper";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ScheduleBox = () => {
  const { colors } = useTheme();
  const [tracks, setTracks] = useState([]);

  const _handleTrackingBox = (index) => {
    if (tracks.includes(index)) {
      setTracks([...tracks.filter((o) => o !== index)]);
      return;
    }
    setTracks((prevState) => [...prevState, index]);
  };

  return (
    <Box
      relative
      width="100%"
      borderWidth={5}
      borderRadius={22}
      color={colors?.theme}
      borderColor={colors?.theme}
    >
      <Box
        absolute
        top={-27}
        left={40}
        width={12}
        height={48}
        zIndex={100}
        borderRadius={100}
        color={colors?.theme}
      />
      <Box
        absolute
        top={-27}
        right={40}
        width={12}
        height={48}
        zIndex={100}
        borderRadius={100}
        color={colors?.theme}
      />
      <Box
        center
        itemsCenter
        height={65}
        color={colors?.light}
        style={{
          borderTopLeftRadius: 17,
          borderTopRightRadius: 17,
        }}
      >
        <Typography h5 light center>
          July 2021
        </Typography>
      </Box>
      <Box
        wrap
        marginTop={12}
        paddingTop={5}
        direction="row"
        paddingBottom={15}
        paddingHorizontal={5}
        color={colors?.light}
        style={{
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 17,
        }}
      >
        {days.map((v, i) => (
          <TrackingBox key={i} showBg={false} text={v} />
        ))}
        {new Array(35).fill("dummy").map((_, i) => (
          <TrackingBox
            key={i}
            index={i}
            onPress={_handleTrackingBox}
            isChecked={tracks.includes(i)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ScheduleBox;
