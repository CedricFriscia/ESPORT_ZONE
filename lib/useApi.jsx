import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Sharing from "expo-sharing";

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

export const getArticleByName = async (search) => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.get(`${apiUrl}/api/search/articles`, {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
      params: {
        search: search,
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

export const getArticleById = async (id) => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.get(`${apiUrl}/api/article`, {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
      params: {
        id: id,
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

export const getAllCategories = async () => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.get(`${apiUrl}/api/categories`, {
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

export const getBookmarks = async () => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.get(`${apiUrl}/api/articles/bookmarks`, {
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

export const getUserProfile = async () => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.get(`${apiUrl}/api/user/profile`, {
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

export const bookmarkArticle = async (id) => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.post(
      `${apiUrl}/api/articles/bookmark`,
      {
        articleId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${storageToken}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error bookmarking article:", error.message);
    throw new Error(error.message);
  }
};

export const unBookmarkArticle = async (id) => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.post(
      `${apiUrl}/api/articles/unbookmark`,
      {
        articleId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${storageToken}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error bookmarking article:", error.message);
    throw new Error(error.message);
  }
};

export const shareArticle = async (id) => {
  try {
    const isSharingAvailable = await Sharing.isAvailableAsync();

    if (isSharingAvailable) {
      const result = await Sharing.shareAsync(`${apiUrl}/article/shared`);

      if (result.action === Sharing.sharedAction) {
        console.log("Partagé avec succès !");
      } else if (result.action === Sharing.dismissedAction) {
        console.log("Partage annulé.");
      }
    } else {
      console.log("Le partage n'est pas disponible sur cet appareil.");
    }
  } catch (error) {
    console.error("Erreur lors du partage", error);
  }
};

export const isBookmarked = async (id) => {
  try {
    const storageToken = await AsyncStorage.getItem("access_token");

    const response = await axios.get(`${apiUrl}/api/articles/bookmarked`, {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
      params: {
        articleId: id,
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
