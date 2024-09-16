import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShareModal = ({ visible, onClose, content }) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${apiUrl}/logout`);

      if (response.status === 200) {
        AsyncStorage.removeItem("token");
        console.log("Logout successfully");
        router.push("/");
        onClose();
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View className="flex-1 justify-center items-center">
          <TouchableOpacity
            activeOpacity={1}
            className="m-5 bg-white rounded-2xl p-9 items-center shadow-lg"
          >
            {content === "logout" ? (
              <View className="w-11/12 h-auto">
                <Text className="mb-4 text-center text-lg font-semibold">
                  Confirm Deconnection
                </Text>
                <Text className="">
                  Are you sure you want to be disconnected from the app?
                </Text>
                <View className="flex flex-row justify-between mt-4">
                  <TouchableOpacity
                    className="bg-red-500 rounded-2xl p-2 mb-2"
                    onPress={handleLogout}
                  >
                    <Text className="text-white font-bold text-center">
                      Deconnection
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-blue-500 rounded-2xl p-2 mb-2"
                    onPress={onClose}
                  >
                    <Text className="text-white font-bold text-center">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View className="w-11/12 h-auto">
                <Text className="mb-4 text-center text-lg font-semibold">
                  Settings
                </Text>
                <View className="flex justify-between">
                  <TouchableOpacity className="bg-blue-500 rounded-2xl p-2 mb-2">
                    <Text className="text-white font-bold text-center">
                      Information du compte
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-blue-500 rounded-2xl p-2 mb-2"
                    onPress={() => onClose("logout")}
                  >
                    <Text className="text-white font-bold text-center">
                      Deconnexion
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ShareModal;
