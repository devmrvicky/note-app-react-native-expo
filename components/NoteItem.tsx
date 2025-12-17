import Ionicons from "@expo/vector-icons/Ionicons";
import { format } from "date-fns";
import { useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity } from "react-native";

export default function NoteItem({
  id,
  title,
  body,
  createdAt,
  selectNoteItem,
  selectModeOn,
  selectedItems,
}: {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  selectNoteItem: () => void;
  selectModeOn: Boolean;
  selectedItems: string[];
}) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBlockColor: "#ddd",
        width: "100%",
      }}
      onPress={() =>
        selectModeOn
          ? selectNoteItem()
          : router.navigate({
              pathname: "/viewNote",
              params: {
                noteId: id,
              },
            })
      }
      onLongPress={selectNoteItem}
    >
      <Text style={{ fontSize: 18, fontWeight: "medium" }}>
        {title ? title : body}
      </Text>
      <Text style={{ fontSize: 12, color: "gray", paddingTop: 5 }}>
        {format(createdAt, "dd/MM/yyyy")}
      </Text>

      {selectModeOn && (
        <Pressable
          style={{ position: "absolute", right: 10, top: 10 }}
          onPress={selectNoteItem}
        >
          {selectedItems.includes(id) ? (
            <Ionicons name="checkbox" size={24} color="orange" />
          ) : (
            <Ionicons name="square-outline" size={24} color="orange" />
          )}
        </Pressable>
      )}
    </TouchableOpacity>
  );
}
