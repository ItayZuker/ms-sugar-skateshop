import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import CMItem from "./c-m-item/c-m-item"
import "./c-m-list-items.scss"

const CMListItems = ({ trigerDelete, setTrigerDelete, loading, setLoading }) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="c-m-list-items-container">
            <div className="c-m-list-items-inner-container">
                {cart.lineItems.map((item, i) => {
                    return <CMItem
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

export default CMListItems