import React from "react"
import "./d-s-prod-prev-button.scss"

const DSProdPrevButton = ({ hover, product }) => {

    /* JSX */
    return (
        <div className={"d-s-prod-prev-button-container " + (product.availableForSale ? "" : "out-of-stock ") + (hover ? "hover-prev " : "")}>
            {product.availableForSale
                ? <p>Expend</p>
                : <p>Out of stock</p>
            }
        </div>
    )
}

export default DSProdPrevButton