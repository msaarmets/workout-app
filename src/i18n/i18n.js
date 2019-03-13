import i18n from "i18n-js";
import estonian from "./et-EE.json";
import english from "./en.json";
import { NativeModules, Platform } from "react-native";

let locale = "en_US"; // Default
if (Platform.OS === "ios") {
  locale = NativeModules.SettingsManager.settings.AppleLocale;
} else if (Platform.OS === "android") {
  locale = NativeModules.I18nManager.localeIdentifier;
}

const et_EE = estonian;
const en_US = english;

i18n.fallbacks = true;
i18n.debug = true;
i18n.translations = { en_US, et_EE };
i18n.locale = locale;

export default i18n;
