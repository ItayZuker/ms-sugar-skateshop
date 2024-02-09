import React, { useContext } from "react"
import { ShopifyContext } from "../../../context/shopify"
import CListItems from "./c-list-items/c-list-items"
import CListPlaceholder from "./c-list-placeholder/c-list-placeholder"
import "./c-list.scss"

const CList = () => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    console.log("cart: ", cart)
    /* JSX */
    return (
        <div className="c-list-container">
            {cart?.lineItems?.length > 0
                ? <CListItems/>
                : <CListPlaceholder/>}
        </div>
    )
}

export default CList