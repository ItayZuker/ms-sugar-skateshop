import React from "react"
import "./d-s-p-preview-title.scss"

const DSPPreviewTitle = ({ product }) => {

    /* JSX */
    return (
        <div className="d-s-p-preview-title-container">
            <p>{product?.title}
                { product?.availableForSale
                    ? <span className="material-symbols-outlined">shopping_cart</span>
                    : <span className="material-symbols-outlined">mail</span>
                }
            </p>
        </div>
    )
}

export default DSPPreviewTitle