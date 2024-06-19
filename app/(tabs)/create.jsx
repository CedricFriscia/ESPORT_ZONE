import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { icons } from "../../constants";

const Create = () => {
  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="border-b border-white pb-4 mb-4">
          <Text className="text-indigo-400 text-4xl font-bold text-center">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <Text className="text-white text-2xl mx-auto mb-2">CREATE ARTICLE</Text>
        <View className="bg-white h-5/6 w-11/12 mx-auto rounded-xl mb-3"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
