import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { icons } from "../../constants";
import HomeArticle from "../../components/HomeArticle";
import { badges } from "../../constants";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView>
        <View className="border-b border-white pb-4 mb-4">
          <Text className="text-indigo-400 text-4xl font-bold text-center">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <View className="flex items-center mb-4">
          <Text className="text-secondary-100 text-4xl">CrazyMoon</Text>
        </View>
        <View className="flex m-auto items-center justify-center w-11/12 mb-4">
          <View className="flex flex-row items-center">
            <Image className="w-8 h-8 mr-2" source={icons.fire}></Image>
            <Text className="text-white text-xl">Last Article</Text>
          </View>
          <HomeArticle />
        </View>
        <Text className="text-xl text-white mx-auto">TEAM BADGE</Text>
        <View className="w-11/12 border-2 border-white mt-2 mx-auto rounded flex-row justify-center">
          <Image className="w-24 h-24 m-1" source={badges.wolf} />
          <Image className="w-24 h-24 m-1" source={badges.pheonix} />
          <Image className="w-24 h-24 m-1" source={badges.wolf} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
