import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function ParentDashboard() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome 👋</Text>
                <Text style={styles.name}>Parent Name</Text>
            </View>

            {/* Child Info Card */}
            <View style={styles.childCard}>
                <MaterialIcons name="account-circle" size={60} color={COLORS.primary} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.childName}>Rahul Sharma</Text>
                    <Text style={styles.childClass}>Class 10 - Section A</Text>
                </View>
            </View>

            {/* Attendance Overview */}
            <Text style={styles.sectionTitle}>Attendance</Text>
            <View style={styles.attendanceCard}>
                <Text style={styles.attendanceText}>92% Present</Text>
            </View>

            {/* Homework Status */}
            <Text style={styles.sectionTitle}>Pending Homework</Text>
            <View style={styles.card}>
                <View style={styles.row}>
                    <MaterialIcons name="assignment" size={24} color="#FF9800" />
                    <Text style={styles.cardText}>Math Worksheet</Text>
                </View>
                <Text style={styles.time}>Due: 16 Feb 2026</Text>
            </View>

            {/* Result Summary */}
            <Text style={styles.sectionTitle}>Latest Results</Text>
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

            {/* Fee Status */}
            <Text style={styles.sectionTitle}>Fee Status</Text>
            <View style={[styles.card, { borderLeftWidth: 5, borderLeftColor: "#F44336" }]}>
                <View style={styles.row}>
                    <MaterialIcons name="payment" size={24} color="#F44336" />
                    <Text style={styles.cardText}>Pending Fee: ₹5,000</Text>
                </View>
                <Text style={styles.time}>Due: 25 Feb 2026</Text>
            </View>

            {/* Upcoming Events */}
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <View style={styles.card}>
                <View style={styles.row}>
                    <MaterialIcons name="event" size={24} color="#9C27B0" />
                    <Text style={styles.cardText}>Parent-Teacher Meeting</Text>
                </View>
                <Text style={styles.time}>22 Feb 2026</Text>
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
    childCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
    },
    childName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    childClass: {
        color: "gray",
        marginTop: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 12,
    },
    attendanceCard: {
        backgroundColor: "#E8F5E9",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 10,
    },
    attendanceText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4CAF50",
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
