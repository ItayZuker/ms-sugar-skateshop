import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import CList from "./c-list/c-list"
import CSum from "./c-sum/c-sum"
import "./cart.scss"

const Cart = () => {

    /* Hooks */
    const location = useLocation();

    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page cart">
            <div className="inner-cart-container">
                <CList/>
                <CSum/>
            </div>
        </div>
    )
}

export default Cart