import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#1976d2" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#cce0ff",
        tabBarLabelStyle: { fontSize: 13 },
        tabBarShowLabel: true,   
        tabBarStyle: {
          backgroundColor: "#1565c0", // fallback khi gradient không render
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Check-in",
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name="map-marker-plus" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "List Check-ins",
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
