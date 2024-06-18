// Article.jsx
import React from "react";
import CustomTag from "../../components/CustomTag";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

const Article = () => {
  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView>
        <View className="border-b border-white pb-4 mb-2">
          <Text className="text-indigo-400 text-4xl font-bold text-center">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <View className="flex flex-row justify-between mb-12">
          <View className="m-2">
            <Text className="text-lg text-secondary">Cedric Friscia</Text>
            <Text className="text-white">14 novembre 1998</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <CustomTag name={"Rocket League"} />
          </View>
        </View>
        <View className="flex items-center">
          <Text className="text-white text-4xl font-bold font-plight text-center w-11/12 mb-4">
            La fin de fifa en 2026 !
          </Text>
          <Text className="text-white text-xl font-bold font-plight w-11/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit
            excepturi optio aspernatur dolorem blanditiis debitis itaque facere.
            Molestiae, consectetur blanditiis maxime iste pariatur sint ipsam
            accusantium autem. Molestiae, quasi! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Illo quos quae officia? Iusto ducimus,
            voluptatem ratione enim ab repellendus error aut dolore magnam
            dignissimos, odit quos. Labore ad omnis magnam.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Article;
