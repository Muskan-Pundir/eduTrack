import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function About() {

  const openWebsite = () => {
    Linking.openURL("https://www.edutrack.com");
  };

  const openPrivacy = () => {
    Linking.openURL("https://www.edutrack.com/privacy");
  };

  const openTerms = () => {
    Linking.openURL("https://www.edutrack.com/terms");
  };

  const shareApp = async () => {
    try {
      await Share.share({
        message:
          "Check out eduTrack - Smart School Management App! Download now: https://play.google.com/store/apps/details?id=com.edutrack",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const rateApp = () => {
    Linking.openURL(
      "https://play.google.com/store/apps/details?id=com.edutrack"
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <MaterialIcons name="school" size={80} color={COLORS.primary} />
      </View>

      <Text style={styles.appName}>eduTrack</Text>
      <Text style={styles.tagline}>
        Smart School Management System
      </Text>
      <Text style={styles.version}>Version 1.0.0</Text>

      <Text style={styles.description}>
        eduTrack simplifies school operations including attendance,
        fee management, assignments, and academic tracking.
      </Text>

      {/* Website */}
      <TouchableOpacity style={styles.card} onPress={openWebsite}>
        <MaterialIcons name="language" size={22} color={COLORS.primary} />
        <Text style={styles.cardText}>Visit Website</Text>
      </TouchableOpacity>

      {/* Privacy */}
      <TouchableOpacity style={styles.card} onPress={openPrivacy}>
        <MaterialIcons name="security" size={22} color={COLORS.primary} />
        <Text style={styles.cardText}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Terms */}
      <TouchableOpacity style={styles.card} onPress={openTerms}>
        <MaterialIcons name="policy" size={22} color={COLORS.primary} />
        <Text style={styles.cardText}>Terms & Conditions</Text>
      </TouchableOpacity>

      {/* Share App */}
      <TouchableOpacity style={styles.card} onPress={shareApp}>
        <MaterialIcons name="share" size={22} color={COLORS.primary} />
        <Text style={styles.cardText}>Share App</Text>
      </TouchableOpacity>

      {/* Rate Us */}
      <TouchableOpacity style={styles.card} onPress={rateApp}>
        <MaterialIcons name="star-rate" size={22} color="#FFC107" />
        <Text style={styles.cardText}>Rate Us</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        © 2026 eduTrack. All rights reserved.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 15,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  version: {
    color: "gray",
    marginBottom: 20,
  },
  description: {
    textAlign: "center",
    marginBottom: 25,
    color: "gray",
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
    width: "100%",
    marginBottom: 12,
  },
  cardText: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "500",
  },
  footer: {
    marginTop: 30,
    color: "gray",
    fontSize: 12,
  },
});
