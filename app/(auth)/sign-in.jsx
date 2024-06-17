import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/CustomFormField";
import { Link } from "expo-router";
import GoogleButton from "../../components/GoogleLogin";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const signIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://10.81.200.139:8000/login", {
        name: form.email,
        password: form.password,
      });

      console.log(response.data);

      const token = response.data.access_token;

      if (token != null) {
        AsyncStorage.setItem("access_token", JSON.stringify(token));
        window.location("/home");
      }
    } catch (error) {
      console.error("Error during request:", error);
    }
  };

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

          <View className="w-11/12 bg-white flex justify-center border-2 border-indigo-400 items-center p-8 rounded-xl">
            <GoogleButton />
            <View className="flex">
              <Text className="text-sm mt-6">or</Text>
            </View>
            <FormField
              placeholder="Charly@email.com"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
            />
            <FormField
              placeholder="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
            <TouchableOpacity
              className="inline-flex items-center mt-8 px-9 py-3 border-2 transition ease-in-out delay-150 duration-300"
              activeOpacity={0.8}
            >
              <Text
                className="text-xl font-mono font-semibold text-black"
                onPress={handleSubmit}
              >
                BUTTON
              </Text>
            </TouchableOpacity>
            <Text className="mt-4">
              Don't have a n account ?{" "}
              <Link href="/sign-up" className="text-blue-700">
                Sign Up
              </Link>{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
