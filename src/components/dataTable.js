import React, { useState, useMemo } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Pressable
} from "react-native";
import { COLORS } from "../constants/color";

const RECORDS_PER_PAGE = 12;

export default function DataTable({
    columns,
    data = [],
    search,
    setSearch,
    onRowDownload,
}) {
    const [selectedId, setSelectedId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination Logic
    const totalPages = Math.ceil(data.length / RECORDS_PER_PAGE);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * RECORDS_PER_PAGE;
        return data.slice(start, start + RECORDS_PER_PAGE);
    }, [data, currentPage]);

    return (
        <View style={styles.wrapper}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                {/* <Text style={styles.title}>Student List</Text> */}

                <TextInput
                    placeholder="Search..."
                    placeholderTextColor="#999"
                    value={search}
                    onChangeText={(text) => {
                        setSearch(text);
                        setCurrentPage(1);
                    }}
                    style={styles.searchInput}
                />
            </View>

            {/* Scrollable Table */}
            <View style={styles.tableContainer}>

                {/* Header */}
                <View style={styles.headerRow}>
                    {columns.map((col) => (
                        <Text key={col.key} style={styles.headerText}>
                            {col.title}
                        </Text>
                    ))}
                    <Text style={styles.headerText}>Action</Text>
                </View>

                {/* Rows */}
                <View style={styles.bodyContainer}>
                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={true}
                        contentContainerStyle={{ paddingBottom: 10 }}
                    >
                        {paginatedData.length === 0 ? (
                            <Text style={styles.emptyText}>No Data Found</Text>
                        ) : (
                            paginatedData.map((item) => {
                                const isSelected = selectedId === item._id;

                                return (
                                    <Pressable
                                        key={item._id}
                                        style={({ hovered }) => [
                                            styles.row,
                                            hovered && styles.hoverRow,
                                        ]}
                                    >
                                        {columns.map((col) => (
                                            <View key={col.key} style={styles.cellContainer}>
                                                <Text style={styles.cellText}>
                                                    {item[col.key] ?? "-"}
                                                </Text>
                                            </View>
                                        ))}

                                        <View style={styles.cellContainer}>
                                            <TouchableOpacity
                                                style={styles.rowDownloadBtn}
                                                onPress={() => onRowDownload(item)}
                                            >
                                                <Text style={styles.rowDownloadText}>Download</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Pressable>

                                );
                            })
                        )}
                    </ScrollView>
                </View>


                {/* Footer / Pagination */}
                <View style={styles.footer}>
                    <TouchableOpacity
                        disabled={currentPage === 1}
                        onPress={() => setCurrentPage((prev) => prev - 1)}
                        style={[
                            styles.pageBtn,
                            currentPage === 1 && styles.disabledBtn,
                        ]}
                    >
                        <Text style={styles.pageText}>Previous</Text>
                    </TouchableOpacity>

                    <Text style={styles.pageNumber}>
                        Page {currentPage} of {totalPages || 1}
                    </Text>

                    <TouchableOpacity
                        disabled={currentPage === totalPages}
                        onPress={() => setCurrentPage((prev) => prev + 1)}
                        style={[
                            styles.pageBtn,
                            currentPage === totalPages && styles.disabledBtn,
                        ]}
                    >
                        <Text style={styles.pageText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: 30,
        paddingTop: 20,
    },


    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.text,
    },
    cellContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cellText: {
        color: COLORS.text,
        textAlign: "center",
    },

    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    searchInput: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        width: 200,
    },

    tableContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius: 18,
        elevation: 4,
        overflow: "hidden",
        marginBottom: 20,
    },


    headerRow: {
        flexDirection: "row",
        padding: 14,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },

    headerText: {
        flex: 1,
        fontWeight: "bold",
        color: COLORS.white,
        textAlign: "center",
    },

    row: {
        flexDirection: "row",
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },

    selectedRow: {
        backgroundColor: COLORS.primary + "20",
    },

    cell: {
        flex: 1,
        color: COLORS.text,
        textAlign: "center",
    },

    rowDownloadBtn: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },

    rowDownloadText: {
        color: COLORS.white,
        fontSize: 12,
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 14,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    }
    ,
    pageBtn: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },

    disabledBtn: {
        backgroundColor: "#ccc",
    },

    pageText: {
        color: COLORS.white,
        fontSize: 12,
    },

    pageNumber: {
        color: COLORS.white,
        fontWeight: "bold",
    },

    emptyText: {
        textAlign: "center",
        padding: 20,
        color: COLORS.secondary,
    },
    hoverRow: {
        backgroundColor: "#e9e5afff",
    },

});
