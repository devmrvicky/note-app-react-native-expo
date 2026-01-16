// import NoteEditor from "@/components/QuillEditor";
import NoteEditorHeader from "@/components/NoteEditorHeader";
import QuillEditor from "@/components/QuillEditor";
import useLocalData from "@/hooks/useLocalData";
import useTheme from "@/hooks/useTheme";
import { format } from "date-fns";
import { useLocalSearchParams } from "expo-router";
import { Delta } from "quill";
import React, { useEffect, useState } from "react";
import { Text, TextInput, ToastAndroid, View } from "react-native";
// import Quill from "quill";
// // Or if you only need the core build
// // import Quill from 'quill/core';

// const quill = new Quill("#editor");

const noteEditor = () => {
  const { prevNoteId } = useLocalSearchParams();
  const [delta, setDelta] = useState<Delta | null>(null);
  const {
    saveNote,
    notes,
    setNoteId,
    // setNoteBody,
    setNoteHeading,
    noteHeading,
  } = useLocalData();
  const { colors } = useTheme();

  useEffect(() => {
    const existingNote = notes.find((note) => note.id === prevNoteId);
    if (existingNote) {
      setNoteId(existingNote.id);
      setDelta(existingNote.body);
      setNoteHeading(existingNote.title);
    } else {
      setNoteId(Date.now().toString());
    }
  }, [prevNoteId]);

  return (
    <>
      <View
        // bottomOffset={10}
        style={{ flex: 1, backgroundColor: colors.surface }}
      >
        <View style={{ flex: 1 }}>
          <NoteEditorHeader
            handleSaveNote={() =>
              delta
                ? saveNote(delta)
                : ToastAndroid.show("Note cannot be empty", ToastAndroid.SHORT)
            }
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
            <QuillEditor defaultDelta={delta} onDeltaChange={setDelta} />
            {/* <TextInput
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
                /> */}
            {/* <DOMComponent /> */}
            {/* <QuillEditor value={content} onChange={setContent} /> */}
          </View>
        </View>
        {/* <NoteEditor /> */}
        {/* <NoteEditor value={content} onChange={setContent} /> */}
      </View>
      {/* <KeyboardToolbar /> */}
    </>
  );
};

export default noteEditor;
