import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify";
import "./c-item-quantity.scss"

const CItemQuantity = ({ item, setTrigerDelete, index }) => {

    /* Global */
    const { addToCart, updateCartQuantity } = useContext(ShopifyContext)

    /* Functions */
    const decreaseQuantity = () => {
        if (item?.quantity === 1) {
            setTrigerDelete(index)
        } else {
            updateCartQuantity({
                variantId: item?.id,
                quantity: item?.quantity - 1
            })
        }
    };

    const increaseQuantity = () => {
        addToCart({ 
            variantId: item?.variant?.id,
            quantity: 1 })
    };

    /* JSX */
    return (
        <div className="c-item-quantity-container">
            <div className="c-item-quantity-inner-container">
                <div className="quantity-button" onClick={decreaseQuantity}><span className="material-symbols-outlined">remove</span></div>
                <div className="quantity-total"><p>{item?.quantity}</p></div>
                <div className="quantity-button" onClick={increaseQuantity}><span className="material-symbols-outlined">add</span></div>
            </div>
        </div>
    )
}

export default CItemQuantity