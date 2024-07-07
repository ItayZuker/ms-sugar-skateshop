import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./p-quantity.scss"

const PQuantity = ({quantity, setQuantity}) => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const { t } = useTranslation()

    /* Functions */
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity < 5 ? prevQuantity + 1 : 5);
    };

    /* JSX */
    if (storeDisplay?.variant?.available) {
        return (
            <div className="p-quantity-container">
                <p>{t("pages.product.quantity.title")}</p>
                <div className="p-quantity-inner-container">
                    <div className="quantity-button" onClick={decreaseQuantity}><span className="material-symbols-outlined">remove</span></div>
                    <div className="quantity-total"><p>{quantity}</p></div>
                    <div className="quantity-button" onClick={increaseQuantity}><span className="material-symbols-outlined">add</span></div>
                </div>
            </div>
        )
    }
}

export default PQuantity