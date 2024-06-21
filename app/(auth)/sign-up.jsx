import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/CustomFormField";
import { Link } from "expo-router";
import GoogleSignUp from "../../components/GoogleSignUp";
import axios from "axios";
import { useRouter } from "expo-router";

const SignUp = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const route = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${apiUrl}/register`, {
        name: form.username,
        email: form.email,
        password: form.password,
      });

      console.log(response.data);

      if (response.status === 200) {
        console.log("Register successfully");
        route.push("/sign-in");
      }
    } catch (error) {
      console.error("Error during request:", error);
    } finally {
      setIsSubmitting(false);
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

          <Text className="text-white text-5xl text-center mb-4">Sign Up</Text>
          <Text className="text-white  text-center mb-4">
            Join thousands of E-Sport and gaming fans arround the world{" "}
          </Text>

          <View className="w-11/12 bg-white flex justify-center border-2 border-indigo-400 items-center p-8 rounded-xl">
            <GoogleSignUp />
            <View className="flex">
              <Text className="text-sm mt-6">or</Text>
            </View>
            <FormField
              placeholder={"Username"}
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
            />
            <FormField
              placeholder={"Email"}
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
            />
            <FormField
              title="Password"
              placeholder={"Password"}
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
            <TouchableOpacity
              className="inline-flex items-center mt-8 px-9 py-3 border-2 transition ease-in-out delay-150 duration-300"
              activeOpacity={0.8}
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              <Text className="text-xl font-mono font-semibold text-black">
                {isSubmitting ? "Submitting..." : "BUTTON"}
              </Text>
            </TouchableOpacity>
            <Text className="mt-4">
              Don't have an account?{" "}
              <Link href="/sign-in" className="text-blue-700">
                Sign in
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
