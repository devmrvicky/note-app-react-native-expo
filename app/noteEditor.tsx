import NoteEditorHeader from "@/components/NoteEditorHeader";
import useLocalData from "@/hooks/useLocalData";
import { format } from "date-fns";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

const noteEditor = () => {
  const { prevNoteId } = useLocalSearchParams();
  const [noteBody, setNoteBody] = useState<string>("");
  const [noteHeading, setNoteHeading] = useState<string>("");
  const [noteId, setNoteId] = useState<string>("");

  const { saveNote, notes } = useLocalData();
  useEffect(() => {
    const existingNote = notes.find((note) => note.id === prevNoteId);
    if (existingNote) {
      setNoteId(existingNote.id);
      setNoteBody(existingNote.body);
      setNoteHeading(existingNote.title);
    } else {
      setNoteId(Date.now().toString());
    }
  }, [prevNoteId]);

  return (
    <View style={{ flex: 1 }}>
      <NoteEditorHeader
        handleSaveNote={() => saveNote({ noteHeading, noteBody, noteId })}
        willShowSaveBtn={Boolean(noteBody || noteHeading)}
      />
      <View style={{ flex: 1, padding: 10 }}>
        <View>
          <Text>{format(new Date(), "dd/mm/yyyy")}| Default</Text>
          <TextInput
            value={noteHeading}
            placeholder="Heading"
            style={{ fontSize: 20, fontWeight: "medium" }}
            onChangeText={setNoteHeading}
          />
        </View>
        <TextInput
          value={noteBody}
          placeholder="note..."
          multiline={true}
          textAlignVertical="top"
          style={{
            fontSize: 20,
            flex: 1,
            alignItems: "flex-start",
          }}
          onChangeText={setNoteBody}
          autoFocus
        />
      </View>
    </View>
  );
};

export default noteEditor;
