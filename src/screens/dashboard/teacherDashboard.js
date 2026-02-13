import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function TeacherDashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Good Morning 👋</Text>
        <Text style={styles.name}>Teacher Name</Text>
      </View>

      {/* Today Classes */}
      <Text style={styles.sectionTitle}>Today's Classes</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="class" size={24} color={COLORS.primary} />
          <Text style={styles.cardText}>Class 10 - Mathematics</Text>
        </View>
        <Text style={styles.time}>09:00 AM - 10:00 AM</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="class" size={24} color={COLORS.primary} />
          <Text style={styles.cardText}>Class 9 - Science</Text>
        </View>
        <Text style={styles.time}>11:00 AM - 12:00 PM</Text>
      </View>

      {/* Attendance Summary */}
      <Text style={styles.sectionTitle}>Attendance Summary</Text>
      <View style={styles.summaryContainer}>
        <View style={[styles.summaryCard, { backgroundColor: "#4CAF50" }]}>
          <Text style={styles.summaryNumber}>85%</Text>
          <Text style={styles.summaryText}>Present</Text>
        </View>

        <View style={[styles.summaryCard, { backgroundColor: "#F44336" }]}>
          <Text style={styles.summaryNumber}>15%</Text>
          <Text style={styles.summaryText}>Absent</Text>
        </View>
      </View>

      {/* Pending Assignments */}
      <Text style={styles.sectionTitle}>Pending Assignments</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="assignment" size={24} color="#FF9800" />
          <Text style={styles.cardText}>Math Homework - Class 10</Text>
        </View>
        <Text style={styles.time}>Due: 15 Feb 2026</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="assignment" size={24} color="#FF9800" />
          <Text style={styles.cardText}>Science Project - Class 9</Text>
        </View>
        <Text style={styles.time}>Due: 18 Feb 2026</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  welcome: {
    fontSize: 16,
    color: COLORS.secondary,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  time: {
    marginTop: 5,
    color: "gray",
    fontSize: 13,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryCard: {
    width: "48%",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  summaryNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  summaryText: {
    color: "#fff",
    marginTop: 5,
  },
});
