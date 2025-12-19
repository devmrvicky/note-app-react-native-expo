import useTheme from "@/hooks/useTheme";
import React from "react";
import { FlatList, Text, TouchableHighlight } from "react-native";

interface TodoCategoriesProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function TodoCategories({
  categories,
  activeCategory,
  setActiveCategory,
}: TodoCategoriesProps) {
  const { colors } = useTheme();
  return (
    <FlatList
      style={{ flexGrow: 0 }}
      contentContainerStyle={{
        gap: 10,
      }}
      data={categories}
      renderItem={({ item }) => (
        <TouchableHighlight
          style={{
            borderColor: colors.border,
            backgroundColor: `${
              item === activeCategory ? colors.bg : colors.surface
            }`,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onPress={() => setActiveCategory(item)}
          underlayColor={"orange"}
        >
          <Text style={{ color: colors.text }}>{item}</Text>
        </TouchableHighlight>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
