import React from "react"
import SProdPrev from "../../parts/s-prod-prev/s-prod-prev"
import "./m-s-display.scss"

const MSDisplay = ({ products }) => {

    /* JSX */
    return (
        <div className="m-s-display-container">
            {products?.map((product, i) => {
                    return (
                        <div
                        key={i}
                        className={"s-display-cell " + (product.availableForSale ? "" : "out-of-stock")}>
                            <SProdPrev product={product}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default MSDisplay