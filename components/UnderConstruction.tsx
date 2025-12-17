import { Image, View } from "react-native";
import { images } from "../assets/images";

export default function UnderConstruction() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={images.underConstructionPng}
        style={{ width: "90%", height: "90%", padding: 50 }}
      />
      {/* <Text>Under Construction</Text> */}
    </View>
  );
}
