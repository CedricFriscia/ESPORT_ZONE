import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../../components/SearchBar";
import HomeArticle from "../../components/HomeArticle";
import ModalCategory from "../../components/ModalCategory";
import { getArticle, getArticleByName } from "../../lib/useApi";

const Home = () => {
  const [settingsCategoriesVisible, setSettingsCategoriesVisible] =
    useState(false);
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const handleModalVisible = () => {
    setSettingsCategoriesVisible(true);
  };

  const closeModals = () => {
    setSettingsCategoriesVisible(false);
  };

  const onRefresh = useCallback(() => {
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

    const fetchDataByName = async (search) => {
      try {
        const articles = await getArticleByName(search);
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    if (search) {
      fetchDataByName(search);
    } else {
      fetchData();
    }
  }, [refreshing, search]);

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
        <View className="mb-2">
          <SearchBar handleSearch={handleSearch} />
          {/* <View className="flex flex-row items-center justify-between px-2 mt-6">
            <Text className="text-white text-2xl ">Catégorie</Text>
            <TouchableOpacity onPress={handleModalVisible}>
              <Text className="text-white text-lg ">see all</Text>
            </TouchableOpacity>
          </View> */}
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
          data={articles}
          style={{ flex: 1 }}
          renderItem={({ item: article }) => (
            <HomeArticle
              name={article.name}
              id={article.id}
              created={article.created_at}
            />
          )}
          keyExtractor={(article) => article.id.toString()}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
