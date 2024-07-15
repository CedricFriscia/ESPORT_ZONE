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
import { icons } from "../../constants";
import HomeArticle from "../../components/HomeArticle";
import { badges } from "../../constants";
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
