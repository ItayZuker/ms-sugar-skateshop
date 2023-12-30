import React from "react"
import "./d-shop-product-prev-button.scss"

const DShopProductPrevButton = ({ hover, product }) => {

    /* JSX */
    return (
        <div className={"d-shop-product-prev-button-container " + (product.availableForSale ? "" : "out-of-stock ") + (hover ? "hover-prev " : "")}>
            {product.availableForSale
                ? <p>Expend</p>
                : <p>Out of stock</p>
            }
        </div>
    )
}

export default DShopProductPrevButton