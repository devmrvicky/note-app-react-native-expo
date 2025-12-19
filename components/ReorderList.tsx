// import { ITodo } from "@/type/data";
// import React from "react";
// import { StyleSheet } from "react-native";
// import DraggableFlatList from "react-native-draggable-flatlist";
// import TodoItem from "./TodoItem";

// interface RenderItemsProp {
//   data: ITodo[];
//   defaultString: string;
//   handleSelectItem: (id: string) => void;
//   selecteModeOn: boolean;
//   selectedItems: string[];
// }

// export default function ReorderList({
//   data,
//   defaultString,
//   handleSelectItem,
//   selecteModeOn,
//   selectedItems,
// }: RenderItemsProp) {
//   return (
//     <DraggableFlatList
//       data={data}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <TodoItem
//           {...item}
//           handleSelectItem={() => handleSelectItem(item.id)}
//           selectModeOn={selecteModeOn}
//           selectedItems={selectedItems}
//         />
//       )}
//       onDragEnd={({ data }) => {
//         console.log(data);
//       }}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 16,
//     marginVertical: 6,
//     marginHorizontal: 12,
//     borderRadius: 12,
//     elevation: 2,
//   },
//   text: {
//     fontSize: 16,
//   },
// });
