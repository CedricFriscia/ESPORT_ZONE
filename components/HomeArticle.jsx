import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { icons, images } from "../constants";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const HomeArticle = ({ id, name, created }) => {
  const router = useRouter();

  const formattedDate = format(created, "d MMMM yyyy", { locale: fr });

  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleMore = () => {
    router.push("/(tabs)/article");
  };

  return (
    <View className="mx-auto flex flex-row items-center mt-4 border bg-secondary rounded-xl w-11/12 h-44">
      <View className="w-1/2 h-3/4 flex justify-center">
        <Image
          className="w-40 h-40 ml-2 rounded-xl"
          source={images.esportPlace}
        />
      </View>

      <View className="w-1/2 h-3/4 ml-3 flex justify-between">
        <Text className="text-lg">{name}</Text>
        <Text className="text-sm">{formattedDate}</Text>
        <TouchableOpacity href="#" onPress={handleMore}>
          <Text className="text-indigo-400">More...</Text>
        </TouchableOpacity>
        <View className="absolute right-5 bottom-2">
          <TouchableOpacity href="#" onPress={handleBookmark}>
            {bookmarked ? (
              <Image className="w-8 h-8" source={icons.bookmarkRed} />
            ) : (
              <Image className="w-8 h-8" source={icons.bookmarkBlack} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeArticle;
