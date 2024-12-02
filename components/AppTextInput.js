import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontSize: 14,
          padding: Spacing * 2,
          backgroundColor: Colors.light.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 1,
          borderColor: Colors.light.tint,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.light.tint,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
        {
          shadowColor: Colors.light.text,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 6,
          elevation: 6,
          opacity: 0.9,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});