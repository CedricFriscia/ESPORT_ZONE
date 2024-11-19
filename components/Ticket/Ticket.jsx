import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  Share,
  TouchableOpacity,
  Alert,
} from "react-native";
import QRCode from "react-qr-code";
import ViewShot from "react-native-view-shot";
import { useState } from "react";

const ETicket = ({ eventName, date, articleId, user }) => {
  const [rounded, setRounded] = useState(true);

  const viewShotRef = useRef();

  const onShare = async () => {
    try {
      setRounded(false);
      const uri = await viewShotRef.current.capture();
      const result = await Share.share({
        message: "Check out my ticket!",
        url: uri,
      });
      setRounded(true);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View className="w-full max-w-[350px]">
      <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
        <View
          className={
            rounded ? "bg-green-500 rounded-3xl p-4" : "bg-green-500 p-4"
          }
        >
          <View className="bg-white rounded-3xl p-4">
            <Text className="text-2xl font-bold mb-4">{eventName}</Text>

            <View className="flex-row justify-between mb-14">
              <View>
                <Text className="text-gray-500 text-xl">Date</Text>
                <Text className="text-lg">{date}</Text>
              </View>
            </View>

            <View className="items-center mb-10">
              <QRCode value={articleId} size={200} />
            </View>
            <View className="mt-4 bg-gray-800 rounded-xl p-2 flex-row items-center">
              <Image
                source={{ uri: "https://via.placeholder.com/40" }}
                className="w-10 h-10 rounded-full mr-2"
              />
              <View>
                <Text className="text-white">{user.name}</Text>
              </View>
            </View>
          </View>
        </View>
      </ViewShot>
      <TouchableOpacity
        onPress={onShare}
        className="mt-4 border-2 rounded-xl p-2 flex-row items-center"
      >
        <Text className="mx-auto text-black text-lg">Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ETicket;
