import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import { useMedia } from "../../hooks/useMedia"
import MCart from "./m-cart/m-cart"
import DCart from "./d-cart/d-cart"
import "./cart.scss"

const Cart = () => {

    /* Global */
    const { media } = useMedia()
    const location = useLocation()

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
                { media.type === "mobile"
                    ? <MCart
                        loading={loading}
                        setLoading={setLoading}
                        trigerDelete={trigerDelete}
                        setTrigerDelete={setTrigerDelete}/>
                    : <DCart
                        loading={loading}
                        setLoading={setLoading}
                        trigerDelete={trigerDelete}
                        setTrigerDelete={setTrigerDelete}/>
                }
            </div>
        </div>
    )
}

export default Cart