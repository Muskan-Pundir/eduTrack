import React from "react";
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/color";

export default function LogoutModal({ visible, onCancel, onConfirm }) {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>

                    <MaterialIcons name="logout" size={50} color="#F44336" />

                    <Text style={styles.title}>Logout</Text>
                    <Text style={styles.message}>
                        Are you sure you want to logout?
                    </Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onCancel}
                        >
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.logoutButton]}
                            onPress={onConfirm}
                        >
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>

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
    modalContainer: {
        width: 280,             
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: "center",
        elevation: 8,            
        shadowColor: "#000",     
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },

    message: {
        marginTop: 6,
        textAlign: "center",
        color: "gray",
        fontSize: 14,
    },

    buttonRow: {
        flexDirection: "row",
        marginTop: 18,
        width: "100%",
        justifyContent: "space-between",
    },

    button: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    cancelButton: {
        backgroundColor: "#E0E0E0",
        marginRight: 6,
    },

    logoutButton: {
        backgroundColor: "#F44336",
        marginLeft: 6,
    },

    cancelText: {
        fontWeight: "600",
    },
    logoutText: {
        color: "#fff",
        fontWeight: "600",
    },
});
