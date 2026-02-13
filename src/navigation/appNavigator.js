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
import TeacherDashboard from "../screens/dashboard/teacherDashboard";
import StudentDashboard from "../screens/dashboard/studentDashboard";
import ParentDashboard from "../screens/dashboard/parentDashboard";
import PrincipalDashboard from "../screens/dashboard/principleDashboard";
import Transaction from "../screens/transcationsScreen/transaction";
import Reports from "../screens/reportScreen/reports";

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
                        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: true }}/>
                        <Stack.Screen name="RoleDashboardScreen" component={RoleDashboardScreen} options={{ headerShown: true }} />
                        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} options={{ headerShown: true }}/>
                        <Stack.Screen name="StudentDashboard" component={StudentDashboard} options={{ headerShown: true }}/>
                        <Stack.Screen name="ParentDashboard" component={ParentDashboard} options={{ headerShown: true }}/>
                        <Stack.Screen name="PrincipalDashboard" component={PrincipalDashboard} options={{ headerShown: true }}/>
                        <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: true }}/>
                        <Stack.Screen name="Reports" component={Reports} options={{ headerShown: true }}/>

                        {/* Add more authenticated screens here */}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}