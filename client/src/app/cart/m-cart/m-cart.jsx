import React from "react"
import CItems from "../parts/c-items/c-items"
import CCheckout from "../parts/c-checkout/c-checkout"
import CSum from "../parts/c-sum/c-sum"
import "./m-cart.scss"

const MCart = ({ loading, setLoading, trigerDelete, setTrigerDelete }) => {

    /* JSX */
    return (
        <div className="m-cart-container">
            <div className="m-cart-inner-container">
                <div className="m-cart-items-container">
                    <CItems
                        loading={loading}
                        setLoading={setLoading}
                        trigerDelete={trigerDelete}
                        setTrigerDelete={setTrigerDelete}/>
                </div>
                <div className="m-cart-sum-container">
                    <CSum/>
                </div>
            </div>
            <div className="m-c-chackout-container">
                <CCheckout
                    loading={loading}
                    trigerDelete={trigerDelete}/>
            </div>
        </div>
    )
}

export default MCart