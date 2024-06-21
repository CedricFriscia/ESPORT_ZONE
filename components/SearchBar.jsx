import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const SearchBar = () => {
  return (
    <View className="flex flex-row  items-center justify-center">
      <TextInput
        className="h-12 w-11/12 px-4 text-white text-base border border-indigo-400 rounded-md bg-transparent"
        placeholder="Search for an article"
        placeholderTextColor="#ffffff"
        autoCapitalize="none"
      />
    </View>
  );
};

export default SearchBar;
