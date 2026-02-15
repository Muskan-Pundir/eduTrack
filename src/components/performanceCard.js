import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/color";

export default function PerformanceCard({
  classAverage = 72,
  highestScore = 95,
  lowestScore = 48,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Performance</Text>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{classAverage}%</Text>
          <Text style={styles.statLabel}>Average</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: COLORS.secondary }]}>
            {highestScore}%
          </Text>
          <Text style={styles.statLabel}>Highest</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: COLORS.accent }]}>
            {lowestScore}%
          </Text>
          <Text style={styles.statLabel}>Lowest</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressFill,
            { width: `${classAverage}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 20,
    borderRadius: 16,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: COLORS.text,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  statLabel: {
    fontSize: 12,
    color: COLORS.secondary,
    marginTop: 4,
  },

  progressContainer: {
    height: 8,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: COLORS.primary,
  },
});
