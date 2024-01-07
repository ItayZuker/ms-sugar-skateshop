import React from "react"
import DShopProdOptName from "./d-shop-prod-opt-name/d-shop-prod-opt-name"
import DShopProdOptValues from "./d-shop-prod-opt-values/d-shop-prod-opt-values"
import "./d-shop-prod-opt.scss"

const DShopProdOpt = ({ option }) => {

    /* JSX */
    return (
        <div className="d-shop-prod-opt-container">
            <DShopProdOptName name={option?.name}/>
            <DShopProdOptValues values={option?.values || []}/>
        </div>
    )
}

export default DShopProdOpt