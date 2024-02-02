import React, { useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../../../../../context/global"
import "./d-s-prod-shipping.scss"

const DSProdShipping = () => {

    /* Global */
    const {
        geoData
    } = useContext(GlobalContext)

    /* Locale */
    const shipping = {
        israel: "Free shepping to Israel for orders over $50",
        other: "Will be calculated on checkout"
    }

    /* JSX */
    return (
        <div className="d-s-prod-shipping-container">
            <p>Shipping:</p>
            <p>{
                shipping?.[geoData?.geoLocation?.country_name?.toLowerCase()]
                ? shipping?.[geoData?.geoLocation?.country_name?.toLowerCase()]
                : shipping?.other
            }</p>
        </div>
    )
}

export default DSProdShipping