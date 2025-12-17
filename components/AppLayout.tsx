import React from "react";
import { View } from "react-native";
import AppNavbar from "./AppNavbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <AppNavbar />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}
