import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { AuthContext } from "../../context/authContext";
import { logout } from "../../services/api";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

export default function Dashboard({ navigation }) {
  const { user, logout: authLogout } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              await logout();
              await authLogout();
              navigation.replace("Welcome");
            } catch (error) {
              console.error("Logout error:", error);
              await authLogout();
              navigation.replace("Welcome");
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const menuItems = [
    {
      id: 1,
      title: "Profile",
      subtitle: "View & Edit Profile",
      icon: "person",
      color: COLORS.primary,
      screen: "Profile",
    },
    {
      id: 2,
      title: "Analytics",
      subtitle: "Reports & Analytics",
      icon: "dashboard",
      color: "#FF6B6B",
      screen: "Analytics",
    },
    {
      id: 3,
      title: "Transactions",
      subtitle: "View all transactions",
      icon: "receipt-long",
      color: "#4ECDC4",
      screen: "Transactions",
    },
    {
      id: 4,
      title: "Reports",
      subtitle: "Generate reports",
      icon: "bar-chart",
      color: "#95E1D3",
      screen: "Reports",
    },
    {
      id: 5,
      title: "Settings",
      subtitle: "App preferences",
      icon: "settings",
      color: "#F38181",
      screen: "Settings",
    },
    {
      id: 6,
      title: "Support",
      subtitle: "Help & Support",
      icon: "support-agent",
      color: "#AA96DA",
      screen: "Support",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <MaterialIcons name="person" size={32} color={COLORS.white} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>
              {user?.email?.split("@")[0] || "User"}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Menu Grid */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuCard}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: item.color + "20" },
                ]}
              >
                <MaterialIcons name={item.icon} size={32} color={item.color} />
              </View>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <MaterialIcons name="person" size={24} color={COLORS.primary} />
            <Text style={styles.quickActionText}>View Profile</Text>
            <MaterialIcons
              name="chevron-right"
              size={24}
              color={COLORS.secondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Settings")}
          >
            <MaterialIcons name="settings" size={24} color={COLORS.primary} />
            <Text style={styles.quickActionText}>Settings</Text>
            <MaterialIcons
              name="chevron-right"
              size={24}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerText: {
    justifyContent: "center",
  },
  greeting: {
    color: COLORS.white,
    fontSize: 14,
    opacity: 0.9,
  },
  userName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 2,
  },
  logoutButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    justifyContent: "space-between",
  },
  menuCard: {
    width: "48%",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 12,
    color: COLORS.secondary,
    textAlign: "center",
  },
  quickActionsContainer: {
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 12,
  },
  quickActionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quickActionText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.text,
    fontWeight: "500",
  },
});