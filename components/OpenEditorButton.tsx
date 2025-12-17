import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function OpenEditorButton({
  openEditor,
}: {
  openEditor: () => void;
}) {
  return (
    <TouchableOpacity style={style.button} onPress={openEditor}>
      <Ionicons name="add" size={40} color="white" />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
