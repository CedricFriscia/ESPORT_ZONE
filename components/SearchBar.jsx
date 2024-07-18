import React from "react";
import { View, TextInput, Image } from "react-native";
import { icons } from "../constants";

const SearchBar = ({ handleSearch }) => {
  return (
    <View className="flex flex-row items-center justify-center">
      <View className="h-16 w-10/12 px-4 flex flex-row items-center border border-indigo-400 rounded-full bg-transparent">
        <Image source={icons.search} className="w-8 h-8 mr-4" />
        <TextInput
          className="flex-1 text-white text-base"
          placeholder="Recherche un article"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

export default SearchBar;
