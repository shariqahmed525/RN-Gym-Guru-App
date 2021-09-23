import React, { forwardRef } from "react";
import Box from "../Box";
import Typography from "../Typography";
import { IOS } from "../../utils/constants";
import { Controller } from "react-hook-form";
import { useTheme } from "react-native-paper";
import { StyleSheet, TextInput as RNTextInput } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const TextInput = forwardRef((props, ref) => {
  const {
    left,
    right,
    label,
    onLeftPress,
    onRightPress,
    leftProps = {},
    labelProps = {},
    rightProps = {},
    inputStyle = {},
    inputWrapperProps = {},
    inputContainerProps = {},

    error,
    control,
    required,
    inputnName,
    defaultValue = "",
    ...rest
  } = props;
  const { colors } = useTheme();

  return (
    <Box width="100%" {...inputContainerProps}>
      {label && (
        <Typography
          size={15}
          marginLeft={3}
          numberOfLines={1}
          marginBottom={10}
          color={colors?.dark}
          adjustsFontSizeToFit
          {...labelProps}
        >
          {label}
        </Typography>
      )}
      <Box
        center
        direction="row"
        borderWidth={1}
        borderRadius={5}
        paddingHorizontal={15}
        paddingVertical={IOS ? 12 : 7}
        borderColor={error ? colors?.danger : colors?.lightBorder}
        {...inputWrapperProps}
      >
        {left && (
          <Box
            paddingRight={8}
            isTouchable={onLeftPress}
            onPress={onLeftPress && onLeftPress}
            {...leftProps}
          >
            {left}
          </Box>
        )}
        <Controller
          control={control}
          rules={{
            required: { required },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <RNTextInput
              ref={ref}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={[styles.input, inputStyle]}
              {...rest}
            />
          )}
          name={inputnName}
          defaultValue={defaultValue}
        />

        {right && (
          <Box
            paddingLeft={8}
            isTouchable={onRightPress}
            onPress={onRightPress && onRightPress}
            {...rightProps}
          >
            {right}
          </Box>
        )}
      </Box>
      {error && (
        <Typography
          size={12}
          marginTop={5}
          marginLeft={3}
          color={colors?.danger}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
});

export default TextInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: 0,
    fontSize: wp(3.3) > 15 ? 15 : wp(3.3),
  },
});
