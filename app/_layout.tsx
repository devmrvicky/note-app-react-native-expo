import { DataProvider } from "@/context/DataContextProvider";
import { Stack } from "expo-router";
import "react-native-get-random-values";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DataProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="noteEditor"
            options={{
              // title: "Note editor",
              headerShown: false,
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="viewNote"
            options={{
              title: "",
              headerShown: true,
              animation: "fade",
            }}
          />
        </Stack>
        <Toast />
      </DataProvider>
    </SafeAreaView>
  );
}
