import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { format } from "date-fns";
import { useRouter } from "expo-router";
import { Delta } from "quill";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import NoteView from "./NoteView";

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
  body: Delta;
  createdAt: Date;
  selectNoteItem: () => void;
  selectModeOn: Boolean;
  selectedItems: string[];
}) {
  console.log({ body });
  const router = useRouter();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBlockColor: colors.bg,
        height: 70,
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
      <View style={{ flex: 1, paddingRight: selectModeOn ? 20 : 0 }}>
        {title ? (
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              fontWeight: "medium",
              color: colors.text,
              // borderWidth: 1,
            }}
          >
            {title}
          </Text>
        ) : (
          <NoteView delta={body} />
        )}
        <Text style={{ fontSize: 12, color: colors.textMuted, paddingTop: 5 }}>
          {format(createdAt, "dd/MM/yyyy")}
        </Text>
      </View>
      {selectModeOn && (
        <Pressable
          style={{ position: "absolute", top: 10, right: 10 }}
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
