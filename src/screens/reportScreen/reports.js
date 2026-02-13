import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function Reports() {
  const [reportType, setReportType] = useState("Attendance Report");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedClass, setSelectedClass] = useState("Class 10");

  const handleGenerate = () => {
    Alert.alert("Success", "Report Generated Successfully!");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <Text style={styles.title}>Generate Reports</Text>

      {/* Report Type */}
      <Text style={styles.label}>Report Type</Text>
      <View style={styles.inputBox}>
        <MaterialIcons name="assessment" size={20} color={COLORS.primary} />
        <Text style={styles.inputText}>{reportType}</Text>
      </View>

      {/* From Date */}
      <Text style={styles.label}>From Date</Text>
      <View style={styles.inputBox}>
        <MaterialIcons name="calendar-today" size={20} color={COLORS.primary} />
        <TextInput
          placeholder="DD/MM/YYYY"
          style={styles.input}
          value={fromDate}
          onChangeText={setFromDate}
        />
      </View>

      {/* To Date */}
      <Text style={styles.label}>To Date</Text>
      <View style={styles.inputBox}>
        <MaterialIcons name="calendar-today" size={20} color={COLORS.primary} />
        <TextInput
          placeholder="DD/MM/YYYY"
          style={styles.input}
          value={toDate}
          onChangeText={setToDate}
        />
      </View>

      {/* Class Selection */}
      <Text style={styles.label}>Class</Text>
      <View style={styles.inputBox}>
        <MaterialIcons name="class" size={20} color={COLORS.primary} />
        <Text style={styles.inputText}>{selectedClass}</Text>
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.generateButton} onPress={handleGenerate}>
        <Text style={styles.generateText}>Generate Report</Text>
      </TouchableOpacity>

      {/* Export Options */}
      <Text style={styles.exportTitle}>Export As</Text>

      <View style={styles.exportContainer}>
        <TouchableOpacity style={styles.exportCard}>
          <MaterialIcons name="picture-as-pdf" size={30} color="#F44336" />
          <Text style={styles.exportText}>PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.exportCard}>
          <MaterialIcons name="grid-on" size={30} color="#4CAF50" />
          <Text style={styles.exportText}>Excel</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "500",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  inputText: {
    marginLeft: 10,
    fontSize: 15,
  },
  generateButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 15,
  },
  generateText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  exportTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  exportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exportCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  exportText: {
    marginTop: 8,
    fontWeight: "600",
  },
});
