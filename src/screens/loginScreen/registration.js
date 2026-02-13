import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import API from "../../services/api";
import { COLORS } from "../../constants/color";
import { register as registerService } from "../../services/authServices";
import { Picker } from "@react-native-picker/picker";

export default function Registration({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Student");

  const handleRegister = async () => {
    try {
      if (!name || !email || !password || !role) {
        Alert.alert("Error", "Please fill all fields");
        return;
      }

      setLoading(true);

      const data = await registerService({
        name,
        email,
        password,
        role,
      });

      Alert.alert("Success", "Account created successfully");
      navigation.navigate("Login");

    } catch (error) {
      Alert.alert("Registration Failed", error.message || "Error occurred");
    } finally {
      setLoading(false);
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
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
              placeholderTextColor="#999"
              autoCapitalize="words"
            />

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholderTextColor="#999"
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Role" value="" />
              <Picker.Item label="Super Admin" value="SuperAdmin" />
              <Picker.Item label="Principal" value="Principal" />
              <Picker.Item label="Teacher" value="Teacher" />
              <Picker.Item label="Student" value="Student" />
              <Picker.Item label="Parent" value="Parent" />
            </Picker>
          </View>

          {/* Register Button */}
          <TouchableOpacity
            onPress={handleRegister}
            disabled={loading}
            style={[
              styles.registerButton,
              loading && styles.registerButtonDisabled,
            ]}
          >
            <Text style={styles.registerButtonText}>
              {loading ? "Creating Account..." : "Register"}
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: "center", // Content ko center karta hai
    minHeight: "100%",
  },
  innerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    maxWidth: 500, // Optional: max width for larger screens
    width: "100%",
    alignSelf: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
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
  registerButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 8,
  },
  registerButtonDisabled: {
    backgroundColor: COLORS.secondary,
    opacity: 0.7,
  },
  registerButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: COLORS.secondary,
    fontSize: 14,
  },
  loginLink: {
    color: COLORS.accent,
    fontWeight: "600",
    fontSize: 14,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: COLORS.light,
  },

  picker: {
    height: 50,
    color: COLORS.text,
  },

});