import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return await getAllItems();
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    console.log({ data });
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
  }
};

export const getAllItems = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const data = await AsyncStorage.multiGet(keys);
    return data
      ? data.map((item) => typeof item[1] === "string" && JSON.parse(item[1]))
      : [];
  } catch (error) {
    console.log(error);
  }
};

export const deleteItems = async (keys: string[]) => {
  try {
    await AsyncStorage.multiRemove(keys, (error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
