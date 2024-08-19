import { Text, TouchableOpacity } from "react-native";
import React from "react";

const TeamBadge = ({ name }) => {
  return (
    <TouchableOpacity className="bg-slate-200 w-27 h-10 rounded-full ml-4 flex flex-row items-center justify-center px-3">
      <Text className="text-black text-lg capitalize">{name}</Text>
    </TouchableOpacity>
  );
};

export default TeamBadge;
