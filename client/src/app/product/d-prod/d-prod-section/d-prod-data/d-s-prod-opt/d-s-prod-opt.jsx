import React, { useContext } from "react"
import DSProdOptTitle from "./d-s-prod-opt-title/d-s-prod-opt-title"
import DSProdOptSelect from "./d-s-prod-opt-select/d-s-prod-opt-select"
import "./d-s-prod-opt.scss"
import { ShopifyContext } from "../../../../../../context/shopify"

const DSProdOpt = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    if (storeDisplay?.product?.availableForSale) {
        return (
            <div className="d-s-prod-opt-container">
                <DSProdOptTitle/>
                <DSProdOptSelect/>
            </div>
        )
    }
}

export default DSProdOpt