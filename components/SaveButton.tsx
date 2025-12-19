import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableHighlight } from "react-native";

export default function SaveButton({ saveNote }: { saveNote: () => void }) {
  const { colors } = useTheme();
  return (
    <TouchableHighlight
      underlayColor={colors.surface}
      onPress={saveNote}
      style={style.button}
    >
      <Ionicons name="checkmark" size={32} color={colors.text} />
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    width: 60,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
