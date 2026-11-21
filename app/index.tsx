import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {
  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center">
      <Text className="text-xl">TODAY</Text>
    </SafeAreaView>
  );
}
