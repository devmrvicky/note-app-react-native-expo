import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import { BackHandler } from "react-native";

interface useBackHandlerProps {
  optionsVisible: boolean;
  setOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItemIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const useBackHandler = ({
  optionsVisible,
  setOptionsVisible,
  setSelectedItemIds,
}: useBackHandlerProps) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        console.log("back pressed in expense card");
        if (optionsVisible) {
          setOptionsVisible(false);
          setSelectedItemIds([]);
          return true; // prevent default back
        }
        return false; // allow navigation
      };

      const sub = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => {
        sub.remove();
      };
    }, [optionsVisible])
  );
};

export default useBackHandler;
