import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/color";

export default function DashboardHeader({ teacherName }) {
  const today = new Date().toLocaleDateString();

  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>Welcome 👋</Text>
      <Text style={styles.name}>{teacherName}</Text>
      <Text style={styles.date}>{today}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 24,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  welcome: {
    color: COLORS.white,
    fontSize: 16,
  },

  name: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },

  date: {
    color: COLORS.light,
    marginTop: 6,
    fontSize: 12,
  },
});
