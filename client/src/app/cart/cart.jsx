import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/global"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import CSumCheckoutButton from "./c-sum/c-sum-checkout-button/c-sum-checkout-button"
import CDList from "./c-d-list/c-d-list"
import CMList from "./c-m-list/c-m-list"
import CSum from "./c-sum/c-sum"
import "./cart.scss"
import { ShopifyContext } from "../../context/shopify"

const Cart = () => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)
    const {
        media
    } = useContext(GlobalContext)
    const location = useLocation();

    /* Local */
    const [trigerDelete, setTrigerDelete] = useState(-1)
    const [loading, setLoading] = useState(-1)

    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page cart">
            <div className="inner-cart-container">
                { media.type === "mobile" && cart?.lineItems?.length > 0 && <CSumCheckoutButton
                                                    trigerDelete={trigerDelete}
                                                    loading={loading}/> }
                { media.type !== "mobile"
                    ? <CDList
                        loading={loading}
                        setLoading={setLoading}
                        trigerDelete={trigerDelete}
                        setTrigerDelete={setTrigerDelete}/>
                    :  <CMList
                        loading={loading}
                        setLoading={setLoading}
                        trigerDelete={trigerDelete}
                        setTrigerDelete={setTrigerDelete}/>}
                <CSum
                    loading={loading}
                    trigerDelete={trigerDelete}/>
            </div>
        </div>
    )
}

export default Cart