import NoteView from "@/components/NoteView";
import useLocalData from "@/hooks/useLocalData";
import useTheme from "@/hooks/useTheme";
import { format } from "date-fns";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Alert, Text, View } from "react-native";

const viewNote = () => {
  const { noteId } = useLocalSearchParams();
  const { notes } = useLocalData();
  const { colors } = useTheme();

  const note = notes.find((note) => note.id === noteId);
  if (!note) {
    Alert.alert("Warning", "Note not found", [{ text: "OK" }]);
    return;
  }
  console.log(note);

  const router = useRouter();

  const handleNavigateToNoteEditPage = () => {
    router.navigate({
      pathname: "/noteEditor",
      params: {
        prevNoteId: note.id,
      },
    });
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: colors.surface }}>
      <View>
        <Text style={{ color: colors.textMuted }}>
          {format(new Date(), "dd/mm/yyyy")}| Default
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "medium",
            paddingVertical: 15,
            color: colors.text,
          }}
          onPress={handleNavigateToNoteEditPage}
          numberOfLines={2}
        >
          {note.title}
        </Text>
      </View>

      <NoteView delta={note.body} />
    </View>
  );
};

export default viewNote;
