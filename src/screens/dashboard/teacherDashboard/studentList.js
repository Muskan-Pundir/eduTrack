import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import DataTable from "../../../components/dataTable";
import { getStudents } from "../../../services/userService";
import { COLORS } from "../../../constants/color";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchStudents();
    }, 500);

    return () => clearTimeout(debounce);
  }, [search]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await getStudents(search);
      setStudents(res);
    } catch (error) {
      console.log("Student Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: "Name", key: "name" },
    { title: "Email", key: "email" },
    { title: "Class", key: "className" },
    { title: "Section", key: "section" },
  ];

  return (
    <View style={styles.container}>
      
      {/* Page Title */}
      <Text style={styles.pageTitle}>Student List</Text>

      {/* Table Area */}
      <View style={styles.tableWrapper}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <DataTable
            columns={columns}
            data={students}
            search={search}
            setSearch={setSearch}
            onRowDownload={(row) => console.log("Download row", row)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    paddingHorizontal: 30,
    paddingTop: 20,
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 20,
  },

  tableWrapper: {
    flex: 1,
  },
});
