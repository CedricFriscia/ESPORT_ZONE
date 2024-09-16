import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { icons, images } from "../constants";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import {
  bookmarkArticle,
  unBookmarkArticle,
  isBookmarked,
  shareArticle,
  getUserById,
} from "../lib/useApi";
import { useEffect } from "react";
import ShareModal from "./Modals/ShareModal";

const ArticleCard = ({ id, name, created, writer }) => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [owner, setOwner] = useState("");

  const hideMenu = () => setVisible(false);
  const showMenu = async () => {
    try {
      const response = await isBookmarked(id);

      if (response.isBookmarked === true) {
        setIsBookmark(true);
        setVisible(true);
      } else {
        setIsBookmark(false);
        setVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogoutModalVisible = () => {
    setLogoutModalVisible(true);
  };

  const closeModals = () => {
    setSettingsModalVisible(false);
    setLogoutModalVisible(false);
  };

  useEffect(() => {
    const fetchOwnerData = async () => {
      try {
        const ownerData = await getUserById(writer);
        if (ownerData && ownerData.length > 0) {
          setOwner(ownerData[0]);
        } else {
          console.log("No user found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOwnerData();
  }, [writer]);

  const onShare = async () => {
    await shareArticle(id);
  };

  const formattedDate = format(created, "d MMMM yyyy", { locale: fr });

  const handleBookmark = async () => {
    try {
      await bookmarkArticle(id);
      hideMenu();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnBookmark = async () => {
    try {
      await unBookmarkArticle(id);
      hideMenu();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRead = () => {
    router.push({
      pathname: "/article",
      params: { id },
    });
  };

  return (
    <View className="mx-auto flex p-1 mt-4 border bg-white rounded-xl w-11/12 h-80">
      <ShareModal
        visible={settingsModalVisible || logoutModalVisible}
        onClose={closeModals}
        handleLogoutModalVisible={handleLogoutModalVisible}
        logoutModalVisible={logoutModalVisible}
      />
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
          {isBookmark ? (
            <MenuItem onPress={handleUnBookmark}>Unbookmark</MenuItem>
          ) : (
            <MenuItem onPress={handleBookmark}>Bookmark</MenuItem>
          )}
          <MenuDivider />
          <MenuItem onPress={handleLogoutModalVisible}>Share</MenuItem>
          <MenuDivider />
          <MenuItem className="bg-red-400" onPress={hideMenu}>
            Delete
          </MenuItem>
        </Menu>
      </View>

      <View className="flex flex-row justify-between">
        <View className="flex flex-row m-2 items-center">
          <Text className="text-black text-lg ">{formattedDate}</Text>
        </View>
        <View className="flex flex-row m-2 items-center">
          <Text className="text-lg mr-1 text-secondary">By</Text>
          <Text className="text-xl">{owner.name}</Text>
        </View>
      </View>
      <View className="">
        <TouchableOpacity
          className="bg-indigo-400 rounded-xl flex items-center mt-3"
          onPress={handleRead}
        >
          <Text className="text-2xl p-2">Read article...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArticleCard;
