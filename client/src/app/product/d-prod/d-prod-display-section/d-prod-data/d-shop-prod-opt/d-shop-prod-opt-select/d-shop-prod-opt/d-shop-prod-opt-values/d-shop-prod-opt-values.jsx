import React from "react"
import DShopProdOptValue from "./d-shop-prod-opt-value/d-shop-prod-opt-value"
import "./d-shop-prod-opt-values.scss"

const DShopProdOptValues = ({ values }) => {

    /* JSX */
    return (
        <div className="d-shop-prod-opt-values-container">
            {values?.map((value, i) => {
                return <DShopProdOptValue key={i} value={value}/>
            })}
        </div>
    )
}

export default DShopProdOptValues