import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";
import { COLORS } from "../../constants/color";

export default function Notification() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.optionRow}>
        <View>
          <Text style={styles.title}>Push Notifications</Text>
          <Text style={styles.subtitle}>
            Receive app notifications
          </Text>
        </View>
        <Switch
          value={pushEnabled}
          onValueChange={setPushEnabled}
          trackColor={{ false: "#ccc", true: COLORS.primary }}
        />
      </View>

      <View style={styles.optionRow}>
        <View>
          <Text style={styles.title}>Email Notifications</Text>
          <Text style={styles.subtitle}>
            Get updates via email
          </Text>
        </View>
        <Switch
          value={emailEnabled}
          onValueChange={setEmailEnabled}
          trackColor={{ false: "#ccc", true: COLORS.primary }}
        />
      </View>

      <View style={styles.optionRow}>
        <View>
          <Text style={styles.title}>SMS Notifications</Text>
          <Text style={styles.subtitle}>
            Receive important alerts via SMS
          </Text>
        </View>
        <Switch
          value={smsEnabled}
          onValueChange={setSmsEnabled}
          trackColor={{ false: "#ccc", true: COLORS.primary }}
        />
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
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 13,
    color: "gray",
    marginTop: 4,
  },
});
