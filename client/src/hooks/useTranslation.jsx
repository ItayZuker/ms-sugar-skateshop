import he from '../data/he.json'
import en from '..//data/en.json'
import { useContext } from 'react'
import { LanguageContext } from '../context/language'

export const useTranslation = () => {

    /* Global */
    const { lang } = useContext(LanguageContext)

    /* Locale */
    const translations = {
        en,
        he,
    }

    /* Functions */
    const getNestedValue = (obj, keys) => {
        return keys.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
    };

    const t = (pointer) => {
        const translation = getNestedValue(translations[lang], pointer);
        return translation || pointer;
    }

    /* Out */
    return { t }
}