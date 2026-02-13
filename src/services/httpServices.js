import API_URLS from "../config/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

async function buildAuthHeaders() {
  const token = await AsyncStorage.getItem("token");

  return {
    ...defaultHeaders,
    Authorization: token ? `Bearer ${token}` : "",
  };
}

export async function httpPost(endpoint, body, isAuth = false) {
  const headers = isAuth
    ? await buildAuthHeaders()
    : defaultHeaders;

  const response = await fetch(
    `${API_URLS.BASE_URL}${endpoint}`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}

export async function httpGet(endpoint, isAuth = false) {
  const headers = isAuth
    ? await buildAuthHeaders()
    : defaultHeaders;

  const response = await fetch(
    `${API_URLS.BASE_URL}${endpoint}`,
    {
      method: "GET",
      headers,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
