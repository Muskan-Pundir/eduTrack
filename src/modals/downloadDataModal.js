import React from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { Platform } from "react-native";

import * as FileSystem from "expo-file-system/legacy";
import * as Sharing from "expo-sharing";
import API from "../services/api";
import { COLORS } from "../constants/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function DownloadDataModal({ visible, onClose }) {



const handleDownload = async (type) => {
  try {
    const url = `${API.defaults.baseURL}/data/export?type=${type}`;

    const token = await AsyncStorage.getItem("token"); //  GET TOKEN

    // ================= WEB =================
    if (Platform.OS === "web") {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`, // 🔥 SEND TOKEN
        },
      });

      if (!response.ok) {
        throw new Error("Unauthorized or server error");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `my-data.${type}`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(downloadUrl);
    }

    // ================= MOBILE =================
    else {
      const FileSystem = await import("expo-file-system/legacy");
      const Sharing = await import("expo-sharing");

      const fileUri =
        FileSystem.documentDirectory +
        `my-data.${type}`;

      const result = await FileSystem.downloadAsync(
        url,
        fileUri,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 🔥 SEND TOKEN
          },
        }
      );

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(result.uri);
      }
    }

  } catch (error) {
    console.log(error);
    Alert.alert("Error", "Download failed");
  }
};

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Download My Data</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleDownload("pdf")}
                    >
                        <Text style={styles.buttonText}>Download as PDF</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleDownload("zip")}
                    >
                        <Text style={styles.buttonText}>Download as ZIP</Text>
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
        // backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        width: "80%",               
        backgroundColor: COLORS.white,
        borderRadius: 18,
        paddingVertical: 20,      
        paddingHorizontal: 18,
        elevation: 8,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 16,
        color: COLORS.text,
    },

    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },

    buttonText: {
        color: COLORS.white,       
        fontWeight: "600",
    },

    cancel: {
        textAlign: "center",
        marginTop: 6,
        fontSize: 14,
        color: COLORS.secondary,
        fontWeight: "500",
    },
});

