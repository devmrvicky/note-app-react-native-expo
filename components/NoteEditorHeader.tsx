import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SaveButton from "./SaveButton";
import BackButton from "./backButton";

const NoteEditorHeader = ({
  handleSaveNote,
  willShowSaveBtn,
}: {
  handleSaveNote: () => void;
  willShowSaveBtn: Boolean;
}) => {
  return (
    <View style={style.header}>
      <BackButton />
      <Text style={{ fontSize: 20, fontWeight: "medium", flex: 1 }}>
        Note editor
      </Text>

      {willShowSaveBtn && <SaveButton saveNote={handleSaveNote} />}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingInline: 10,
  },
});

export default NoteEditorHeader;
