import { appTexts } from "@/infrastructure/lang/spanish";
import { useAppSettingsStore } from "@/stores/appSettingsStore";
import { storeToRefs } from "pinia";

export default function useAppLang() {
  const getAppTexts = () => {
    const settingsStore = useAppSettingsStore();
    const { settings } = storeToRefs(settingsStore);

    switch (settings.value.appLanguage) {
    case 'es':
      return appTexts;
      break;
        
      // Returns spanish as default language
    default:
      return appTexts;
      break;
    }
  };

  return {
    getAppTexts,
  };
}

