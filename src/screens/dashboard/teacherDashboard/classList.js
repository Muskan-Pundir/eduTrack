import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import DataTable from "../../../components/dataTable";
import { getClasses } from "../../../services/userService";
import { COLORS } from "../../../constants/color";

export default function ClassList() {
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchClasses();
    }, 500);

    return () => clearTimeout(debounce);
  }, [search]);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const res = await getClasses(search);
      setClasses(res);
    } catch (error) {
      console.log("Error fetching classes:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: "Class", key: "className" },
    { title: "Section", key: "section" },
    { title: "Academic Year", key: "academicYear" },
  ];

  return (
    <View style={styles.container}>
      
      {/* Page Title */}
      <Text style={styles.pageTitle}>Class List</Text>

      {/* Table Wrapper */}
      <View style={styles.tableWrapper}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <DataTable
            columns={columns}
            data={classes}
            search={search}
            setSearch={setSearch}
            onRowDownload={(row) => console.log("Download row:", row)}
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
