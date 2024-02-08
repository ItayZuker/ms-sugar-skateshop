import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-prod-variant.scss"

const DSProdVariant = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [highlight, setHighlight] = useState(false);

    /* Triggers */
    useEffect(() => {
        setHighlight(true);
        const timeoutId = setTimeout(() => setHighlight(false), 500)
        return () => clearTimeout(timeoutId);
    }, [storeDisplay?.variant?.title])

    /* JSX */
    return (
        <div className={"d-s-prod-variant-container " + (highlight ? "highlight" : "")}>
            <p>Variant:</p>
            <p>{storeDisplay?.variant?.title || ""}</p>
        </div>
    )
}

export default DSProdVariant