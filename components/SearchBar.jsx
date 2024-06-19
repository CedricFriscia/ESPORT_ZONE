import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const SearchBar = () => {
  return (
    <View className="flex flex-row items-center">
      <TextInput
        className="h-12 w-48 px-4 text-white text-base border border-indigo-400 rounded-l-md bg-transparent"
        placeholder=""
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity className="h-12 px-4 bg-indigo-400 rounded-r-md justify-center">
        <Text className="text-white text-base">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
