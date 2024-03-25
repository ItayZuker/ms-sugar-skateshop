import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-p-variant.scss"

const DPVariant = () => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-p-variant-container">
            <p>Variant:</p>
            <p>{storeDisplay?.variant?.title || ""}</p>
        </div>
    )
}

export default DPVariant