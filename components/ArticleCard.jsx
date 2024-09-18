import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
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
  getUserById,
  deleteArticle,
} from "../lib/useApi";
import { useEffect } from "react";

const ArticleCard = ({ id, name, created, writer }) => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [owner, setOwner] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const showMenu = async () => {
    try {
      const response = await isBookmarked(id);
      setIsBookmark(response.isBookmarked);
      setMenuVisible(true);
    } catch (error) {
      console.error("Error checking bookmark status:", error);
    }
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
        console.error("Error fetching owner data:", error);
      }
    };
    fetchOwnerData();
  }, [writer]);

  const handleBookmark = async () => {
    try {
      await bookmarkArticle(id);
      setIsBookmark(true);
      hideMenu();
    } catch (error) {
      console.error("Error bookmarking article:", error);
    }
  };

  const handleUnBookmark = async () => {
    try {
      await unBookmarkArticle(id);
      setIsBookmark(false);
      hideMenu();
    } catch (error) {
      console.error("Error unbookmarking article:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteArticle(id);
      hideMenu();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleRead = () => {
    router.push({
      pathname: "/article",
      params: { id },
    });
  };

  const handleShare = () => {
    console.log("Sharing article", { id, name });
    hideMenu();
    router.push({
      pathname: "/modal/shareModal",
      params: { id: id, name: name },
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const formattedDate = format(created, "d MMMM yyyy", { locale: fr });

  return (
    <View className="mx-auto flex p-1 mt-4 border bg-white rounded-xl w-11/12 h-80">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-end">
          <View className="h-[86%] bg-white rounded-t-3xl p-8 shadow-lg"></View>
        </View>
      </Modal>
      <Image
        source={images.esportPlayer}
        className="h-1/2 bg-black w-full rounded-xl border-2 border-black"
      />
      <TouchableOpacity onPress={openModal}>
        <Text>Test</Text>
      </TouchableOpacity>
      <View className="flex flex-row items-center justify-between">
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-black text-2xl m-2 w-4/5"
        >
          {name}
        </Text>
        <Menu
          visible={menuVisible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <Text className="flex text-3xl mr-4 mb-3">...</Text>
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
        >
          <MenuItem onPress={isBookmark ? handleUnBookmark : handleBookmark}>
            {isBookmark ? "Unbookmark" : "Bookmark"}
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={handleShare}>Share</MenuItem>
          <MenuDivider />
          <MenuItem onPress={handleDelete}>Delete</MenuItem>
        </Menu>
      </View>

      <View className="flex flex-row justify-between">
        <View className="flex flex-row m-2 items-center">
          <Text className="text-black text-lg">{formattedDate}</Text>
        </View>
        <View className="flex flex-row m-2 items-center">
          <Text className="text-lg mr-1 text-secondary">By</Text>
          <Text className="text-xl">{owner.name}</Text>
        </View>
      </View>
      <TouchableOpacity
        className="bg-indigo-400 rounded-xl flex items-center mt-3"
        onPress={handleRead}
      >
        <Text className="text-2xl p-2">Read article...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleCard;
