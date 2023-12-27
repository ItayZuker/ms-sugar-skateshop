import React from "react"
import "./d-shop-product-prev-button.scss"

const DShopProductPrevButton = ({ hover }) => {

    /* JSX */
    return (
        <div className={"d-shop-product-prev-button-container " + (hover ? "hover-prev" : "")}>
            <p>Expend</p>
        </div>
    )
}

export default DShopProductPrevButton