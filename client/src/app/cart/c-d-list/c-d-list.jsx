import React, { useContext } from "react"
import { ShopifyContext } from "../../../context/shopify"
import CDListItems from "./c-d-list-items/c-d-list-items"
import CDListPlaceholder from "./c-d-list-placeholder/c-d-list-placeholder"
import "./c-d-list.scss"

const CDList = ({ trigerDelete, setTrigerDelete, loading, setLoading}) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="c-d-list-container">
            {cart?.lineItems?.length > 0
                ? <CDListItems
                    loading={loading}
                    setLoading={setLoading}
                    trigerDelete={trigerDelete}
                    setTrigerDelete={setTrigerDelete}/>
                : <CDListPlaceholder/>}
        </div>
    )
}

export default CDList