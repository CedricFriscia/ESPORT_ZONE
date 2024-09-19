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
import ETicket from "./Ticket/Ticket";

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

  const openModal = () => {
    hideMenu();
    setModalVisible(true);
    console.log(modalVisible);
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
          <View className="h-[86%] bg-white rounded-t-3xl p-3 shadow-lg">
            <View className="flex-1 flex-col">
              <View className="flex-row justify-between mb-4">
                <TouchableOpacity
                  className="border-2 w-14 h-14 rounded-full items-center justify-center"
                  onPress={closeModal}
                >
                  <Image
                    className="w-8 h-8"
                    source={icons.arrowBack}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <Text className="text-xl font-bold mx-auto">
                Share to everyone
              </Text>
              <View className="flex-1 justify-center items-center px-4">
                <ETicket eventName={name} date={formattedDate} articleId={id} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
          visible={menuVisible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <Text className="flex text-4xl mr-4 mb-5">...</Text>
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
        >
          <MenuItem onPress={isBookmark ? handleUnBookmark : handleBookmark}>
            {isBookmark ? "Unbookmark" : "Bookmark"}
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={handleDelete}>Delete</MenuItem>
        </Menu>
      </View>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row m-2 items-center">
          <Text className="text-black text-lg">{formattedDate}</Text>
        </View>
        <TouchableOpacity onPress={openModal}>
          <Image
            className="flex text-3xl mr-4 mb-3 h-6 w-6"
            source={icons.share}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="bg-indigo-400 rounded-xl flex items-center mt-1"
        onPress={handleRead}
      >
        <Text className="text-2xl p-2">Read article...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleCard;
