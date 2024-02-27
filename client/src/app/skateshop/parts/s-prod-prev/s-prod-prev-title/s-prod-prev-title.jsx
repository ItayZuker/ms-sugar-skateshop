import React from "react"
import "./s-prod-prev-title.scss"

const SProdPrevTitle = ({ product }) => {

    /* JSX */
    return (
        <div className="s-prod-prev-title-container">
            <p>{product.title}</p>
        </div>
    )
}

export default SProdPrevTitle