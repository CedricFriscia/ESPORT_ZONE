import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";

const badgeCategory = ({ name }) => {
  return (
    <View className="flex flex-row ">
      <TouchableOpacity className="bg-slate-200 w-32 h-10 rounded-full ml-4 flex flex-row justify-center px-3">
        <Text className="text-black text-lg capitalize">{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default badgeCategory;
