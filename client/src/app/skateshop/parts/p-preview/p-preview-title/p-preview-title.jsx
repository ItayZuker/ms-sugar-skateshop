import React from "react"
import "./p-preview-title.scss"

const PPreviewTitle = ({ product }) => {

    /* JSX */
    return (
        <div className="p-preview-title-container">
            <p>{product?.title}
                { product?.availableForSale
                    ? <span className="material-symbols-outlined">shopping_cart</span>
                    : <span className="material-symbols-outlined">mail</span>
                }
            </p>
        </div>
    )
}

export default PPreviewTitle