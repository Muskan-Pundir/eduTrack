import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS } from "../constants/color";
export default function AssignmentModal({ visible, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [className, setClassName] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!dueDate.trim()) newErrors.dueDate = "Due date is required";
    if (!totalMarks.trim()) newErrors.totalMarks = "Total marks required";
    if (!className.trim()) newErrors.className = "Class name required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const data = {
      title,
      description,
      dueDate,
      totalMarks,
      className,
    };

    console.log("Assignment Created:", data);

    if (onSubmit) onSubmit(data);

    // Reset fields
    setTitle("");
    setDescription("");
    setDueDate("");
    setTotalMarks("");
    setClassName("");
    setErrors({});

    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>Create Assignment</Text>

            {/* Title */}
            <TextInput
              placeholder="Assignment Title"
              value={title}
              onChangeText={setTitle}
              style={[styles.input, errors.title && styles.errorBorder]}
            />
            {errors.title && <Text style={styles.error}>{errors.title}</Text>}

            {/* Description */}
            <TextInput
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              multiline
              style={[
                styles.input,
                styles.textArea,
                errors.description && styles.errorBorder,
              ]}
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description}</Text>
            )}

            {/* Class Name */}
            <TextInput
              placeholder="Class (e.g. Class 10 - Maths)"
              value={className}
              onChangeText={setClassName}
              style={[styles.input, errors.className && styles.errorBorder]}
            />
            {errors.className && (
              <Text style={styles.error}>{errors.className}</Text>
            )}

            {/* Due Date */}
            <TextInput
              placeholder="Due Date (DD/MM/YYYY)"
              value={dueDate}
              onChangeText={setDueDate}
              style={[styles.input, errors.dueDate && styles.errorBorder]}
            />
            {errors.dueDate && (
              <Text style={styles.error}>{errors.dueDate}</Text>
            )}

            {/* Total Marks */}
            <TextInput
              placeholder="Total Marks"
              value={totalMarks}
              onChangeText={setTotalMarks}
              keyboardType="numeric"
              style={[styles.input, errors.totalMarks && styles.errorBorder]}
            />
            {errors.totalMarks && (
              <Text style={styles.error}>{errors.totalMarks}</Text>
            )}

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={onClose}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
    color: COLORS.primary,
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    backgroundColor: COLORS.light,
    color: COLORS.text,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  error: {
    color: COLORS.accent,
    fontSize: 12,
    marginBottom: 8,
  },

  errorBorder: {
    borderColor: COLORS.accent,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  cancelButton: {
    backgroundColor: COLORS.secondary,
    marginRight: 10,
  },

  submitButton: {
    backgroundColor: COLORS.primary,
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
  },
});

