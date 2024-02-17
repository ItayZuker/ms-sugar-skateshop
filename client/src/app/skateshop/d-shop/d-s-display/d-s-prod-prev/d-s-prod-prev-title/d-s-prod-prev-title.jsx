import React from "react"
import "./d-s-prod-prev-title.scss"

const DSProdPrevTitle = ({ product }) => {

    /* JSX */
    return (
        <div className="d-s-prod-prev-title-container">
            <p>{product.title}</p>
        </div>
    )
}

export default DSProdPrevTitle