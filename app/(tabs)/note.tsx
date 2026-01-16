import NoteItem from "@/components/NoteItem";
import NoteItemActionBtns from "@/components/NoteItemActionBtns";
import OpenEditorButton from "@/components/OpenEditorButton";
// import useBackHandler from "@/hooks/useBackHandler";
import useLocalData from "@/hooks/useLocalData";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import useBackHandler from "../../hooks/useBackHandler";

const note = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const {
    notes,
    selectedItems,
    setSelectedItems,
    selectModeOn,
    setSelectModeOn,
  } = useLocalData();

  const handleSelectNoteItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
      return;
    }
    // Alert.alert("Note selected", id, [{ text: "OK" }]);
    setSelectedItems((prev) => [...prev, id]);
    setSelectModeOn(true);
  };

  const handleSelectModeOff = () => {
    setSelectModeOn(false);
    setSelectedItems([]);
  };

  useBackHandler({
    optionsVisible: selectModeOn,
    setOptionsVisible: setSelectModeOn,
    setSelectedItemIds: setSelectedItems,
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={{ flex: 1, padding: 10, gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, color: colors.text }}>Notes</Text>
            <View style={{ flexDirection: "row" }}>
              {notes.length ? (
                <Text style={{ color: colors.textMuted }}>
                  {notes.length} notes
                </Text>
              ) : (
                <Text style={{ color: colors.textMuted }}>no notes</Text>
              )}

              {selectedItems.length > 0 && (
                <Text style={{ color: colors.textMuted }}>
                  {" "}
                  | {selectedItems.length} notes selected
                </Text>
              )}
            </View>
          </View>
          {selectModeOn && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <TouchableOpacity onPress={() => handleSelectModeOff()}>
                <Ionicons name="close-outline" size={30} color={colors.text} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedItems(notes.map((item) => item.id))}
                style={{ paddingRight: 10 }}
              >
                <Ionicons name="checkbox" size={24} color="orange" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteItem
              {...item}
              selectNoteItem={() => handleSelectNoteItem(item.id)}
              selectModeOn={selectModeOn}
              selectedItems={selectedItems}
            />
          )}
          ListEmptyComponent={
            <Text style={{ color: colors.textMuted }}>
              You have not created any note yet. to create note click on plus
              button
            </Text>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
      {selectModeOn && selectedItems.length > 0 ? (
        <NoteItemActionBtns />
      ) : (
        <OpenEditorButton openEditor={() => router.navigate("/noteEditor")} />
      )}
    </View>
  );
};

export default note;
