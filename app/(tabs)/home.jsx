import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import HomeArticle from "../../components/HomeArticle";

const StyledSafeAreaView = styled(SafeAreaView);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);

const Home = () => {
  const [forYou, setForYou] = useState(true);
  const [subscribe, setSubscribe] = useState(false);

  const forYouPress = () => {
    setSubscribe(false);
    setForYou(true);
  };

  const subscribePress = () => {
    setSubscribe(true);
    setForYou(false);
  };

  return (
    <StyledSafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledView className="flex items-center border-b border-white">
          <StyledText className="text-4xl text-white font-bold text-center mb-4">
            <StyledText className="text-indigo-400">
              <StyledText className="text-secondary">E</StyledText>Z
            </StyledText>
          </StyledText>

          <StyledView className="flex flex-row mb-2 w-screen justify-around">
            <StyledTouchableOpacity
              onPress={forYouPress}
              accessibilityLabel="Learn more about this purple button"
              className={forYou ? "border-b-4  border-secondary" : ""}
            >
              <StyledText
                className={
                  forYou ? "text-secondary text-lg" : "text-white text-lg"
                }
              >
                Pour toi
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={subscribePress}
              accessibilityLabel="Learn more about this purple button"
              className={subscribe ? "border-b-4 border-secondary" : ""}
            >
              <StyledText
                className={
                  subscribe ? "text-secondary text-lg" : "text-white text-lg"
                }
              >
                Abonnements
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
        <ScrollView>
          <HomeArticle />
          <HomeArticle />
          <HomeArticle />
          <HomeArticle />
          <HomeArticle />
          <HomeArticle />
        </ScrollView>
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default Home;
