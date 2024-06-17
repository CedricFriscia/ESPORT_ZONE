import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image
            source={images.players}
            className="w-[360px] h-[235px] border border-white -rotate-6"
            resizeMode="contain"
          />

          <View className="relative mt-10">
            <Text className="text-indigo-400 text-4xl">
              {" "}
              <Text className="text-secondary">E</Text>Z
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Follow your favorite team, connect with fans, and stay updated with
            the latest news! Never miss a moment with our app!
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7 border border-secondary border-2"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
