import useTheme from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SaveButton from "./SaveButton";
import BackButton from "./backButton";

const NoteEditorHeader = ({
  handleSaveNote,
}: // willShowSaveBtn = true,
{
  handleSaveNote: () => void;
  // willShowSaveBtn?: Boolean;
}) => {
  const { colors } = useTheme();
  // const {noteBody} =

  const willShowSaveBtn = true;

  return (
    <View style={{ ...style.header, backgroundColor: colors.bg }}>
      <BackButton />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "medium",
          flex: 1,
          color: colors.text,
        }}
      >
        Note editor
      </Text>

      {willShowSaveBtn && <SaveButton saveNote={handleSaveNote} />}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingInline: 10,
  },
});

export default NoteEditorHeader;
