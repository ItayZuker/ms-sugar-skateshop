import React, { useContext } from "react"
import { ShopifyContext } from "../../../context/shopify"
import CMListItems from "./c-m-list-items/c-m-list-items"
import "./c-m-list.scss"

const CMList = ({ trigerDelete, setTrigerDelete, loading, setLoading}) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className={"c-m-list-container " + (cart?.lineItems?.length > 0 ? "" : "empty")}>
            {cart?.lineItems?.length > 0
                ? <CMListItems
                    loading={loading}
                    setLoading={setLoading}
                    trigerDelete={trigerDelete}
                    setTrigerDelete={setTrigerDelete}/>
                : null}
        </div>
    )
}

export default CMList