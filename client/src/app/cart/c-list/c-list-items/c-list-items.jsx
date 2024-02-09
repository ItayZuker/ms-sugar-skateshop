import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import CItem from "./c-item/c-item"
import "./c-list-items.scss"

const CListItems = () => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    console.log("cart: ", cart)
    /* JSX */
    return (
        <div className="c-list-items-container">
            <div className="c-list-items-inner-container">
                {cart.lineItems.map((item, i) => {
                    return <CItem key={i} item={item}/>
                })}
            </div>
        </div>
    )
}

export default CListItems