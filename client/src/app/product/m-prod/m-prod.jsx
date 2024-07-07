import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../context/shopify"
import { useLocation } from "react-router-dom"
import PNotification from "../parts/p-notification/p-notification"
import MPMainSection from "./m-p-main-section/m-p-main-section"
import MPShippingSection from "./m-p-shipping-section/m-p-shipping-section"
import MPReletedPSction from "./m-p-releted-p-section/m-p-releted-p-section"
import "./m-prod.scss"

const MProd = ({ notifyWhenAvailable, setNotifyWhenAvailable }) => {
    
    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const location = useLocation()

    /* Locale */
    const [cartButtonOnMobile, setCartButtonOnMobile] = useState(false)

    /* Triggers */
    useEffect(() => {
        updateCartButtonOnMobile()
    }, [location])

    /* Functions */
    const updateCartButtonOnMobile = () => {
        setCartButtonOnMobile(false)
    }

    /* JSX */
    return (
        <div className="m-prod-container">
            <PNotification
                setNotifyWhenAvailable={setNotifyWhenAvailable}
                notifyWhenAvailable={notifyWhenAvailable}/>
            <MPMainSection
                notifyWhenAvailable={notifyWhenAvailable}
                setNotifyWhenAvailable={setNotifyWhenAvailable}
                cartButtonOnMobile={cartButtonOnMobile}
                setCartButtonOnMobile={setCartButtonOnMobile}/>
            { storeDisplay?.product?.availableForSale && <MPShippingSection/> }
            <MPReletedPSction/>
        </div>
    )
}

export default MProd