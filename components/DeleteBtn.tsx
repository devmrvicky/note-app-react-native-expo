import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import useLocalData from "../hooks/useLocalData";

const DeleteBtn = () => {
  const { deleteData } = useLocalData();
  const { colors } = useTheme();
  return (
    <TouchableHighlight
      underlayColor={"#dddddd80"}
      style={style.actionBtn}
      onPress={deleteData}
    >
      <View>
        <Ionicons name="trash-outline" size={24} color={colors.text} />
        <Text style={{ fontSize: 10, color: colors.text }}>Delete</Text>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  actionBtn: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
});

export default DeleteBtn;
