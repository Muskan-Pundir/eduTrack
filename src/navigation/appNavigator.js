import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/authContext";
import Login from "../screens/loginScreen/login";
import Registration from "../screens/loginScreen/registration";
import Dashboard from "../screens/dashboard";
import Profile from "../screens/profile/profile";
import Settings from "../screens/settings/settings";
import Welcome from "../screens/loginScreen/welcome";
import ForgotPassword from "../screens/loginScreen/forgotPassword";
import RoleDashboardScreen from "../screens/dashboard/roleDashboardScreen";
import TeacherDashboard from "../screens/dashboard/teacherDashboard/teacherDashboard";
import StudentDashboard from "../screens/dashboard/studentDashboard";
import ParentDashboard from "../screens/dashboard/parentDashboard";
import PrincipalDashboard from "../screens/dashboard/principleDashboard";
import Transaction from "../screens/transcationsScreen/transaction";
import Reports from "../screens/reportScreen/reports";
import Notification from "../screens/settings/notification";
import PrivacySecurityScreen from "../screens/settings/PrivacySecurity";
import PrivacySecurity from "../screens/settings/PrivacySecurity";
import Language from "../screens/settings/language";
import HelpSupport from "../screens/settings/helpSupport";
import About from "../screens/settings/about";
import ChangePassword from "../screens/loginScreen/changePassword";
import LoginActivity from "../screens/profile/loginActivity";
import ActiveSession from "../screens/profile/activeSession";
import { StackScreen } from "react-native-screens";
import ClassList from "../screens/dashboard/teacherDashboard/classList";
import StudentList from "../screens/dashboard/teacherDashboard/studentList";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return null; // Or a loading screen
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen
                            name="Welcome"
                            component={Welcome}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
                        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: true }} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true }} />

                    </>
                ) : (
                    <>
                        <Stack.Screen name="Dashboard" component={Dashboard} />
                        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
                        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
                        <Stack.Screen name="RoleDashboardScreen" component={RoleDashboardScreen} options={{ headerShown: true }} />
                        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} options={{ headerShown: true }} />
                        <Stack.Screen name="StudentDashboard" component={StudentDashboard} options={{ headerShown: true }} />
                        <Stack.Screen name="ParentDashboard" component={ParentDashboard} options={{ headerShown: true }} />
                        <Stack.Screen name="PrincipalDashboard" component={PrincipalDashboard} options={{ headerShown: true }} />
                        <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: true }} />
                        <Stack.Screen name="Reports" component={Reports} options={{ headerShown: true }} />
                        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: true }} />
                        <Stack.Screen name="PrivacySecurity" component={PrivacySecurity} options={{ headerShown: true }} />
                        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: true }} />
                        <Stack.Screen name="Language" component={Language} options={{ headerShown: true }} />
                        <Stack.Screen name="HelpSupport" component={HelpSupport} options={{ headerShown: true }} />
                        <Stack.Screen name="About" component={About} options={{ headerShown: true }} />
                        <Stack.Screen name="LoginActivity" component={LoginActivity} options={{ headerShown: true }} />
                        <Stack.Screen name="ActiveSession" component={ActiveSession} options={{ headerShown: true }} />
                        <Stack.Screen name="ClassList" component={ClassList} options={{ headerShown: true }} />
                        <Stack.Screen name="StudentList" component={StudentList} options={{ headerShown: true }} />

                        {/* Add more authenticated screens here */}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}