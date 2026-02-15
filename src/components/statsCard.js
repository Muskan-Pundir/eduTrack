import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/color";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function StatsCard({
  totalStudents = 0,
  presentToday = 0,
  pendingAssignments = 0,
  totalClasses = 0,
}) {
  const navigation = useNavigation();
  const stats = [
    {
      label: "Students",
      value: totalStudents,
      icon: "groups",
      color: COLORS.primary,
      screen: "StudentList",
    },
    {
      label: "Present Today",
      value: presentToday,
      icon: "check-circle",
      color: COLORS.secondary,
    },
    {
      label: "Assignments",
      value: pendingAssignments,
      icon: "assignment",
      color: COLORS.accent,
    },
    {
      label: "Classes",
      value: totalClasses,
      icon: "school",
      color: COLORS.primary,
      screen: "ClassList",
    },
  ];

  return (
    <View style={styles.container}>
      {stats.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.card}
          onPress={() => item.screen && navigation.navigate(item.screen)}
        >

          <View style={styles.topRow}>
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: item.color + "20" },
              ]}
            >
              <MaterialIcons
                name={item.icon}
                size={22}
                color={item.color}
              />
            </View>

            <Text style={[styles.value, { color: item.color }]}>
              {item.value}
            </Text>
          </View>

          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 15,
  },

  card: {
    backgroundColor: COLORS.white,
    width: "48%",
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    shadowColor: COLORS.black,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconWrapper: {
    padding: 10,
    borderRadius: 12,
  },

  value: {
    fontSize: 22,
    fontWeight: "bold",
  },

  label: {
    marginTop: 10,
    fontSize: 13,
    color: COLORS.secondary,
  },
});
