import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { getActiveSessions } from "../../services/userService";

export default function ActiveSession() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const data = await getActiveSessions();

      const formatted = data.map((item) => ({
        id: item._id,
        device: item.device || "Unknown Device",
        ip: item.ip || "Unknown IP",
        date: new Date(item.createdAt).toLocaleString(),
      }));

      setSessions(formatted);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <MaterialIcons name="devices" size={24} color={COLORS.primary} />

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.device}>
          {item.device}
          {index === 0 && (
            <Text style={styles.current}>  (Current Session)</Text>
          )}
        </Text>
        <Text style={styles.info}>IP: {item.ip}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Sessions</Text>

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={sessions}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.text,
  },
  card: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  device: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },
  info: {
    fontSize: 14,
    color: COLORS.secondary,
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    color: COLORS.primary,
    marginTop: 6,
  },
  current: {
    color: "green",
    fontSize: 14,
    fontWeight: "600",
  },
});
