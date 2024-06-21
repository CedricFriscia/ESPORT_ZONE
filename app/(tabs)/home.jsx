import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import HomeArticle from "../../components/HomeArticle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getArticle } from "../../lib/useApi";

const Home = () => {
  const [token, setToken] = useState(null);
  const [forYou, setForYou] = useState(true);
  const [subscribe, setSubscribe] = useState(false);
  const [articles, setArtciles] = useState("");
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  // useEffect(() => {
  //   const getToken = async () => {
  //     const storedToken = await AsyncStorage.getItem("access_token");
  //     setToken(storedToken);
  //   };

  //   getToken();
  // }, []);

  useEffect(() => {
    // const getArticle = async () => {
    //   try {
    //     const token = await AsyncStorage.getItem("access_token");
    //     console.log(token);
    //     if (!token) throw new Error("Token not found");

    //     const response = await axios.get(`${apiUrl}/articles`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     if (response.status === 200) {
    //       console.log("Je suis la response", response.data);
    //     } else {
    //       console.log(response.status);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // if (token) {
    //   getArticle();
    // }
    const fetchData = async () => {
      try {
        const articles = await getArticle();
        setArtciles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const forYouPress = () => {
    setSubscribe(false);
    setForYou(true);
  };

  const subscribePress = () => {
    setSubscribe(true);
    setForYou(false);
  };

  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex items-center border-b border-white">
          <Text className="text-4xl text-white font-bold text-center mb-4">
            <Text className="text-indigo-400">
              <Text className="text-secondary">E</Text>Z
            </Text>
          </Text>

          <View className="flex flex-row mb-2 w-screen justify-around">
            <TouchableOpacity
              onPress={forYouPress}
              accessibilityLabel="Learn more about this purple button"
              className={forYou ? "border-b-4  border-secondary" : ""}
            >
              <Text
                className={
                  forYou ? "text-secondary text-lg" : "text-white text-lg"
                }
              >
                Pour toi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={subscribePress}
              accessibilityLabel="Learn more about this purple button"
              className={subscribe ? "border-b-4 border-secondary" : ""}
            >
              <Text
                className={
                  subscribe ? "text-secondary text-lg" : "text-white text-lg"
                }
              >
                Abonnements
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <HomeArticle />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
