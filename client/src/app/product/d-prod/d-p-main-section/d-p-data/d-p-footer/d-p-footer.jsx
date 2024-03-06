import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import PQuantity from "../../../../parts/p-quantity/p-quantity"
import PAddToCart from "../../../../parts/p-add-to-cart/p-add-to-cart"
import "./d-p-footer.scss"

const DPFooter = ({ quantity, setQuantity }) => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    if (storeDisplay?.product?.availableForSale) {
        return (
            <div className="d-p-footer-container">
                <PQuantity quantity={quantity} setQuantity={setQuantity}/>
                <PAddToCart quantity={quantity}/>
            </div>
        )
    }
}

export default DPFooter