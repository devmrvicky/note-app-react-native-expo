import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";

interface SelectItemsActionBtnsProps {
  handleSelectModeOff: () => void;
  selectAllItems: () => void;
}

export default function SelectItemsActionBtns({
  handleSelectModeOff,
  selectAllItems,
}: SelectItemsActionBtnsProps) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
      }}
    >
      <TouchableOpacity onPress={() => handleSelectModeOff()}>
        <Ionicons name="close-outline" size={30} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => selectAllItems()}
        style={{ paddingRight: 10 }}
      >
        <Ionicons name="checkbox" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );
}
