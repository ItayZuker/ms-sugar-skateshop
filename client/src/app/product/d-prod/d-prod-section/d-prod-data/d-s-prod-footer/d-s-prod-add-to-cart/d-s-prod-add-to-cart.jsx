import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-s-prod-add-to-cart.scss"

const DSProdAddToCart = ({ quantity }) => {

    /* Global */
    const { addToCart, storeDisplay } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        if (storeDisplay?.variant?.available) {
            addToCart({ 
                variantId: storeDisplay?.variant?.id,
                quantity })
        }
    }

    /* JSX */
    if (storeDisplay?.variant?.available) {
        return (
            <div
                className="d-s-prod-add-to-cart-container"
                onPointerDown={handlePointerDown}>
                <p>Add To Cart<span class="material-symbols-outlined">add_shopping_cart</span></p>
            </div>
        )
    }
}

export default DSProdAddToCart