import React from "react"
import DSProdPrev from "./d-s-prod-prev/d-s-prod-prev"
import "./d-s-display.scss"

const DSDisplay = ({ products }) => {

    /* JSX */
    return (
        <div className="d-s-display-container">
            <div className="d-s-display-inner-container">
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
        </div>
    )
}

export default DSDisplay