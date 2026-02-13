import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false); // Changed to false

  // useEffect REMOVE kar do - no auto-login

  const login = async (newToken, email, userData) => {
    try {
      // Save token
      await AsyncStorage.setItem("token", newToken);
      setToken(newToken);

      // Save user data
      if (userData) {
        const userToSave = {
          ...userData,
          email: email,
        };
        await AsyncStorage.setItem("user", JSON.stringify(userToSave));
        setUser(userToSave);
      }

      // Set authenticated
      setIsAuthenticated(true);

      console.log("Login successful - isAuthenticated:", true);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      
      setToken(null);
      setUser(null);
      setIsAuthenticated(false);

      console.log("Logout successful");
      return true;
    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};