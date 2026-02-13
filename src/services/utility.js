import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("Error setting local storage:", error);
    return false;
  }
};

export const getLocalStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error("Error getting local storage:", error);
    return null;
  }
};

export const removeLocalStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("Error removing local storage:", error);
    return false;
  }
};