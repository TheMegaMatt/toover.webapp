import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import EN from './translations/en.json';
import IT from './translations/it.json';

export function initLocalization() {
	return i18n
		.use(initReactI18next)
		.use(LanguageDetector)
		.init({
			resources: {
				en: { translation: EN },
				it: { translation: IT },
			},
			lng: localStorage.getItem('i18nextLng') || 'en',
			fallbackLng: 'en',
			interpolation: {
				escapeValue: false,
			},
			pluralSeparator: ':',
		});
}
