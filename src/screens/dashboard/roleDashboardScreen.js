import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS } from "../../constants/color";
import RoleCard from "../../components/roleCard";

export default function RoleDashboardScreen({ navigation }) {

  const dashboards = [
    {
      id: 1,
      title: "Teacher",
      icon: "school",
      color: "#4ECDC4",
      screen: "TeacherDashboard",
    },
    {
      id: 2,
      title: "Student",
      icon: "menu-book",
      color: "#FF6B6B",
      screen: "StudentDashboard",
    },
    {
      id: 3,
      title: "Parent",
      icon: "family-restroom",
      color: "#AA96DA",
      screen: "ParentDashboard",
    },
    {
      id: 4,
      title: "Principal",
      icon: "admin-panel-settings",
      color: "#95E1D3",
      screen: "PrincipalDashboard",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select Dashboard</Text>

      <View style={styles.grid}>
        {dashboards.map((item) => (
          <RoleCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            color={item.color}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
