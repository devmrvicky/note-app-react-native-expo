import NoteItem from "@/components/NoteItem";
import NoteItemActionBtns from "@/components/NoteItemActionBtns";
import OpenEditorButton from "@/components/OpenEditorButton";
import useLocalData from "@/hooks/useLocalData";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const note = () => {
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

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 10, gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40 }}>Notes</Text>
            <View style={{ flexDirection: "row" }}>
              {notes.length ? (
                <Text>{notes.length} notes</Text>
              ) : (
                <Text>no notes</Text>
              )}

              {selectedItems.length > 0 && (
                <Text> | {selectedItems.length} notes selected</Text>
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
                <Ionicons name="close-outline" size={30} color="black" />
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
            <Text style={{ color: "gray" }}>
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
