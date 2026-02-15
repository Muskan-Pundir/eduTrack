import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Language() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { id: "en", name: "English" },
    { id: "hi", name: "Hindi" },
    { id: "fr", name: "French" },
  ];

  // Load saved language
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLang = await AsyncStorage.getItem("appLanguage");
      if (savedLang) {
        setSelectedLanguage(savedLang);
      }
    };
    loadLanguage();
  }, []);

  // Change language
  const changeLanguage = async () => {
    await i18n.changeLanguage(selectedLanguage);
    await AsyncStorage.setItem("appLanguage", selectedLanguage);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t("selectLanguage")}</Text>

      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.id}
          style={styles.optionCard}
          onPress={() => setSelectedLanguage(lang.id)}
        >
          <Text style={styles.optionText}>{lang.name}</Text>

          <MaterialIcons
            name={
              selectedLanguage === lang.id
                ? "radio-button-checked"
                : "radio-button-unchecked"
            }
            size={24}
            color={
              selectedLanguage === lang.id
                ? COLORS.primary
                : "gray"
            }
          />
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.saveButton}
        onPress={changeLanguage}
      >
        <Text style={styles.saveText}>
          {t("saveChanges")}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
