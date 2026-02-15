import React, { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { changePassword } from "../../services/authServices";
import { COLORS } from "../../constants/color";

export default function ChangePassword({ navigation }) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangePassword = async () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            Alert.alert("Error", "All fields are required");
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        try {
            const data = await changePassword({
                currentPassword,
                newPassword,
            });

            Alert.alert("Success", data.message);
            navigation.goBack();

        } catch (error) {
            Alert.alert("Error", error.message || "Password change failed");
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
                        <Image
                            source={require("../../assets/images/logoimg.png")}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.title}>Change Password</Text>
                        <Text style={styles.subtitle}>
                            Enter your old password and set a new one
                        </Text>
                    </View>

                    <TextInput
                        placeholder="Old Password"
                        secureTextEntry
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="New Password"
                        secureTextEntry
                        value={newPassword}
                        onChangeText={setNewPassword}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Confirm New Password"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleChangePassword}
                    >
                        <Text style={styles.buttonText}>Update Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.backToLogin}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backText}>Back</Text>
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
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 180,
        marginBottom: 10,
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
