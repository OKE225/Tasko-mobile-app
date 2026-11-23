import React from "react";
import { Text, View } from "react-native";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

const getPreviousDays = () => {
  const today = new Date();

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));

    return {
      name: DAY_NAMES[date.getDay()],
      day: date.getDate(),
      isToday: index === 6,
    };
  });
};

const WeekCalendar = () => {
  const days = getPreviousDays();

  return (
    <View className="flex-row justify-between gap-1.5">
      {days.map((item, index) => (
        <DayInWeekCalendar
          key={index}
          name={item.name}
          day={item.day}
          isToday={item.isToday}
        />
      ))}
    </View>
  );
};

export default WeekCalendar;

type DayInWeekCalendarProps = {
  name: string;
  day: number;
  isToday?: boolean;
};

const DayInWeekCalendar = ({
  name,
  day,
  isToday = false,
}: DayInWeekCalendarProps) => {
  return (
    <View className="flex-1 items-center gap-1.5">
      <Text className="text-[#6A6A75] text-[11px]">{name}</Text>

      <View
        className={`w-full h-[46px] justify-center items-center rounded-[15px] ${
          isToday ? "bg-white border-2" : "bg-[#F4F4F6]"
        }`}>
        <Text
          className={`text-[16px] ${isToday ? "text-black" : "text-[#6A6A75]"}`}>
          {day}
        </Text>
      </View>
    </View>
  );
};
