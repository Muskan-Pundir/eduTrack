import API from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";


// 🔹 LOGIN
export async function login(body) {
  const response = await API.post("/auth/login", body);

  if (response.data.token) {
    await AsyncStorage.setItem("token", response.data.token);
  }

  return response.data;
}


// 🔹 REGISTER
export async function register(body) {
  const response = await API.post("/auth/register", body);
  return response.data;
}


// 🔹 FORGOT PASSWORD
export async function forgotPassword(body) {
  const response = await API.post("/auth/forgot-password", body);
  return response.data;
}


// 🔹 CHANGE PASSWORD
export async function changePassword(body) {
  const response = await API.post("/auth/change-password", body);
  return response.data;
}


// 🔹 LOGOUT
export async function logout() {
  await API.post("/auth/logout");
  await AsyncStorage.removeItem("token");
}
