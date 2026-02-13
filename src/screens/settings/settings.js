import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function Settings({ navigation }) {
  const settingsOptions = [
    { id: 1, title: "Notifications", icon: "notifications" },
    { id: 2, title: "Privacy & Security", icon: "security" },
    { id: 3, title: "Language", icon: "language" },
    { id: 4, title: "Help & Support", icon: "help" },
    { id: 5, title: "About", icon: "info" },
  ];

  return (
    <ScrollView style={styles.container}>
      {settingsOptions.map((option) => (
        <TouchableOpacity key={option.id} style={styles.optionCard}>
          <MaterialIcons name={option.icon} size={24} color={COLORS.primary} />
          <Text style={styles.optionText}>{option.title}</Text>
          <MaterialIcons name="chevron-right" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: COLORS.text,
    fontWeight: "500",
  },
});