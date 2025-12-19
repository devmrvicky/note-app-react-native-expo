import useTheme from "@/hooks/useTheme";
import React from "react";
import { View } from "react-native";
import AppNavbar from "./AppNavbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <AppNavbar />
      <View style={{ flex: 1, backgroundColor: colors.bg }}>{children}</View>
    </View>
  );
}
