import React from "react"
import PPreview from "../../parts/p-preview/p-preview"
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
                            className="d-s-display-cell">
                            <PPreview product={product}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DSDisplay