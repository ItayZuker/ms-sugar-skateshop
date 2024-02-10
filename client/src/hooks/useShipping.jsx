import { useContext } from "react";
import { GlobalContext } from "../context/global";

export const useShipping = () => {

    /* Global */
    const {
        geoData
    } = useContext(GlobalContext)

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
            messageWithNoCountry: "Cost of shipping is calculated with address on checkout.",
            messageWithCountry: "Free shipping in {country} for over {shippingThreshold} order. Cost is calculated with address on checkout."
        }
    };

    const getShippingMessage = () => {
        const countryName = geoData?.geoLocation?.country_name?.toLowerCase();
        const countryData = shippingInfo[countryName];
        
        let message;
        if (countryData && countryData.shippingThreshold) {
            message = shippingInfo["other"].messageWithCountry
                .replace("{country}", countryData.country.charAt(0).toUpperCase() + countryData.country.slice(1))
                .replace("{shippingThreshold}", countryData.shippingThreshold);
        } else {
            message = shippingInfo["other"].messageWithNoCountry;
        }

        return message;
    };

    return getShippingMessage();

}