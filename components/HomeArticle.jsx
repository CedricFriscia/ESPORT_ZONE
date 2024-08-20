import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { icons, images } from "../constants";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { bookmarkArticle } from "../lib/useApi";

const HomeArticle = ({ id, name, created }) => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const formattedDate = format(created, "d MMMM yyyy", { locale: fr });

  const handleBookmark = async () => {
    try {
      await bookmarkArticle(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReadMore = () => {
    router.push({
      pathname: "/article",
      params: { id },
    });
  };

  return (
    <View className="mx-auto flex p-1 mt-4 border bg-white rounded-xl w-11/12 h-80">
      <Image
        source={images.esportPlayer}
        className="h-1/2 bg-black w-full rounded-xl border-2 border-black"
      />
      <View className="flex flex-row items-center justify-between">
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-black text-2xl m-2 w-4/5"
        >
          {name}
        </Text>
        <Menu
          visible={visible}
          anchor={
            <Text onPress={showMenu} className="flex text-3xl mr-4 mb-3">
              ...
            </Text>
          }
          onRequestClose={hideMenu}
        >
          <MenuItem onPress={handleBookmark}>Bookmark</MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Unbookmark</MenuItem>
        </Menu>
      </View>

      <View className="flex flex-row justify-between">
        <View className="flex flex-row m-2 items-center">
          <Text className="text-black text-lg ">{formattedDate}</Text>
        </View>
        <View className="flex flex-row m-2 items-center">
          <Text className="text-lg mr-1 text-secondary">By</Text>
          <Text className="text-xl">Tazem</Text>
        </View>
      </View>
      <View className="">
        <TouchableOpacity
          className="bg-indigo-400 rounded-xl flex items-center mt-3"
          onPress={handleReadMore}
        >
          <Text className="text-2xl p-2">Read article...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeArticle;
