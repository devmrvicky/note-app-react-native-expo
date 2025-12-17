import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import useLocalData from "../hooks/useLocalData"

const DeleteBtn = () => {
  const {deleteData} = useLocalData()
  return (
    <TouchableHighlight
        underlayColor={"#dddddd80"}
        style={style.actionBtn}
        onPress={deleteData}
      >
        <View>
          <Ionicons name="trash-outline" size={24} color="black" />
          <Text style={{ fontSize: 10 }}>Delete</Text>
        </View>
      </TouchableHighlight>
  )
}

const style = StyleSheet.create({
  actionBtn: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
});

export default DeleteBtn