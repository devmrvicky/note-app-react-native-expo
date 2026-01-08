import NoteEditorHeader from "@/components/NoteEditorHeader";
import useLocalData from "@/hooks/useLocalData";
import useTheme from "@/hooks/useTheme";
import { format } from "date-fns";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const noteEditor = () => {
  const { prevNoteId } = useLocalSearchParams();
  const [noteBody, setNoteBody] = useState<string>("");
  const [noteHeading, setNoteHeading] = useState<string>("");
  const [noteId, setNoteId] = useState<string>("");

  const { saveNote, notes } = useLocalData();
  const { colors } = useTheme();

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
    <>
      <KeyboardAwareScrollView
        bottomOffset={10}
        style={{ flex: 1, backgroundColor: colors.surface }}
      >
        <View>
          <NoteEditorHeader
            handleSaveNote={() => saveNote({ noteHeading, noteBody, noteId })}
            willShowSaveBtn={Boolean(noteBody || noteHeading)}
          />
          <View style={{ flex: 1, padding: 10 }}>
            <View>
              <Text style={{ color: colors.textMuted }}>
                {format(new Date(), "dd/mm/yyyy")}| Default
              </Text>
              <TextInput
                value={noteHeading}
                placeholder="Heading"
                style={{
                  fontSize: 20,
                  fontWeight: "medium",
                  color: colors.text,
                }}
                onChangeText={setNoteHeading}
                placeholderTextColor={colors.textMuted}
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
                color: colors.text,
              }}
              placeholderTextColor={colors.textMuted}
              onChangeText={setNoteBody}
              autoFocus
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* <KeyboardToolbar /> */}
    </>
  );
};

export default noteEditor;
