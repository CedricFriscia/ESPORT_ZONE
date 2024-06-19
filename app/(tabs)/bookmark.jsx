import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HomeArticle from "../../components/HomeArticle";
import React from "react";
import SearchBar from "../../components/SearchBar";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView>
        <View className="border-b border-white pb-4 mb-4">
          <Text className="text-indigo-400 text-4xl font-bold text-center">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <View className="mx-auto">
          <SearchBar />
        </View>
        <View className="flex m-auto items-center justify-center w-11/12 mb-4">
          <HomeArticle />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmark;
