import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "",
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <FontAwesome size={28} style={{ marginBottom: -3 }} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          headerTitle: "",
          title: "Appointment",
          tabBarLabel: "Appointment",
          tabBarIcon: () => (
            <FontAwesome
              size={28}
              style={{ marginBottom: -3 }}
              name="calendar"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "",
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <FontAwesome
              style={{ marginBottom: -3 }}
              name="user-circle"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
