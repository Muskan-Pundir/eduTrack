import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function Assignment({ onCreate }) {
  const assignments = [
    {
      id: "1",
      title: "Algebra Worksheet",
      class: "Class 10 - Maths",
      dueDate: "20 Feb 2026",
      marks: 20,
      status: "Active",
    },
    {
      id: "2",
      title: "Trigonometry Test",
      class: "Class 9 - Maths",
      dueDate: "15 Feb 2026",
      marks: 30,
      status: "Expired",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>{item.title}</Text>
        <Text
          style={[
            styles.status,
            item.status === "Active"
              ? styles.active
              : styles.expired,
          ]}
        >
          {item.status}
        </Text>
      </View>

      <Text style={styles.subText}>{item.class}</Text>
      <Text style={styles.subText}>Due: {item.dueDate}</Text>
      <Text style={styles.subText}>Total Marks: {item.marks}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Assignments</Text>

        <TouchableOpacity style={styles.createBtn} onPress={onCreate}>
          <Text style={styles.createText}>+ Create</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={assignments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createBtn: {
    backgroundColor: "#2E86DE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  createText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
  status: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: "hidden",
  },
  active: {
    backgroundColor: "#D4EFDF",
    color: "#27AE60",
  },
  expired: {
    backgroundColor: "#FADBD8",
    color: "#C0392B",
  },
});
