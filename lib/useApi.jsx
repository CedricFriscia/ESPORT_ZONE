import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const getArticle = async () => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.get(`${apiUrl}/api/articles`, {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
