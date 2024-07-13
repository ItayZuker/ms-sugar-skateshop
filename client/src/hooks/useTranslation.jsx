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
        const translation = getNestedValue(translations[lang], pointer)
        return translation || pointer
    }

    const fixForTranslation = ({ string }) => {
        return string?.toLowerCase().replaceAll(" ", "_")
    }
    
    const tVariant = ({ variant }) => {
        const arr = variant?.selectedOptions.map(option => {
            const fixName = fixForTranslation({ string: option?.name })
            const tOption = t(`pages.skateshop.products.options.${fixName}.values.${option?.value}`)
            return tOption
        })
        return arr ? arr?.join(" / ") : ""
    }

    /* Out */
    return { t, fixForTranslation, tVariant }
}