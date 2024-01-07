import React from "react"
import DShopProdHeader from "./d-shop-prod-header/d-shop-prod-header"
import DShopProdDesctiption from "./d-shop-prod-desctiption/d-shop-prod-desctiption"
import DShopProdOpt from "./d-shop-prod-opt/d-shop-prod-opt"
import DShopProdFooter from "./d-shop-prod-footer/d-shop-prod-footer"
import "./d-prod-data.scss"

const DProdDisplayData = () => {

    /* JSX */
    return (
        <div className="d-prod-data-container">
            <DShopProdHeader/>
            <DShopProdDesctiption/>
            <DShopProdOpt/>
            <DShopProdFooter/>
        </div>
    )
}

export default DProdDisplayData