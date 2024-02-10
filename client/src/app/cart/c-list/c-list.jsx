import React, { useContext } from "react"
import { ShopifyContext } from "../../../context/shopify"
import CListItems from "./c-list-items/c-list-items"
import CListPlaceholder from "./c-list-placeholder/c-list-placeholder"
import "./c-list.scss"

const CList = ({ trigerDelete, setTrigerDelete, loading, setLoading}) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="c-list-container">
            {cart?.lineItems?.length > 0
                ? <CListItems
                    loading={loading}
                    setLoading={setLoading}
                    trigerDelete={trigerDelete}
                    setTrigerDelete={setTrigerDelete}/>
                : <CListPlaceholder/>}
        </div>
    )
}

export default CList