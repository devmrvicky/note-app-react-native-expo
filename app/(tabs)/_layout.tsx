import AppLayout from "@/components/AppLayout";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  const { colors, isDarkMode } = useTheme();
  return (
    <AppLayout>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarStyle: { height: 70, backgroundColor: colors.bg },
          tabBarIconStyle: {
            flex: 1,
            width: "100%",
          },
          tabBarLabelStyle: { fontSize: 14 },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="note"
          options={{
            title: "Note",
            tabBarIcon: ({ color }) => (
              <Ionicons name="newspaper-outline" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="todo"
          options={{
            title: "Todo",
            tabBarIcon: ({ color }) => (
              <Ionicons name="reader-outline" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: "Setting",
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  tabButton: {},
});
