import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/CustomFormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { icons } from "../../constants";

const signIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-col items-center">
          <Text className="text-4xl text-white font-bold text-center mb-4">
            <Text className="text-indigo-400">
              {" "}
              <Text className="text-secondary">E</Text>Z
            </Text>
          </Text>

          <Text className="text-white text-5xl text-center">
            Sign in to your
          </Text>
          <Text className="text-white text-5xl text-center mb-4">Account</Text>
          <Text className="text-white text-center mb-6">
            Enter your email and password to log in
          </Text>

          <View className="w-11/12 bg-white flex justify-center items-center p-4 rounded">
            <View className="border-2 border-slate-300 rounded w-fit">
              <Link href="#" className="px-4 py-2">
                <Text></Text>Continue with google
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
