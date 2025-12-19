import UnderConstruction from "@/components/UnderConstruction";
import useTheme from "@/hooks/useTheme";
import { useEffect } from "react";
import { View } from "react-native";

export default function Home() {
  const { colors } = useTheme();
  useEffect(() => {
    console.log("Home");
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: colors.surface }}>
      <UnderConstruction />
    </View>
  );
}
