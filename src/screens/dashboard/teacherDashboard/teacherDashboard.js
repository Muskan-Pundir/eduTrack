import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Text } from "react-native";

import { COLORS } from "../../../constants/color";

import DashboardHeader from "../../../components/dashboardHeader";
import StatsCard from "../../../components/statsCard";
import ClassesList from "../teacherDashboard/classList";
import Assignment from "../../../components/assignment";
import PerformanceCard from "../../../components/performanceCard";

import AttendanceModal from "../../../modals/attendanceModal";
import AssignmentModal from "../../../modals/assignmentModal";
import AnnouncementModal from "../../../modals/announcementModal";
import { getTeacherDashboard } from "../../../services/userService";
import { getPerformanceReport } from "../../../services/userService";
import { getClasses } from "../../../services/userService";

export default function TeacherDashboard() {
  const [attendanceVisible, setAttendanceVisible] = useState(false);
  const [assignmentVisible, setAssignmentVisible] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [classes, setClasses] = useState([]);


  useEffect(() => {
    fetchDashboard();
    fetchClasses();
  }, []);


  const fetchDashboard = async () => {
    try {
      const data = await getTeacherDashboard();
      setDashboardData(data);
    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };
  const fetchClasses = async () => {
    try {
      const data = await getClasses();
      setClasses(data);
    } catch (error) {
      console.log("Classes Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <DashboardHeader teacherName="Muskan" />

        <StatsCard
          totalStudents={dashboardData?.totalStudents}
          presentToday={dashboardData?.presentToday}
          pendingAssignments={dashboardData?.pendingAssignments}
          totalClasses={classes?.length}
        />

        
        <TouchableOpacity
          style={styles.announcementBtn}
          onPress={() => setAnnouncementVisible(true)}
        >
          <Text style={styles.announcementText}>Post Announcement</Text>
        </TouchableOpacity>

        <Assignment onCreate={() => setAssignmentVisible(true)} />

        <PerformanceCard
          classAverage={dashboardData?.classAverage}
          highestScore={dashboardData?.highest}
          lowestScore={dashboardData?.lowest}
        />
      </ScrollView>

      <AttendanceModal
        visible={attendanceVisible}
        onClose={() => setAttendanceVisible(false)}
      />

      <AssignmentModal
        visible={assignmentVisible}
        onClose={() => setAssignmentVisible(false)}
      />

      <AnnouncementModal
        visible={announcementVisible}
        onClose={() => setAnnouncementVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  announcementBtn: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.secondary,
    marginLeft: 15,
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  announcementText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 13,
  },

});
