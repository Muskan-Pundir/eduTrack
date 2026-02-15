import API from "./api";

// Get All Users (SuperAdmin)
export const getUsers = async () => {
    const response = await API.get("/users/getUsers");
    return response.data;
};

// Get Single User
export const getUserById = async (id) => {
    const response = await API.get(`/users/getUserById/${id}`);
    return response.data;
};

//  Update User
export const updateUser = async (id, body) => {
    const response = await API.put(`/users/updateUser/${id}`, body);
    return response.data;
};

// Delete User
export const deleteUser = async (id) => {
    const response = await API.delete(`/users/deleteUser/${id}`);
    return response.data;
};

export const getLoginActivity = async () => {
    const response = await API.get("/users/getLoginActivity");
    return response.data;
};

export const getActiveSessions = async () => {
    const response = await API.get("/sessions/active");
    return response.data;
};
export const downloadMyData = async (type) => {
    const response = await API.get(
        `/data/export?type=${type}`,
        { responseType: "blob" }   // important for file
    );
    return response.data;
};
export const deleteMyAccount = async () => {
    const response = await API.delete("/users/deleteMyAccount");
    return response.data;
};
export const getTeacherDashboard = async () => {
    const response = await API.get("/teacher/dashboard");
    return response.data;
};
export const getTeacherClasses = async () => {
    const response = await API.get("/teacher/classes");
    return response.data;
};
export const markAttendance = async (body) => {
    const response = await API.post("/teacher/attendance", body);
    return response.data;
};
export const createAssignment = async (body) => {
    const response = await API.post("/teacher/assignments", body);
    return response.data;
};
export const getAttendanceReport = async (classId) => {
    const response = await API.get(`/teacher/reports/attendance?classId=${classId}`);
    return response.data;
};
export const getPerformanceReport = async (classId) => {
    const response = await API.get(`/teacher/reports/performance?classId=${classId}`);
    return response.data;
};
// Create Class
export const createClass = async (body) => {
    const response = await API.post("/classes", body);
    return response.data;
};

// Get Classes
export const getClasses = async (search = "") => {
    const response = await API.get(`/classes?search=${search}`);
    return response.data;
};

export const getStudents = async (search = "") => {
  const response = await API.get(`/students?search=${search}`);
  return response.data;
};
