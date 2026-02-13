import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet,KeyboardAvoidingView,Platform,ScrollView } from "react-native";
import { forgotPassword } from "../../services/authServices";
import { COLORS } from "../../constants/color";

export default function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleReset = async () => {
        try {
            const data = await forgotPassword({
                email,
                newPassword,
            });

            Alert.alert("Success", data.message);
            navigation.navigate("Login");

        } catch (error) {
            Alert.alert("Error", error.message || "Reset failed");
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.innerContainer}>

                    <View style={styles.header}>
                        <Text style={styles.title}>Forgot Password</Text>
                        <Text style={styles.subtitle}>
                            Enter your email and set a new password
                        </Text>
                    </View>

                    <TextInput
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder="New Password"
                        secureTextEntry
                        value={newPassword}
                        onChangeText={setNewPassword}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleReset}>
                        <Text style={styles.buttonText}>Reset Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.backToLogin}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.backText}>Back to Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        minHeight: "100%",
    },
    header: {
        alignItems: "center",
        marginBottom: 32,
    },
    innerContainer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.text,
    },

    subtitle: {
        fontSize: 16,
        color: COLORS.secondary,
        marginTop: 8,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: 16,
        borderRadius: 12,
        backgroundColor: COLORS.light,
        fontSize: 16,
        marginBottom: 16,
        color: COLORS.text,
    },

    button: {
        backgroundColor: COLORS.primary,
        padding: 16,
        borderRadius: 24,
        alignItems: "center",
        marginTop: 8,
    },

    buttonText: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 18,
    },

    backToLogin: {
        marginTop: 20,
        alignItems: "center",
    },

    backText: {
        color: COLORS.accent,
        fontSize: 14,
        fontWeight: "600",
    },
});
