// Profile.js
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { icons, images } from "../../constants";

import CustomModal from "../../components/CustomModal";

const Profile = () => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogoutModalVisible = () => {
    setLogoutModalVisible(true);
  };

  const closeModals = () => {
    setSettingsModalVisible(false);
    setLogoutModalVisible(false);
  };

  return (
    <SafeAreaView className="bg-primary w-full h-full p-4">
      <CustomModal
        visible={settingsModalVisible || logoutModalVisible}
        onClose={closeModals}
        handleLogoutModalVisible={handleLogoutModalVisible}
        logoutModalVisible={logoutModalVisible}
      />
      <ScrollView>
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
        <View className="h-screen p-4">
          <View className="w-full h-1/3 bg-indigo-400 rounded-lg">
            <View className="w-28 h-28 border-4 border-white mx-auto mt-4  rounded-full">
              <Image
                source={images.esportPlayer}
                className="object-cover w-full h-full rounded-full"
              />
            </View>
            <Text className="text-white font-psemibold text-4xl mx-auto mt-3">
              Tazem
            </Text>
            <View className="flex flex-row mx-auto">
              <Text className="text-white font-psemibold text-2xl  ">"</Text>
              <Text className="text-white font-psemibold text-xl  ">
                Geek de l'extrème
              </Text>
              <Text className="text-white font-psemibold text-2xl  ">"</Text>
            </View>
            <View className="flex flex-row items-center justify-between p-2 mt-1  ">
              <View className="flex items-center">
                <Image source={icons.pen} className="w-12 h-12" />
                <Text className="text-white text-xl  border-black">30</Text>
              </View>
              <View className="flex items-center">
                <Image
                  source={icons.read}
                  tintColor={"#FFF"}
                  className="w-12 h-12"
                />
                <Text className="text-white text-xl  border-black">30</Text>
              </View>
              <View className="flex items-center">
                <Image
                  source={icons.bookmarkBlack}
                  tintColor={"#FFF"}
                  className="w-12 h-12"
                />
                <Text className="text-white text-xl  border-black">30</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
