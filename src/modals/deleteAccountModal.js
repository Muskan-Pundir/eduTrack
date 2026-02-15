import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { deleteMyAccount } from "../services/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants/color";

export default function DeleteAccountModal({ visible, onClose, navigation }) {

  const handleDelete = async () => {
    try {
      await deleteMyAccount();

      await AsyncStorage.clear();

      Alert.alert("Deleted", "Your account has been deleted");

      navigation.replace("PrivacySecurity");

    } catch (error) {
      Alert.alert("Error", "Failed to delete account");
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Delete Account</Text>
          <Text style={styles.subtitle}>
            Are you sure you want to permanently delete your account?
          </Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDelete}
          >
            <Text style={styles.deleteText}>Yes, Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "70%",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
  cancel: {
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: "500",
  },
});
