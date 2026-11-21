import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const calendar = () => {
  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center">
      <Text className="text-xl">CALENDAR</Text>
    </SafeAreaView>
  );
};

export default calendar;
