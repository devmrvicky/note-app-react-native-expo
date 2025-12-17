import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function BackButton() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={30} color={"black"} />
    </Pressable>
  );
}
