import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS } from "../constants/color";

export default function AttendanceModal({ visible, onClose }) {
  const [attendance, setAttendance] = useState({
    student1: "Present",
    student2: "Absent",
  });

  const toggleStatus = (student) => {
    setAttendance((prev) => ({
      ...prev,
      [student]: prev[student] === "Present" ? "Absent" : "Present",
    }));
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Mark Attendance</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Student 1 */}
            <View style={styles.studentRow}>
              <Text style={styles.studentName}>Student 1</Text>
              <TouchableOpacity
                style={[
                  styles.statusBtn,
                  attendance.student1 === "Present"
                    ? styles.present
                    : styles.absent,
                ]}
                onPress={() => toggleStatus("student1")}
              >
                <Text style={styles.statusText}>
                  {attendance.student1}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Student 2 */}
            <View style={styles.studentRow}>
              <Text style={styles.studentName}>Student 2</Text>
              <TouchableOpacity
                style={[
                  styles.statusBtn,
                  attendance.student2 === "Present"
                    ? styles.present
                    : styles.absent,
                ]}
                onPress={() => toggleStatus("student2")}
              >
                <Text style={styles.statusText}>
                  {attendance.student2}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 22,
    maxHeight: "90%",
    shadowColor: COLORS.black,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: COLORS.primary,
  },

  studentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light,
  },

  studentName: {
    fontSize: 16,
    color: COLORS.text,
  },

  statusBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  present: {
    backgroundColor: COLORS.primary,
  },

  absent: {
    backgroundColor: COLORS.accent,
  },

  statusText: {
    color: COLORS.white,
    fontWeight: "bold",
  },

  closeBtn: {
    marginTop: 20,
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  closeText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
  },
});
