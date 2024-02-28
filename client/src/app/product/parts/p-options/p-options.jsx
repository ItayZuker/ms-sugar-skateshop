import React, { useContext } from "react"
import POptionsSelect from "./p-options-select/p-options-select"
import { ShopifyContext } from "../../../../context/shopify"
import "./p-options.scss"

const POptions = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    if (storeDisplay?.product?.availableForSale) {
        return (
            <div className="p-options-container">
                <POptionsSelect/>
            </div>
        )
    }
}

export default POptions