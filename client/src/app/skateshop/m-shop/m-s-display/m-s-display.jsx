import React from "react"
import PPreview from "../../parts/p-preview/p-preview"
import "./m-s-display.scss"

const MSDisplay = ({ products }) => {

    /* JSX */
    return (
        <div className="m-s-display-container">
            {products?.map((product, i) => {
                    return (
                        <div
                            key={i}
                            className="m-s-display-cell">
                            <PPreview product={product}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default MSDisplay