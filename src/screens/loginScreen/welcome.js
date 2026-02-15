import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/color";

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Illustration */}
            <Image
        source={require("../../assets/images/logoimg.png")}
        style={styles.image}
        resizeMode="contain"
      />

            {/* Title */}
            <Text style={styles.title}>Welcome!</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Join our EduTrack system and manage everything smartly.
            </Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.registerBtn]}
                    onPress={() => navigation.navigate("Registration")}
                >
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.loginBtn]}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    image: {
        width: 200,
        height: 180,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: 10,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 16,
        color: COLORS.secondary,
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 15,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    registerBtn: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
    },
    registerText: {
        color: COLORS.primary,
        fontWeight: "600",
    },
    loginText: {
        color: COLORS.white,
        fontWeight: "600",
    },
});
