import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import CList from "./c-list/c-list"
import CSum from "./c-sum/c-sum"
import "./cart.scss"

const Cart = () => {

    /* Global */
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
                <CList
                    loading={loading}
                    setLoading={setLoading}
                    trigerDelete={trigerDelete}
                    setTrigerDelete={setTrigerDelete}/>
                <CSum
                    loading={loading}
                    trigerDelete={trigerDelete}/>
            </div>
        </div>
    )
}

export default Cart