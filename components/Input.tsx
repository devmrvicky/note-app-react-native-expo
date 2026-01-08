import { ColorScheme } from "@/context/ThemeProvider";
import React from "react";
import {
  InputModeOptions,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface InputProps {
  colors: ColorScheme;
  Icon?: React.ReactNode;
  inputType?: InputModeOptions | undefined;
  placeholder: string;
  keybordType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
}

const Input = ({
  colors,
  Icon,
  inputType,
  placeholder,
  keybordType,
  secureTextEntry,
}: InputProps) => {
  return (
    <View
      style={{
        ...styles.inputBox,
        backgroundColor: colors.bg,
        borderColor: colors.border,
      }}
    >
      {Icon}
      <TextInput
        placeholder={placeholder}
        style={{ ...styles.input, color: colors.text }}
        keyboardType={keybordType}
        placeholderTextColor={colors.textMuted}
        inputMode={inputType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default Input;
