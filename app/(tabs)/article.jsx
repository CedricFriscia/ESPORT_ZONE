import React, { useEffect, useState } from "react";
import CustomTag from "../../components/CustomTag";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getArticleById } from "../../lib/useApi";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";

const Article = () => {
  const [articleData, setArticleData] = useState(null);

  const { id } = useLocalSearchParams();

  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const article = await getArticleById(id);
        console.log(article);
        setArticleData(article.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataById();
  }, [id]);

  console.log(articleData);

  if (!articleData) {
    return (
      <SafeAreaView className="bg-primary w-screen h-full p-4">
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView>
        <View className="border-b border-white pb-4 mb-2">
          <Text className="text-indigo-400 text-4xl font-bold text-center">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <View className="flex flex-row justify-between mb-12">
          <View className="m-2">
            <Text className="text-lg text-secondary">Cedric Friscia</Text>
            <Text className="text-white">14 novembre 1998</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <CustomTag name={"Rocket League"} />
          </View>
        </View>
        <View className="flex items-center">
          <Text className="text-white text-4xl font-bold font-plight text-center w-11/12 mb-4">
            {articleData.name}
          </Text>
          <Text className="text-white text-xl font-light w-11/12 leading-7 tracking-wide">
            <RenderHtml
              contentWidth={width}
              source={{ html: articleData.content }}
              baseStyle={{
                color: "white",
                fontSize: 18,
                lineHeight: 18,
                paddingTop: 10,
              }}
            />
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Article;
