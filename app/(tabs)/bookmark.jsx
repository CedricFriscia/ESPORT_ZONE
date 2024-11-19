import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import ArticleCard from "../../components/ArticleCard";
import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../../components/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import { getBookmarks } from "../../lib/useApi";
import { icons } from "../../constants";
import { router } from "expo-router";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const bookmarksData = await getBookmarks();
        setBookmarks(bookmarksData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookmarks();
  }, [refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleSearch = () => {};

  return (
    <LinearGradient
      colors={["#484bf3", "#161622"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="relative border-b border-white pb-4 mb-4 flex items-center">
          <Text className="text-indigo-400 text-4xl font-bold">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <View className="mb-2 flex-row items-center justify-between">
          <View className="flex-1">
            <SearchBar handleSearch={handleSearch} />
          </View>
          <TouchableOpacity
            onPress={() => router.push("/scanner")}
            className="mr-8 border-white border p-3 rounded-full"
          >
            <Image
              className="w-8 h-8 "
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
          data={bookmarks}
          style={{ flex: 1 }}
          renderItem={({ item: bookmark }) => (
            <ArticleCard
              name={bookmark.name}
              id={bookmark.id}
              created={bookmark.created_at}
              writer={bookmark.user_id}
            />
          )}
          keyExtractor={(bookmark) => bookmark.id.toString()}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Bookmark;
