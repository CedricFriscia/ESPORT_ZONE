import React, { useEffect, useRef, useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Create = () => {
  const [token, setToken] = useState(null);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const richText = useRef();
  const router = useRouter();

  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);

  const [title, setTitle] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const storedToken = await AsyncStorage.getItem("access_token");
      setToken(storedToken ? storedToken.trim() : null);
    };

    getToken();
  }, []);

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };

  const onChangeTitle = (title) => {
    setTitle(title);
  };

  const submitContentHandle = async () => {
    try {
      const formData = new FormData();
      formData.append("name", title);
      formData.append("content", descHTML);

      const response = await axios.post(`${apiUrl}/article/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        router.push("/home");
      }
    } catch (error) {
      console.error(
        "Error submitting article:",
        error.response || error.message
      );
      alert("Failed to submit article");
    }
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <Pressable onPress={() => richText.current?.dismissKeyboard()}>
            <View className="relative border-b border-white pb-4 mb-4 flex items-center">
              <Text className="text-indigo-400 text-4xl font-bold">
                <Text className="text-secondary">E</Text>Z
              </Text>
            </View>
            <View className="mb-2">
              <Text className="text-white text-2xl uppercase mx-auto">
                Create article
              </Text>
            </View>

            <View>
              <TextInput
                editable
                className="bg-white mb-4 w-10/12 mx-auto rounded"
                placeholder="Title"
                multiline
                value={title}
                onChangeText={(title) => onChangeTitle(title)}
                style={{ padding: 10 }}
              />
              <RichToolbar
                editor={richText}
                selectedIconTint="#873c1e"
                iconTint="#312921"
                actions={[
                  actions.insertImage,
                  actions.setBold,
                  actions.setItalic,
                  actions.insertBulletsList,
                  actions.insertOrderedList,
                  actions.insertLink,
                  actions.setStrikethrough,
                  actions.setUnderline,
                ]}
              />
              <RichEditor
                ref={richText}
                onChange={richTextHandle}
                placeholder="Write your cool content here :)"
                androidHardwareAccelerationDisabled={true}
                initialHeight={250}
              />
              <TouchableOpacity
                className=" bg-blue-300 flex items-center m-2 p-2 rounded-lg mx-auto w-[25vw] "
                onPress={submitContentHandle}
              >
                <Text className="text-black text-2xl ">Create</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Create;
