import React from "react"
import "./d-shop-product-prev-title.scss"

const DShopProductPrevTitle = ({ hover, product }) => {

    /* JSX */
    return (
        <div className={"d-shop-product-prev-title-container " + (hover ? "hover-prev" : "")}>
            <p>{product.title}</p>
        </div>
    )
}

export default DShopProductPrevTitle