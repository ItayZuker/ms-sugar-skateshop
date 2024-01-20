import React from "react"
import DShopProdOneOptValue from "./d-shop-prod-one-opt-value/d-shop-prod-one-opt-value"
import "./d-shop-prod-one-opt-values.scss"

const DShopProdOneOptValues = ({ values }) => {

    /* JSX */
    return (
        <div className="d-shop-prod-one-opt-values-container">
            {values?.map((value, i) => {
                return <DShopProdOneOptValue key={i} value={value}/>
            })}
        </div>
    )
}

export default DShopProdOneOptValues