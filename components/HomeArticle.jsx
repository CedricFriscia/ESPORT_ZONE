import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { icons } from "../constants";
import { images } from "../constants";

const HomeArticle = () => {
  const router = useRouter();

  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleMore = () => {
    router.push("/(tabs)/article");
  };

  return (
    <View className="mx-auto flex flex-row items-center mt-4 border bg-secondary rounded-xl w-full h-48">
      <View className="w-1/2 h-3/4 flex  justify-center items-center">
        <Image
          className="w-48 h-44 ml-2 rounded-xl "
          source={images.esportPlace}
        ></Image>
      </View>

      <View className="w-1/2 h-3/4 ml-3 flex justify-between">
        <Text className="text-lg">EA-Sport la fin de FIFA !</Text>
        <Text className="text-sm">10 janvier 2024</Text>
        <TouchableOpacity className="" href="#" onPress={handleMore}>
          <Text className="text-indigo-400">More...</Text>
        </TouchableOpacity>
        <View className="absolute right-5 bottom-2">
          <TouchableOpacity
            className="relative top-4"
            href="#"
            onPress={handleBookmark}
          >
            {bookmarked == false ? (
              <Image className="w-8 h-8" source={icons.bookmarkBlack}></Image>
            ) : (
              <Image className="w-8 h-8" source={icons.bookmarkRed}></Image>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeArticle;
