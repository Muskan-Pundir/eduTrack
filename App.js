import "./global.css"; 
import React from "react";
import AppNavigator from "./src/navigation/appNavigator";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}