import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const TeamBadge = ({ team }) => {
  return (
    <View className="mt-2 ml-4 p-2 border-4 border-indigo-400 bg-white rounded-lg">
      <View>
        <Text className="text text-lg text-center">Support</Text>
      </View>
      <View>
        <Image className="w-8 h-8" source={icons.gaming}></Image>
        <Text className="text-black text-lg">{team}</Text>
      </View>
    </View>
  );
};

export default TeamBadge;
