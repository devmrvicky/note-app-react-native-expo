import { images } from "@/assets/images";
import { Image, Text, View } from "react-native";

export default function Logo() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Image source={images.logo} style={{ width: 30, height: 30 }} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Notely</Text>
    </View>
  );
}
