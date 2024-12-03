import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardTypeOptions,
} from "react-native";

interface OtpInputProps {
  length: number;
  onCodeFilled: (code: string) => void;
  containerStyle?: object;
  inputStyle?: object;
  keyboardType?: KeyboardTypeOptions;
}

const CustomOtpInput: React.FC<OtpInputProps> = ({
  length = 4,
  onCodeFilled,
  containerStyle,
  inputStyle,
  keyboardType = "numeric",
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(""));

  const handleInputChange = (text: string, index: number) => {
    if (text.length > 1) return; // Allow only single character
    const updatedCode = [...code];
    updatedCode[index] = text;

    // Move to the next input field automatically
    if (text && index < length - 1) {
      const nextInput = `input-${index + 1}`;
      (refInputs[nextInput] as any)?.focus();
    }

    setCode(updatedCode);

    // Trigger onCodeFilled callback when all fields are filled
    if (updatedCode.every((char) => char !== "")) {
      onCodeFilled(updatedCode.join(""));
    }
  };

  const refInputs: { [key: string]: TextInput | null } = {};
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {code.map((_, index) => (
        <TextInput
          key={`input-${index}`}
          ref={(input) => (refInputs[`input-${index}`] = input)}
          style={[
            styles.input,
            inputStyle,
            focused && {
              borderWidth: 1,
              borderColor: Colors.primary,
              shadowOffset: { width: 4, height: Spacing },
              shadowColor: Colors.primary,
              shadowOpacity: 0.2,
              shadowRadius: Spacing,
            },
          ]}
          maxLength={1}
          keyboardType={keyboardType}
          onChangeText={(text) => handleInputChange(text, index)}
          value={code[index]}
          autoFocus={index === 0} // Autofocus the first input
          cursorColor={Colors.primary}
          onFocus={() => setFocused(true)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginVertical: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default CustomOtpInput;