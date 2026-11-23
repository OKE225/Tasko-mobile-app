import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="bg-white flex-1 p-4 gap-3">
      {children}
    </SafeAreaView>
  );
};

export default Container;
