import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "./Logo";

export default function AppNavbar() {
  const { colors } = useTheme();
  return (
    <View style={{ ...style.appNav, backgroundColor: colors.bg }}>
      {/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Notes</Text> */}
      <Logo />

      <View style={style.rightSide}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={30} color={colors.text} />
        </TouchableOpacity>
        <TouchableHighlight
          style={{ ...style.user, borderColor: colors.border }}
          onPress={() => {}}
        >
          <Ionicons name="person-outline" size={24} color={colors.text} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  appNav: {
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
