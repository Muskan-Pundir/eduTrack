import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import DownloadDataModal from "../../modals/downloadDataModal";
import DeleteAccountModal from "../../modals/deleteAccountModal";

export default function PrivacySecurity({ navigation }) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to permanently delete your account?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => { } },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>

      {/* Change Password */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <MaterialIcons name="lock" size={24} color={COLORS.primary} />
        <Text style={styles.optionText}>Change Password</Text>
        <MaterialIcons name="chevron-right" size={24} color={COLORS.secondary} />
      </TouchableOpacity>

      {/* Two Factor Authentication */}
      <View style={styles.optionCard}>
        <MaterialIcons name="verified-user" size={24} color={COLORS.primary} />
        <View style={{ flex: 1, marginLeft: 16 }}>
          <Text style={styles.optionText}>Two-Factor Authentication</Text>
          <Text style={styles.subText}>
            Add extra security to your account
          </Text>
        </View>
        <Switch
          value={twoFactorEnabled}
          onValueChange={setTwoFactorEnabled}
          trackColor={{ false: "#ccc", true: COLORS.primary }}
        />
      </View>

      {/* Login Activity */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => navigation.navigate("LoginActivity")}
      >
        <MaterialIcons name="history" size={24} color={COLORS.primary} />
        <Text style={styles.optionText}>Login Activity</Text>
        <MaterialIcons name="chevron-right" size={24} color={COLORS.secondary} />
      </TouchableOpacity>


      {/* Active Sessions */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => navigation.navigate("ActiveSession")}
      >
        <MaterialIcons name="devices" size={24} color={COLORS.primary} />
        <Text style={styles.optionText}>Active Sessions</Text>
        <MaterialIcons name="chevron-right" size={24} color={COLORS.secondary} />
      </TouchableOpacity>


      {/* Download Data */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => setShowDownloadModal(true)}
      >
        <MaterialIcons name="download" size={24} color={COLORS.primary} />
        <Text style={styles.optionText}>Download My Data</Text>
        <MaterialIcons name="chevron-right" size={24} color={COLORS.secondary} />
      </TouchableOpacity>


      {/* Delete Account */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => setShowDeleteModal(true)}
      >
        <MaterialIcons name="delete" size={24} color="red" />
        <Text style={styles.optionText}>Delete Account</Text>
      </TouchableOpacity>

      <DownloadDataModal
        visible={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
      />
      <DeleteAccountModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        navigation={navigation}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
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
  subText: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },
});
