import useLocalData from "@/hooks/useLocalData";
import { format } from "date-fns";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Alert, Text, View } from "react-native";

const viewNote = () => {
  const { noteId } = useLocalSearchParams();
  const { notes } = useLocalData();
  const note = notes.find((note) => note.id === noteId);
  if (!note) {
    Alert.alert("Warning", "Note not found", [{ text: "OK" }]);
    return;
  }

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
    <View style={{ flex: 1, padding: 10 }}>
      <View>
        <Text>{format(new Date(), "dd/mm/yyyy")}| Default</Text>
        <Text
          style={{ fontSize: 24, fontWeight: "medium", paddingVertical: 15 }}
          onPress={handleNavigateToNoteEditPage}
        >
          {note.title}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          flex: 1,
          alignItems: "flex-start",
        }}
        onPress={handleNavigateToNoteEditPage}
      >
        {note.body}
      </Text>
    </View>
  );
};

export default viewNote;
