import { DataProvider } from "@/context/DataContextProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Stack } from "expo-router";
import "react-native-get-random-values";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <DataProvider>
          <ThemeProvider>
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
                  // title: "",
                  headerShown: false,
                  animation: "fade",
                }}
              />
              <Stack.Screen
                name="auth/signup"
                options={{
                  headerShown: false,
                  animation: "slide_from_right",
                }}
              />
            </Stack>

            <Toast />
          </ThemeProvider>
        </DataProvider>
      </SafeAreaView>
    </KeyboardProvider>
  );
}
