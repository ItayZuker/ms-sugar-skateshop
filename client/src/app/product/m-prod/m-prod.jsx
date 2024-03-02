import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import MPMainSection from "./m-p-main-section/m-p-main-section"
import MPShippingSection from "./m-p-shipping-section/m-p-shipping-section"
import MPReletedPSction from "./m-p-releted-p-section/m-p-releted-p-section"
import "./m-prod.scss"

const MProd = () => {
    
    /* Global */
    const location = useLocation();

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
            <MPMainSection
                cartButtonOnMobile={cartButtonOnMobile}
                setCartButtonOnMobile={setCartButtonOnMobile}/>
            <MPShippingSection/>
            <MPReletedPSction/>
        </div>
    )
}

export default MProd