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

export default function AnnouncementModal({ visible, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [className, setClassName] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!message.trim()) newErrors.message = "Message is required";
    if (!className.trim()) newErrors.className = "Class is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const data = {
      title,
      message,
      className,
      priority,
      date: new Date().toLocaleDateString(),
    };

    if (onSubmit) onSubmit(data);

    setTitle("");
    setMessage("");
    setClassName("");
    setPriority("Normal");
    setErrors({});
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>Post Announcement</Text>

            <TextInput
              placeholder="Announcement Title"
              value={title}
              onChangeText={setTitle}
              style={[styles.input, errors.title && styles.errorBorder]}
              placeholderTextColor="#999"
            />
            {errors.title && <Text style={styles.error}>{errors.title}</Text>}

            <TextInput
              placeholder="Write announcement message..."
              value={message}
              onChangeText={setMessage}
              multiline
              style={[
                styles.input,
                styles.textArea,
                errors.message && styles.errorBorder,
              ]}
              placeholderTextColor="#999"
            />
            {errors.message && (
              <Text style={styles.error}>{errors.message}</Text>
            )}

            <TextInput
              placeholder="Class (e.g. Class 10 - Maths)"
              value={className}
              onChangeText={setClassName}
              style={[styles.input, errors.className && styles.errorBorder]}
              placeholderTextColor="#999"
            />
            {errors.className && (
              <Text style={styles.error}>{errors.className}</Text>
            )}

            {/* Priority */}
            <View style={styles.priorityContainer}>
              <Text style={styles.priorityLabel}>Priority:</Text>

              <TouchableOpacity
                style={[
                  styles.priorityButton,
                  priority === "Normal" && styles.priorityActive,
                ]}
                onPress={() => setPriority("Normal")}
              >
                <Text style={styles.priorityText}>Normal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.priorityButton,
                  priority === "Important" && styles.priorityImportant,
                ]}
                onPress={() => setPriority("Important")}
              >
                <Text style={styles.priorityText}>Important</Text>
              </TouchableOpacity>
            </View>

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
                <Text style={styles.buttonText}>Post</Text>
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
    color: COLORS.primary,
    marginBottom: 18,
    textAlign: "center",
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

  priorityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  priorityLabel: {
    marginRight: 10,
    fontWeight: "bold",
    color: COLORS.text,
  },

  priorityButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginRight: 10,
  },

  priorityActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  priorityImportant: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },

  priorityText: {
    color: COLORS.text,
    fontWeight: "500",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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

