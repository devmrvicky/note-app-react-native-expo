import useLocalData from "@/hooks/useLocalData";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface TodoEditorProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  prevTodoId?: string;
  prevTodo?: string;
}

export default function TodoEditor({
  modalVisible,
  setModalVisible,
  prevTodo,
  prevTodoId,
}: TodoEditorProps) {
  const [todo, setTodo] = useState<string>("");
  // const [todoId, setTodoId] = useState<string>("");
  const { saveTodo } = useLocalData();

  const handleSaveTodo = () => {
    if (!todo) return;
    saveTodo({ id: Date.now().toString(), todo });
    setTodo("");
  };

  const handleUpdateTodo = () => {
    if (!todo || !prevTodoId) return;
    saveTodo({ id: prevTodoId.toString(), todo });
  };

  useEffect(() => {
    if (!prevTodo) return;
    setTodo(prevTodo);
  }, []);

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      backdropColor={"#0000002d"}
      transparent={false}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 16, color: "orange" }}>Cancel</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "medium" }}>
              New To-Do
            </Text>
            {prevTodo && prevTodoId ? (
              <TouchableOpacity onPress={() => handleUpdateTodo()}>
                <Text style={{ fontSize: 16, color: "orange" }}>Update</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleSaveTodo()}>
                <Text style={{ fontSize: 16, color: "orange" }}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="New To-Do"
            autoFocus
            value={todo}
            onChangeText={setTodo}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    width: "100%",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  textInput: {
    width: "100%",
    height: 50,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
  },
});
