import React from "react"
import DShopProdOptTitle from "./d-shop-prod-opt-title/d-shop-prod-opt-title"
import DShopProdOptSelect from "./d-shop-prod-opt-select/d-shop-prod-opt-select"
import "./d-shop-prod-opt.scss"

const DShopProdOpt = () => {

    /* JSX */
    return (
        <div className="d-shop-prod-main-opt-container">
            <DShopProdOptTitle/>
            <DShopProdOptSelect/>
        </div>
    )
}

export default DShopProdOpt