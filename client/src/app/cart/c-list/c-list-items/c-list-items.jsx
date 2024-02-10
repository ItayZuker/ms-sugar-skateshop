import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import CItem from "./c-item/c-item"
import "./c-list-items.scss"

const CListItems = ({ trigerDelete, setTrigerDelete, loading, setLoading }) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="c-list-items-container">
            <div className="c-list-items-inner-container">
                {cart.lineItems.map((item, i) => {
                    return <CItem
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

export default CListItems