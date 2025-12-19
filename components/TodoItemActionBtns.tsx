import useTheme from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, View } from "react-native";
import DeleteBtn from "./DeleteBtn";

const TodoItemActionBtns = () => {
  const { colors } = useTheme();
  return (
    <View style={{ ...style.actionBtnsContainer, backgroundColor: colors.bg }}>
      <DeleteBtn />
    </View>
  );
};

const style = StyleSheet.create({
  actionBtnsContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    gap: 5,
    paddingInline: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TodoItemActionBtns;
