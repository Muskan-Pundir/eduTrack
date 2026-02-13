import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function PrincipalDashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome 👑</Text>
        <Text style={styles.name}>Principal Name</Text>
      </View>

      {/* School Overview */}
      <Text style={styles.sectionTitle}>School Overview</Text>
      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: "#4CAF50" }]}>
          <MaterialIcons name="groups" size={28} color="#fff" />
          <Text style={styles.statNumber}>850</Text>
          <Text style={styles.statText}>Students</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: "#2196F3" }]}>
          <MaterialIcons name="school" size={28} color="#fff" />
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statText}>Teachers</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: "#FF9800" }]}>
          <MaterialIcons name="class" size={28} color="#fff" />
          <Text style={styles.statNumber}>30</Text>
          <Text style={styles.statText}>Classes</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: "#9C27B0" }]}>
          <MaterialIcons name="event" size={28} color="#fff" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statText}>Events</Text>
        </View>
      </View>

      {/* Attendance Overview */}
      <Text style={styles.sectionTitle}>Attendance Overview</Text>
      <View style={styles.attendanceCard}>
        <Text style={styles.attendanceText}>Overall Attendance: 88%</Text>
      </View>

      {/* Fee Collection Summary */}
      <Text style={styles.sectionTitle}>Fee Collection</Text>
      <View style={[styles.card, { borderLeftWidth: 5, borderLeftColor: "#4CAF50" }]}>
        <View style={styles.row}>
          <MaterialIcons name="payments" size={24} color="#4CAF50" />
          <Text style={styles.cardText}>Collected: ₹12,50,000</Text>
        </View>
      </View>

      <View style={[styles.card, { borderLeftWidth: 5, borderLeftColor: "#F44336" }]}>
        <View style={styles.row}>
          <MaterialIcons name="money-off" size={24} color="#F44336" />
          <Text style={styles.cardText}>Pending: ₹3,20,000</Text>
        </View>
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activities</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="notifications" size={24} color="#FF5722" />
          <Text style={styles.cardText}>New Teacher Joined - Mr. Sharma</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="announcement" size={24} color="#3F51B5" />
          <Text style={styles.cardText}>Annual Function Announced</Text>
        </View>
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
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  statCard: {
    width: "48%",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  statText: {
    color: "#fff",
    marginTop: 3,
  },
  attendanceCard: {
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  attendanceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1976D2",
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
});
