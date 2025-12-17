import { ITodo } from "@/type/data";
import { FlatList, Text } from "react-native";
import TodoItem from "./TodoItem";

interface RenderItemsProp {
  data: ITodo[];
  defaultString: string;
  handleSelectItem: (id: string) => void;
  selecteModeOn: boolean;
  selectedItems: string[];
}

export default function RenderItems({
  data,
  defaultString,
  handleSelectItem,
  selecteModeOn,
  selectedItems,
}: RenderItemsProp) {
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{
        gap: 10,
      }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem
          {...item}
          handleSelectItem={() => handleSelectItem(item.id)}
          selectModeOn={selecteModeOn}
          selectedItems={selectedItems}
        />
      )}
      ListEmptyComponent={
        <Text style={{ color: "gray" }}>{defaultString}</Text>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
