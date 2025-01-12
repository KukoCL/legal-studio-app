import type { AppLanguages } from "@/infrastructure/types";
import { appTexts } from "@/infrastructure/lang/spanish";

export const getAppTexts = (language: AppLanguages) => {
    switch (language) {
        case 'es':
            return appTexts;
            break;
    
        // Returns spanish as default language
        default:
            return appTexts;
            break;
    }
};