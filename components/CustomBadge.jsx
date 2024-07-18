import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";

const TeamBadge = ({ name, icon }) => {
  return (
    <TouchableOpacity className="bg-slate-200 w-27 h-10 rounded-full ml-4 flex flex-row items-center justify-center px-3">
      {/* <View className="bg-black w-8 h-8 flex justify-center items-center rounded-full mr-1">
        <Image
          source={`icons.${icon}`}
          className="w-4 h-4 rounded-full"
          tintColor={"#fff"}
        />
      </View> */}
      <Text className="text-black text-lg capitalize">{name}</Text>
    </TouchableOpacity>
  );
};

export default TeamBadge;
