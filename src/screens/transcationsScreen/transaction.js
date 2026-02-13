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

export default function Transaction() {

  const transactions = [
    {
      id: "TXN1001",
      title: "School Fee - January",
      amount: "₹5,000",
      date: "10 Feb 2026",
      status: "Paid",
    },
    {
      id: "TXN1002",
      title: "Exam Fee",
      amount: "₹1,200",
      date: "05 Feb 2026",
      status: "Pending",
    },
    {
      id: "TXN1003",
      title: "Library Fee",
      amount: "₹800",
      date: "01 Feb 2026",
      status: "Failed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "#4CAF50";
      case "Pending":
        return "#FF9800";
      case "Failed":
        return "#F44336";
      default:
        return "gray";
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {transactions.map((item) => (
          <View key={item.id} style={styles.card}>
            
            <View style={styles.rowBetween}>
              <Text style={styles.txnTitle}>{item.title}</Text>
              <Text
                style={[
                  styles.status,
                  { color: getStatusColor(item.status) },
                ]}
              >
                {item.status}
              </Text>
            </View>

            <Text style={styles.amount}>{item.amount}</Text>

            <View style={styles.rowBetween}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.txnId}>{item.id}</Text>
            </View>

          </View>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txnTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  status: {
    fontWeight: "bold",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 6,
    color: COLORS.primary,
  },
  date: {
    color: "gray",
  },
  txnId: {
    fontSize: 12,
    color: "gray",
  },
});
