import AppLayout from "@/components/AppLayout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <AppLayout>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 70 },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={28} color="black" />
            ),
            tabBarIconStyle: { flex: 1, width: "100%" },
            tabBarLabelStyle: { fontSize: 14 },
          }}
        />
        <Tabs.Screen
          name="note"
          options={{
            title: "Note",
            tabBarIcon: () => (
              <Ionicons name="newspaper-outline" size={28} color="black" />
            ),
            tabBarIconStyle: { flex: 1, width: "100%" },
            tabBarLabelStyle: { fontSize: 14 },
          }}
        />
        <Tabs.Screen
          name="todo"
          options={{
            title: "Todo",
            tabBarIcon: () => (
              <Ionicons name="reader-outline" size={28} color={"black"} />
            ),
            tabBarIconStyle: { flex: 1, width: "100%" },
            tabBarLabelStyle: { fontSize: 14 },
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: "Setting",
            tabBarIcon: () => (
              <Ionicons name="settings-outline" size={28} color="black" />
            ),
            tabBarIconStyle: { flex: 1, width: "100%" },
            tabBarLabelStyle: { fontSize: 14 },
          }}
        />
      </Tabs>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  tabButton: {},
});
