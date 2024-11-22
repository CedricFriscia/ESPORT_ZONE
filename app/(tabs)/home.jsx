import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../../components/SearchBar";
import ArticleCard from "../../components/ArticleCard";
import ModalCategory from "../../components/ModalCategory";
import { icons } from "../../constants";
import { getArticles, getArticleByName } from "../../lib/useApi";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const [settingsCategoriesVisible, setSettingsCategoriesVisible] =
    useState(false);
  const [articlesResponse, setArticlesResponse] = useState({
    data: [],
    total_count: 0,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const handleModalVisible = () => {
    setSettingsCategoriesVisible(true);
  };

  const closeModals = () => {
    setSettingsCategoriesVisible(false);
  };

  const fetchData = useCallback(async () => {
    try {
      const fetchedArticlesResponse = await getArticles();
      setArticlesResponse(fetchedArticlesResponse);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchDataByName = useCallback(async (searchText) => {
    try {
      const fetchedArticlesResponse = await getArticleByName(searchText);
      setArticlesResponse(fetchedArticlesResponse);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    if (search) {
      fetchDataByName(search);
    } else {
      fetchData();
    }
    setRefreshing(false);
  }, [search, fetchData, fetchDataByName]);

  useFocusEffect(
    useCallback(() => {
      onRefresh();
    }, [onRefresh])
  );

  useEffect(() => {
    if (search) {
      fetchDataByName(search);
    } else {
      fetchData();
    }
  }, [search, fetchData, fetchDataByName]);

  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <LinearGradient
      colors={["#484bf3", "#161622"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ModalCategory
        visible={settingsCategoriesVisible}
        onClose={closeModals}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View className="relative border-b border-white pb-4 mb-4 flex items-center">
          <Text className="text-indigo-400 text-4xl font-bold">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <View className="mb-2 flex-row items-center justify-between">
          <SearchBar handleSearch={handleSearch} />
          <TouchableOpacity
            onPress={() => router.push("scanner")}
            className="mr-16 border-white border p-3 rounded-full"
          >
            <Image
              className="w-8 h-8"
              source={icons.photo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#FFF", "#FFF", "#FFF"]}
              tintColor="#FFF"
            />
          }
          data={articlesResponse.data}
          style={{ flex: 1 }}
          renderItem={({ item: article }) => (
            <ArticleCard
              name={article.name}
              id={article.id}
              created={article.created_at}
              content={article.content}
            />
          )}
          keyExtractor={(article) => article.id.toString()}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
