import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import DeleteBtn from "./DeleteBtn";

const NoteItemActionBtns = () => {
  const { colors } = useTheme();
  return (
    <View style={{ ...style.actionBtnsContainer, backgroundColor: colors.bg }}>
      <TouchableHighlight
        underlayColor={"#dddddd80"}
        style={style.actionBtn}
        disabled
      >
        <View>
          <Ionicons name="enter-outline" size={24} color={colors.text} />
          <Text style={{ fontSize: 10, color: colors.text }}>Move</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor={"#dddddd80"} style={style.actionBtn}>
        <View>
          <Ionicons name="lock-open-outline" size={24} color={colors.text} />
          <Text style={{ fontSize: 10, color: colors.text }}>Lock</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor={"#dddddd80"} style={style.actionBtn}>
        <View>
          <Ionicons name="share-social-outline" size={24} color={colors.text} />
          <Text style={{ fontSize: 10, color: colors.text }}>Share</Text>
        </View>
      </TouchableHighlight>
      <DeleteBtn />
    </View>
  );
};

const style = StyleSheet.create({
  actionBtnsContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 5,
    paddingInline: 5,
  },
  actionBtn: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
});

export default NoteItemActionBtns;
