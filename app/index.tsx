import WeekCalendar from "@/components/WeekCalendar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function TodayScreen() {
  return (
    <SafeAreaView className="bg-white flex-1 p-4 gap-3">
      <View className="bg-[#E9E7FF] relative w-full h-60 rounded-[32px] overflow-hidden">
        <View className="bg-white/80 absolute self-center bottom-[-75px] w-[250px] h-[250px] rounded-full" />

        <View className="bg-white z-10 absolute top-0 left-0 w-[88px] h-[106px] items-center justify-center py-2.5 m-3 rounded-[26px]">
          <Text className="text-[18px]">?</Text>
          <Text className="text-[12px]">??? XP</Text>
          <Text className="text-[#6A6A75] text-[11px]">to lvl ?</Text>
        </View>

        <View className="absolute top-0 right-0 m-3 gap-2">
          <View className="bg-white z-10 flex-row gap-2.5 rounded-full w-[88px] h-[44px] items-center justify-center">
            <Text>💰</Text>
            <Text className="text-[14px]">???</Text>
          </View>

          <View className="bg-white z-10 flex-row gap-2.5 rounded-full w-[88px] h-[44px] items-center justify-center">
            <Text>🔥</Text>
            <Text className="text-[14px]">? days</Text>
          </View>
        </View>
      </View>

      <WeekCalendar />

      <View className="flex-row justify-between">
        <Text className="text-[22px] font-extrabold">Quests</Text>

        <Pressable className="bg-[#0A0A0A] items-center justify-center rounded-full px-4 py-2.5">
          <Text className="text-white text-[14px] font-extrabold">
            + New quest
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
