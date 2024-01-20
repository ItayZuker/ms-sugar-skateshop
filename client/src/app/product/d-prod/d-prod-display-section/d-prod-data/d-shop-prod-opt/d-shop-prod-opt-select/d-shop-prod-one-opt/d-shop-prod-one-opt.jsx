import React from "react"
import DShopProdOneOptName from "./d-shop-prod-one-opt-name/d-shop-prod-one-opt-name"
import DShopProdOneOptValues from "./d-shop-prod-one-opt-values/d-shop-prod-one-opt-values"
import "./d-shop-prod-one-opt.scss"

const DShopProdOneOpt = ({ option }) => {

    /* JSX */
    return (
        <div className="d-shop-prod-one-opt-container">
            <DShopProdOneOptName name={option?.name}/>
            <DShopProdOneOptValues values={option?.values || []}/>
        </div>
    )
}

export default DShopProdOneOpt