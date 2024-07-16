import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";

import { icons, images } from "../../constants";

import CustomModal from "../../components/CustomModal";

const Profile = () => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const router = useRouter();

  const handleLogoutModalVisible = () => {
    setLogoutModalVisible(true);
  };

  const closeModals = () => {
    setSettingsModalVisible(false);
    setLogoutModalVisible(false);
  };

  const handlePress = async () => {
    router.push("/create");
  };

  return (
    <LinearGradient
      colors={["#484bf3", "#161622"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className=" w-full h-full p-4">
        <CustomModal
          visible={settingsModalVisible || logoutModalVisible}
          onClose={closeModals}
          handleLogoutModalVisible={handleLogoutModalVisible}
          logoutModalVisible={logoutModalVisible}
        />
        <View className="relative border-b border-white pb-4 mb-4 flex items-center">
          <Text className="text-indigo-400 text-4xl font-bold">
            <Text className="text-secondary">E</Text>Z
          </Text>
          <TouchableOpacity
            className="absolute right-3"
            onPress={() => setSettingsModalVisible(true)}
          >
            <Image className="w-8 h-8" source={icons.engrenage} />
          </TouchableOpacity>
        </View>
        <View className="mx-auto mt-10">
          <View>
            <View className="flex flex-row gap-5">
              <Image
                source={images.esportPlayer}
                className="w-32 h-44 rounded-lg border border-white"
              />
              <View className="flex gap-2 pt-4 items-center">
                <Text className="text-slate-300">Ravi de vous voir !</Text>
                <Text className="text-slate-300 text-6xl">Tazem</Text>
                <View className="flex flex-row justify-center items-center gap-2">
                  <Text className="text-2xl text-white">"</Text>
                  <Text className="text-white">Roi des geek !</Text>
                  <Text className="text-2xl text-white">"</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View className="mx-auto mt-10">
              <Text className="text-4xl uppercase text-secondary-100">
                Au total
              </Text>
            </View>
            <View className="mx-auto mt-2">
              <Text className="text-[140%] text-white">43</Text>
            </View>
            <View className="mx-auto mt-2">
              <Text className="text-3xl text-white">Articles</Text>
            </View>
            <View className="mx-auto mt-2">
              <Text className="text-2xl text-white capitalize">écrits</Text>
            </View>
          </View>
          <View></View>
          <TouchableOpacity
            className="border border-white p-4 mx-auto rounded-xl w-full mt-9 flex flex-row items-center"
            accessibilityLabel="Write an article"
            onPress={handlePress}
          >
            <Image source={icons.plus} className="w-7 h-7 mr-2" />
            <Text className="text-white text-xl capitalize">
              écrire un article
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Profile;
