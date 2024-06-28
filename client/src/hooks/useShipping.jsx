import { useContext } from "react"
import { GlobalContext } from "../context/global"
import { LanguageContext } from "../context/language"
import { useTranslation } from "./useTranslation"

export const useShipping = () => {

    /* Global */
    const { geoData } = useContext(GlobalContext)
    const { lang } = useContext(LanguageContext)
    const { translate } = useTranslation()

    /* Locale */
    const shippingInfo = {
        israel: {
            shippingThreshold: "$50",
            country: "israel"
        },
        england: {
            shippingThreshold: "$70",
            country: "england"
        },
        germany: {
            shippingThreshold: "$40",
            country: "germany"
        },
        other: {
            messageWithNoCountry: translate("pages.cart.shipping_message_with_no_country"),
            messageWithCountry: translate("pages.cart.shipping_message_with_country")
        }
    };

    const getShippingMessage = () => {
        const countryName = geoData?.geoLocation?.country_name?.toLowerCase()
        const countryData = shippingInfo[countryName]
        
        let message
        if (countryData && countryData.shippingThreshold) {
            
            let country = countryData.country.charAt(0).toUpperCase() + countryData.country.slice(1)
            if (lang === "he") {
                country = country === "Israel" ? "ישראל" : country
            }

            message = shippingInfo["other"].messageWithCountry
                .replace("{country}", country)
                .replace("{shippingThreshold}", countryData.shippingThreshold)
        } else {
            message = shippingInfo["other"].messageWithNoCountry
        }

        return message
    }

    return getShippingMessage()

}