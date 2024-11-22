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
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import { useWindowDimensions } from "react-native";

const Article = () => {
  const [articleData, setArticleData] = useState(null);
  const { id } = useLocalSearchParams();
  const { width } = useWindowDimensions();

  // Configuration du style HTML
  const tagsStyles = {
    body: {
      color: "white",
      fontSize: 18,
      lineHeight: 28, // Augmenté pour une meilleure lisibilité
      paddingTop: 10,
    },
    p: {
      marginBottom: 15, // Ajoute de l'espace entre les paragraphes
    },
  };

  // Configuration des options de rendu
  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true,
    },
  };

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const article = await getArticleById(id);
        setArticleData(article.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataById();
  }, [id]);

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
            <Text className="text-white">
              {new Date(articleData.created_at).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <CustomTag name={"Rocket League"} />
          </View>
        </View>
        <View className="flex items-center">
          <Text className="text-white text-4xl font-bold font-plight text-center w-11/12 mb-4">
            {articleData.name}
          </Text>
          <View className="w-11/12">
            <RenderHtml
              contentWidth={width}
              source={{ html: articleData.content }}
              tagsStyles={tagsStyles}
              renderersProps={renderersProps}
              systemFonts={defaultSystemFonts}
              defaultTextProps={{
                selectable: true,
              }}
              // Optimisation du rendu
              enableExperimentalMarginCollapsing={true}
              enableExperimentalGhostLinesPrevention={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Article;
