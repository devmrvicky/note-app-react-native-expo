import useLocalData from "@/hooks/useLocalData";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

interface TodoItemProp {
  id: string;
  todo: string;
  isCompleted: boolean;
  handleSelectItem: () => void;
  selectModeOn: boolean;
  selectedItems: string[];
}

export default function TodoItem({
  id,
  todo,
  isCompleted,
  handleSelectItem,
  selectModeOn,
  selectedItems,
}: TodoItemProp) {
  const { toggleTodo } = useLocalData();
  const { colors } = useTheme();
  return (
    <Pressable
      style={{ ...style.todoContainer, backgroundColor: colors.bg }}
      onLongPress={() => handleSelectItem()}
      onPress={() => {
        if (selectModeOn) {
          handleSelectItem();
        }
      }}
    >
      <TouchableOpacity onPress={() => toggleTodo({ id })}>
        <Ionicons
          name={isCompleted ? "checkmark-circle" : "ellipse-outline"}
          size={26}
          color={isCompleted ? "orange" : "gray"}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, flex: 1, color: colors.text }}>{todo}</Text>

      {selectModeOn ? (
        <Pressable
          // style={{ position: "absolute", right: 10, top: 10 }}
          onPress={handleSelectItem}
        >
          {selectedItems.includes(id) ? (
            <Ionicons name="checkbox" size={24} color="orange" />
          ) : (
            <Ionicons name="square-outline" size={24} color="orange" />
          )}
        </Pressable>
      ) : (
        <TouchableHighlight>
          <Ionicons name="reorder-two-outline" size={26} color={"#ddd"} />
        </TouchableHighlight>
      )}
    </Pressable>
  );
}

const style = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    height: 60,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
