import React from "react"
import DSProdPrev from "../../parts/d-s-prod-prev/d-s-prod-prev"
import "./m-s-display.scss"

const MSDisplay = ({ products }) => {

    /* JSX */
    return (
        <div className="m-s-display-container">
            {products?.map((product, i) => {
                    return (
                        <div
                        key={i}
                        className={"d-s-display-cell " + (product.availableForSale ? "" : "out-of-stock")}>
                            <DSProdPrev product={product}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default MSDisplay