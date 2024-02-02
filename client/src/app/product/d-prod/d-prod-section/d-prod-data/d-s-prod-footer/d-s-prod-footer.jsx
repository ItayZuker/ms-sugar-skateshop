import React, { useContext, useState } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import DSProdQuantity from "./d-s-prod-quantity/d-s-prod-quantity"
import DSProdAddToCart from "./d-s-prod-add-to-cart/d-s-prod-add-to-cart"
import "./d-s-prod-footer.scss"

const DSProdFooter = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [quantity, setQuantity] = useState(1)

    /* JSX */
    if (storeDisplay?.product?.availableForSale) {
        return (
            <div className="d-s-prod-footer-container">
                <DSProdQuantity quantity={quantity} setQuantity={setQuantity}/>
                <DSProdAddToCart quantity={quantity}/>
            </div>
        )
    }
}

export default DSProdFooter