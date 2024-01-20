import React from "react"
import "./d-s-prod-prev-title.scss"

const DSProdPrevTitle = ({ hover, product }) => {

    /* JSX */
    return (
        <div className={"d-s-prod-prev-title-container " + (product.availableForSale ? "" : "out-of-stock ") + (hover ? "hover-prev" : "")}>
            <p>{product.title}</p>
        </div>
    )
}

export default DSProdPrevTitle