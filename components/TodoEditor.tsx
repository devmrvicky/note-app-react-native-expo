import useLocalData from "@/hooks/useLocalData";
import useTheme from "@/hooks/useTheme";
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
  const { saveTodo } = useLocalData();
  const { colors } = useTheme();

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
        <View style={{ ...styles.modalView, backgroundColor: colors.surface }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 16, color: "orange" }}>Cancel</Text>
            </TouchableOpacity>
            <Text
              style={{ fontSize: 18, fontWeight: "medium", color: colors.text }}
            >
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
            style={{
              ...styles.textInput,
              backgroundColor: colors.bg,
              color: colors.text,
              borderColor: colors.border,
            }}
            placeholder="New To-Do"
            placeholderTextColor={colors.textMuted}
            autoFocus
            value={todo}
            onChangeText={setTodo}
            // onKeyPress={(e) => {
            //   if (e.nativeEvent.key === "Enter") {
            //     handleSaveTodo();
            //   }
            // }}
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
    width: "100%",
  },
  modalView: {
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
