import React, { useContext } from "react"
import { GlobalContext } from "../../../../../../../context/global"
import { ShopifyContext } from "../../../../../../../context/shopify"
import { useCurrency } from "../../../../../../../hooks/useCurrency"
import "./d-shop-product-header-price.scss"

const DshopProductHeaderPrice = () => {

    /* Global */
    const {
        geoData
    } = useContext(GlobalContext)

    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Hooks */
    // const valueInUserCurrency = useCurrency({
    //     value: storeDisplay.variant.price.amount, // The original price in INR
    //     fromCurrency: storeDisplay.variant.price.currencyCode, // The original currency
    //     toCurrency: geoData.geoCurrency, // The user's currency
    //     locale: 'en-US', // The locale for formatting
    // });

    /* JSX */
    return (
        <div className="d-shop-product-header-price-container">
            <h2>{storeDisplay.variant.price.amount} {storeDisplay.variant.price.currencyCode}</h2>
        </div>
    )
}

export default DshopProductHeaderPrice