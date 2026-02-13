import API from "./api";

export async function login(body) {
  const response = await API.post("/auth/login", body);
  return response.data;
}

export async function register(body) {
  const response = await API.post("/auth/register", body);
  return response.data;
}
