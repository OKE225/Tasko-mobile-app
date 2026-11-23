import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0A0A0A",
        tabBarInactiveTintColor: "#6a6a75",
        tabBarIconStyle: {
          marginBottom: 2,
        },
        tabBarStyle: {
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontFamily: "PlusJakartaSans_800ExtraBold",
          fontSize: 11,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          tabBarIcon: ({ color }) => (
            <Octicons name="check-circle" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="calendar" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => (
            <Feather name="bar-chart-2" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="hero"
        options={{
          title: "Hero",
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <Octicons name="star" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
