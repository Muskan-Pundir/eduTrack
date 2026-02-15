import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function HelpSupport() {

  const openEmail = () => {
    Linking.openURL("mailto:support@schoolerp.com");
  };

  const openPhone = () => {
    Linking.openURL("tel:+911234567890");
  };

  const raiseTicket = () => {
    Alert.alert("Ticket Raised", "Our team will contact you shortly.");
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Help & Support</Text>

      {/* FAQ Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        <View style={styles.faqCard}>
          <Text style={styles.question}>How to reset password?</Text>
          <Text style={styles.answer}>
            Go to Privacy & Security → Change Password.
          </Text>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.question}>How to change language?</Text>
          <Text style={styles.answer}>
            Go to Settings → Language → Select preferred language.
          </Text>
        </View>
      </View>

      {/* Contact Support */}
      <Text style={styles.sectionTitle}>Contact Support</Text>

      <TouchableOpacity style={styles.optionCard} onPress={openEmail}>
        <MaterialIcons name="email" size={24} color={COLORS.primary} />
        <Text style={styles.optionText}>Email Support</Text>
        <MaterialIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionCard} onPress={openPhone}>
        <MaterialIcons name="phone" size={24} color={COLORS.primary} />
        <Text style={styles.optionText}>Call Support</Text>
        <MaterialIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>

      {/* Raise Ticket */}
      <TouchableOpacity style={styles.raiseButton} onPress={raiseTicket}>
        <Text style={styles.raiseText}>Raise a Support Ticket</Text>
      </TouchableOpacity>

      {/* App Info */}
      <View style={styles.footer}>
        <Text style={styles.versionText}>App Version 1.0.0</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  faqCard: {
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  question: {
    fontWeight: "600",
  },
  answer: {
    marginTop: 4,
    color: "gray",
    fontSize: 13,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  raiseButton: {
    marginTop: 15,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  raiseText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
  versionText: {
    color: "gray",
    fontSize: 13,
  },
});
