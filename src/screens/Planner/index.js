import React from "react";
import {
  PADDING_TOP,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
} from "../../utils/constants";
import Box from "../../components/Box";
import { Octicons } from "../../assets/icons";
import { useTheme } from "react-native-paper";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Typography from "../../components/Typography";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Option = ({ text, colors }) => {
  return (
    <Box
      width="100%"
      itemsCenter
      marginTop={20}
      direction="row"
      borderRadius={10}
      paddingVertical={12}
      paddingHorizontal={15}
      color={colors?.lightTheme}
    >
      <Octicons color={colors?.theme} size={25} name="plus" />
      <Typography flex size={17} marginLeft={15} adjustsFontSizeToFit>
        {text}
      </Typography>
    </Box>
  );
};

const Planner = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { data } = route?.params || {};

  return (
    <Container>
      <Box
        flex
        color={colors?.light}
        paddingTop={PADDING_TOP(0)}
        paddingBottom={PADDING_BOTTOM + 50}
      >
        <Header
          headerWrapperProps={{
            itemsCenter: true,
          }}
          allowBackIcon={true}
          title={data?.heading || data?.text}
        />
        <Typography
          right
          size={17}
          marginTop={20}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          [C] = Compound
        </Typography>

        {/* Stretches section */}
        <Typography
          h5
          light
          marginTop={20}
          color={colors?.dark}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          Stretches/Warm up
        </Typography>
        <Box marginTop={20}>
          <Box
            allowScroll
            bounces={false}
            direction="row"
            horizontal={true}
            paddingHorizontal={PADDING_HORIZONTAL}
            showsHorizontalScrollIndicator={false}
          >
            <Box
              flex={0}
              height={200}
              width={wp(80)}
              borderWidth={1}
              marginRight={15}
              borderRadius={20}
              padding={PADDING_HORIZONTAL}
              color={colors?.lightestTheme}
              borderColor={colors?.lightestTheme}
            >
              <Typography>BEGGINER/ ITERMEDIATE</Typography>
              {data?.stretches?.beginnerAndIntermediate?.map?.(
                (option, idx) => (
                  <Option key={idx} text={option} colors={colors} />
                )
              )}
            </Box>
            <Box
              flex={0}
              height={200}
              width={wp(80)}
              borderWidth={1}
              borderRadius={20}
              padding={PADDING_HORIZONTAL}
              color={colors?.lightestTheme}
              borderColor={colors?.lightestTheme}
            >
              <Typography>ADVANCED</Typography>
              {data?.stretches?.advanced?.map?.((option, idx) => (
                <Option key={idx} text={option} colors={colors} />
              ))}
            </Box>
          </Box>
        </Box>

        {/* No Equipment section */}
        <Typography
          h5
          light
          marginTop={20}
          color={colors?.dark}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          No Equipment
        </Typography>
        <Box marginTop={20}>
          <Box
            allowScroll
            bounces={false}
            direction="row"
            horizontal={true}
            paddingHorizontal={PADDING_HORIZONTAL}
            showsHorizontalScrollIndicator={false}
          >
            <Box
              flex={0}
              height={200}
              width={wp(80)}
              borderWidth={1}
              marginRight={15}
              borderRadius={20}
              padding={PADDING_HORIZONTAL}
              color={colors?.lightestTheme}
              borderColor={colors?.lightestTheme}
            >
              <Typography>BEGGINER/ ITERMEDIATE</Typography>
              {data?.noEquipment?.beginnerAndIntermediate?.map?.(
                (option, idx) => (
                  <Option key={idx} text={option} colors={colors} />
                )
              )}
            </Box>
            <Box
              flex={0}
              height={200}
              width={wp(80)}
              borderWidth={1}
              borderRadius={20}
              padding={PADDING_HORIZONTAL}
              color={colors?.lightestTheme}
              borderColor={colors?.lightestTheme}
            >
              <Typography>ADVANCED</Typography>
              {data?.noEquipment?.advanced?.map?.((option, idx) => (
                <Option key={idx} text={option} colors={colors} />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Equipment section */}
        <Typography
          h5
          light
          marginTop={20}
          color={colors?.dark}
          paddingHorizontal={PADDING_HORIZONTAL}
        >
          Equipment
        </Typography>
        <Box marginTop={20}>
          <Box
            allowScroll
            bounces={false}
            direction="row"
            horizontal={true}
            paddingHorizontal={PADDING_HORIZONTAL}
            showsHorizontalScrollIndicator={false}
          >
            <Box
              flex={0}
              height={200}
              width={wp(80)}
              borderWidth={1}
              marginRight={15}
              borderRadius={20}
              padding={PADDING_HORIZONTAL}
              color={colors?.lightestTheme}
              borderColor={colors?.lightestTheme}
            >
              <Typography>BEGGINER/ ITERMEDIATE</Typography>
              {data?.equipment?.beginnerAndIntermediate?.map?.(
                (option, idx) => (
                  <Option key={idx} text={option} colors={colors} />
                )
              )}
            </Box>
            <Box
              flex={0}
              height={200}
              width={wp(80)}
              borderWidth={1}
              borderRadius={20}
              padding={PADDING_HORIZONTAL}
              color={colors?.lightestTheme}
              borderColor={colors?.lightestTheme}
            >
              <Typography>ADVANCED</Typography>
              {data?.equipment?.advanced?.map?.((option, idx) => (
                <Option key={idx} text={option} colors={colors} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Planner;
