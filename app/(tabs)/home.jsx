import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeArticle from "../../components/HomeArticle";
import { getArticle } from "../../lib/useApi";

const Home = () => {
  const [forYou, setForYou] = useState(true);
  const [subscribe, setSubscribe] = useState(false);
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getArticle();
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refreshing]);

  console.log(articles);

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
            className={forYou ? "border-b-4 border-secondary" : ""}
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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#FFF", "#FFF", "#FFF"]}
            tintColor="#FFF"
          />
        }
      >
        <FlatList
          data={articles}
          renderItem={({ item: article }) => (
            <HomeArticle
              name={article.name}
              id={article.id}
              created={article.created_at}
            />
          )}
          keyExtractor={(article) => article.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
