import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#1976d2" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#1976d2",
        tabBarLabelStyle: { fontSize: 13 },
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
          title: "Bản đồ",
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Danh sách",
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
