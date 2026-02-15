import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { AuthContext } from "../context/authContext";
import { logout } from "../services/api";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/color";
import LogoutModal from "../modals/logoutModal";

export default function Dashboard({ navigation }) {
  const { user, logout: authLogout } = useContext(AuthContext);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const role = user?.role;
 
 

  const menuItems = [
    {
      id: 1,
      title: "Profile",
      subtitle: "View & Edit Profile",
      icon: "person",
      color: COLORS.primary,
      screen: "Profile",
      roles: ["Teacher", "Student", "Parent", "Principal", "SuperAdmin"],
    },
    {
      id: 2,
      title: "Dashboard",
      subtitle: "Analytics & Overview",
      icon: "dashboard",
      color: "#FF6B6B",
      screen: "RoleDashboardScreen",
      roles: ["Principal","SuperAdmin"],
    },
    {
      id: 3,
      title: "Transactions",
      subtitle: "View all transactions",
      icon: "receipt-long",
      color: "#4ECDC4",
      screen: "Transaction",
      roles: ["Parent", "Principal","SuperAdmin"],
    },
    {
      id: 4,
      title: "Reports",
      subtitle: "Generate & Export Reports",
      icon: "bar-chart",
      color: "#95E1D3",
      screen: "Reports",
      roles: ["Teacher", "Principal","SuperAdmin"],
    },
    {
      id: 5,
      title: "Attendance Management",
      subtitle: "Manage student attendance",
      icon: "fact-check",
      color: "#F38181",
      screen: "AttendanceManagement",
      roles: ["Teacher", "Principal","SuperAdmin"],
    },
    {
      id: 6,
      title: "Fee Management",
      subtitle: "Manage student fees",
      icon: "payments",
      color: "#FFB74D",
      screen: "FeeManagement",
      roles: ["Principal","SuperAdmin"],
    },
    {
      id: 7,
      title: "Assignments",
      subtitle: "Homework & Assignments",
      icon: "assignment",
      color: "#81C784",
      screen: "AssignmentModule",
      roles: ["Teacher", "Student"],
    },
    {
      id: 8,
      title: "Settings",
      subtitle: "App Preferences",
      icon: "settings",
      color: "#BA68C8",
      screen: "Settings",
      roles: ["Teacher", "Student", "Parent", "Principal","SuperAdmin"],
    },
  ];

  const filteredMenu = menuItems.filter(item =>
    item.roles.includes(role)
  );

  const handleMenuPress = (screen) => {
    navigation.navigate(screen);
  };

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
            <Text style={styles.userName}>{user?.name || "User"}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => setLogoutVisible(true)}
        >
          <MaterialIcons name="logout" size={24} color={COLORS.white} />
        </TouchableOpacity>

      </View>

      {/* Menu Grid */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.menuGrid}>
          {filteredMenu.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuCard}
              onPress={() => handleMenuPress(item.screen)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: item.color + "20" },
                ]}
              >
                <MaterialIcons
                  name={item.icon}
                  size={32}
                  color={item.color}
                />
              </View>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        {/* <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <MaterialIcons name="person" size={24} color={COLORS.primary} />
            <Text style={styles.quickActionText}>View Profile</Text>
            <MaterialIcons name="chevron-right" size={24} color={COLORS.secondary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Settings")}
          >
            <MaterialIcons name="settings" size={24} color={COLORS.primary} />
            <Text style={styles.quickActionText}>Settings</Text>
            <MaterialIcons name="chevron-right" size={24} color={COLORS.secondary} />
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      <LogoutModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onConfirm={async () => {
          try {
            await logout();
            await authLogout();
          } catch (error) {
            await authLogout();
          }
          setLogoutVisible(false);
        }}
      />

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