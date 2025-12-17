import OpenEditorButton from "@/components/OpenEditorButton";
import RenderItems from "@/components/RenderItems";
import SelectItemsActionBtns from "@/components/SelectItemsActionBtns";
import TodoCategories from "@/components/TodoCategories";
import TodoEditor from "@/components/TodoEditor";
import TodoItemActionBtns from "@/components/TodoItemActionBtns";
import useLocalData from "@/hooks/useLocalData";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const todo = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {
    todos,
    activeCategory,
    setActiveCategory,
    categories,
    selectedItems,
    todoSelectModeOn,
    setTodoSelectModeOn,
    setSelectedItems,
  } = useLocalData();

  const handleSelectTodoItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
      return;
    }
    // Alert.alert("Note selected", id, [{ text: "OK" }]);
    setSelectedItems((prev) => [...prev, id]);
    setTodoSelectModeOn(true);
  };

  const handleSelectModeOff = () => {
    setTodoSelectModeOn(false);
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
            <Text style={{ fontSize: 40 }}>To-dos</Text>
            <View style={{ flexDirection: "row" }}>
              {todos.length ? (
                <Text>{todos.length} to-dos</Text>
              ) : (
                <Text>no to-do</Text>
              )}

              {todoSelectModeOn && selectedItems.length > 0 && (
                <Text> | {selectedItems.length} to-dos selected</Text>
              )}
            </View>
          </View>
          {/* selecte action button */}
          {todoSelectModeOn && (
            <SelectItemsActionBtns
              handleSelectModeOff={handleSelectModeOff}
              selectAllItems={() =>
                setSelectedItems(todos.map((item) => item.id))
              }
            />
          )}
        </View>
        <TodoCategories
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <RenderItems
          data={todos}
          defaultString="You haven't created any to yet. To create todo create pluse button and create todo"
          handleSelectItem={handleSelectTodoItem}
          selecteModeOn={todoSelectModeOn}
          selectedItems={selectedItems}
        />
      </View>
      <TodoEditor
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {todoSelectModeOn && selectedItems.length > 0 ? (
        <TodoItemActionBtns />
      ) : (
        <OpenEditorButton openEditor={() => setModalVisible(true)} />
      )}
    </View>
  );
};

export default todo;

const styles = StyleSheet.create({});
