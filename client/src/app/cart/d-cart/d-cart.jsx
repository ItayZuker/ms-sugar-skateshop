import React from "react"
import CItems from "../parts/c-items/c-items"
import CSum from "../parts/c-sum/c-sum"
import "./d-cart.scss"

const DCart = ({ loading, setLoading, trigerDelete, setTrigerDelete }) => {

    /* JSX */
    return (
        <div className="d-cart-container">
            <div className="d-cart-items-container">
                <CItems
                    loading={loading}
                    setLoading={setLoading}
                    trigerDelete={trigerDelete}
                    setTrigerDelete={setTrigerDelete}/>
            </div>
            <div className="d-cart-sum-container">
                <CSum
                    trigerDelete={trigerDelete}
                    loading={loading}/>
            </div>
        </div>
    )
}

export default DCart