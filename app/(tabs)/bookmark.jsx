import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import HomeArticle from "../../components/HomeArticle";
import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../../components/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import { getBookmarks } from "../../lib/useApi";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const bookmarksData = await getBookmarks();
        setBookmarks(bookmarksData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookmarks();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <LinearGradient
      colors={["#484bf3", "#161622"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className=" w-screen h-full p-4">
        <View className="pb-24">
          <View className="border-b border-white pb-4 mb-4">
            <Text className="text-indigo-400 text-4xl font-bold text-center">
              <Text className="text-secondary">E</Text>Z
            </Text>
          </View>
          <View className="mx-auto">
            <SearchBar />
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
              data={bookmarks}
              className="pb-16"
              renderItem={({ item: bookmark }) => (
                <HomeArticle
                  name={bookmark.name}
                  id={bookmark.id}
                  created={bookmark.created_at}
                />
              )}
              keyExtractor={(article) => article.id.toString()}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Bookmark;
