import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "./Logo";

export default function AppNavbar() {
  return (
    <View style={style.appNav}>
      {/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Notes</Text> */}
      <Logo />

      <View style={style.rightSide}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableHighlight style={style.user} onPress={() => {}}>
          <Ionicons name="person-outline" size={24} color={"black"} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  appNav: {
    backgroundColor: "white",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingInline: 30,
    justifyContent: "space-between",
  },
  rightSide: {
    flexDirection: "row",
    gap: 20,
    alignContent: "center",
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
