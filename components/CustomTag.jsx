// CustomTag.jsx
import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomTag = ({ name = "" }) => {
  return (
    <View className="inline-flex m-4">
      <TouchableOpacity className="border border-white rounded-2xl px-2 py-1 bg-indigo-400">
        <Text className="text-white text-sm text-center">{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTag;
