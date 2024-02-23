import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./c-item-delete.scss"

const CItemDelete = ({ trigerDelete, setTrigerDelete, item, index, setLoading }) => {

    /* Global */
    const {
        updateCartQuantity
    } = useContext(ShopifyContext)

    /* Functions */
    const handleDelete = async () => {
        setLoading(index)
        setTrigerDelete(-1)
        await updateCartQuantity({ variantId: item?.id, quantity: 0 })
        setLoading(-1)
    }

    const handleCancel = () => {
        setTrigerDelete(-1)
    }

    /* JSX */
    return (
        <div className={"c-item-delete-container " + (trigerDelete === index ? "active" : "")}>
            <div className="message-container">
                <p>This item will be deleted from your cart.</p>
            </div>
            <div className="action-container">
                <button onClick={handleDelete} className="c-item-delete-button">Ok</button>
                <button onClick={handleCancel} className="c-item-cancel-button">Cancel</button>
            </div>
        </div>
    )
}

export default CItemDelete