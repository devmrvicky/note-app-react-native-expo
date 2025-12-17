import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableHighlight } from "react-native";

export default function SaveButton({ saveNote }: { saveNote: () => void }) {
  return (
    <TouchableHighlight
      underlayColor={"#ddd"}
      onPress={saveNote}
      style={style.button}
    >
      <Ionicons name="checkmark" size={32} color="black" />
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
