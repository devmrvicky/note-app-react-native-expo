import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const setting = () => {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={{ flex: 1, padding: 10, gap: 30 }}>
        <Text style={{ fontSize: 40, color: colors.text }}>Setting</Text>

        <View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 60,
              backgroundColor: colors.bg,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons name="moon-outline" size={30} color={colors.text} />
            <Text style={{ fontSize: 20, flex: 1, color: colors.text }}>
              Dark Theme
            </Text>
            <Pressable onPress={toggleDarkMode}>
              {isDarkMode ? (
                <Ionicons name="toggle" size={40} color={colors.text} />
              ) : (
                <Ionicons
                  name="toggle"
                  size={40}
                  color={colors.text}
                  style={{ transform: [{ rotate: "180deg" }] }}
                />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default setting;
