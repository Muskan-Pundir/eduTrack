import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function StudentDashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Hello 👋</Text>
        <Text style={styles.name}>Student Name</Text>
      </View>

      {/* Attendance Overview */}
      <Text style={styles.sectionTitle}>Attendance Overview</Text>
      <View style={styles.attendanceCard}>
        <MaterialIcons name="percent" size={40} color="#4CAF50" />
        <Text style={styles.attendanceText}>92% Attendance</Text>
      </View>

      {/* Today's Classes */}
      <Text style={styles.sectionTitle}>Today's Classes</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="menu-book" size={24} color={COLORS.primary} />
          <Text style={styles.cardText}>Mathematics</Text>
        </View>
        <Text style={styles.time}>09:00 AM - 10:00 AM</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="science" size={24} color={COLORS.primary} />
          <Text style={styles.cardText}>Science</Text>
        </View>
        <Text style={styles.time}>11:00 AM - 12:00 PM</Text>
      </View>

      {/* Homework Section */}
      <Text style={styles.sectionTitle}>Pending Homework</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="assignment" size={24} color="#FF9800" />
          <Text style={styles.cardText}>Math Worksheet</Text>
        </View>
        <Text style={styles.time}>Due: 16 Feb 2026</Text>
      </View>

      {/* Exam Result Summary */}
      <Text style={styles.sectionTitle}>Latest Result</Text>

      <View style={styles.resultContainer}>
        <View style={[styles.resultCard, { backgroundColor: "#4CAF50" }]}>
          <Text style={styles.resultMarks}>85%</Text>
          <Text style={styles.resultText}>Mathematics</Text>
        </View>

        <View style={[styles.resultCard, { backgroundColor: "#2196F3" }]}>
          <Text style={styles.resultMarks}>78%</Text>
          <Text style={styles.resultText}>Science</Text>
        </View>
      </View>

      {/* Upcoming Events */}
      <Text style={styles.sectionTitle}>Upcoming Events</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="event" size={24} color="#9C27B0" />
          <Text style={styles.cardText}>Annual Sports Day</Text>
        </View>
        <Text style={styles.time}>20 Feb 2026</Text>
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
  attendanceCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  attendanceText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
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
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  resultCard: {
    width: "48%",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  resultMarks: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  resultText: {
    color: "#fff",
    marginTop: 5,
  },
});
