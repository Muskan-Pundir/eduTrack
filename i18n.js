import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      settings: "Settings",
      logout: "Logout",
    },
  },
  hi: {
    translation: {
      welcome: "स्वागत है",
      settings: "सेटिंग्स",
      logout: "लॉगआउट",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
