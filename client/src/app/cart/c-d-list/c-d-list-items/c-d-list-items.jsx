import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import CDItem from "./c-d-item/c-d-item"
import "./c-d-list-items.scss"

const CDListItems = ({ trigerDelete, setTrigerDelete, loading, setLoading }) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="c-d-list-items-container">
            <div className="c-d-list-items-inner-container">
                {cart.lineItems.map((item, i) => {
                    return <CDItem
                        index={i}
                        key={i}
                        item={item}
                        loading={loading}
                        setLoading={setLoading}
                        trigerDelete={trigerDelete}
                        setTrigerDelete={setTrigerDelete}/>
                })}
            </div>
        </div>
    )
}

export default CDListItems