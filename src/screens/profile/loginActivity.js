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
import { getLoginActivity } from "../../services/userService";

export default function LoginActivity() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        try {
            const data = await getLoginActivity();

            const formattedData = data.map((item) => ({
                id: item._id,
                device: item.device || "Unknown Device",
                ip: item.ip || "Unknown IP",
                location: item.location || "Unknown",
                date: new Date(item.createdAt).toLocaleString(),
            }));

            setActivities(formattedData);

        } catch (error) {
            console.log("Error fetching login activity", error);
        } finally {
            setLoading(false);
        }
    };


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <MaterialIcons name="login" size={24} color={COLORS.primary} />
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.device}>{item.device}</Text>
                <Text style={styles.info}>IP: {item.ip}</Text>
                <Text style={styles.info}>Location: {item.location}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Activity</Text>

            {loading ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
            ) : (
                <FlatList
                    data={activities}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
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
    iconContainer: {
        marginRight: 12,
        justifyContent: "center",
    },
    device: {
        fontSize: 16,
        fontWeight: "600",
        color: COLORS.text,
    },
    info: {
        fontSize: 14,
        color: COLORS.secondary,
        marginTop: 2,
    },
    date: {
        fontSize: 12,
        color: COLORS.primary,
        marginTop: 6,
    },
});
