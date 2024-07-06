import React from "react"
import "./d-s-p-preview-title.scss"

const DSPPreviewTitle = ({ product }) => {

    console.log("product?.title: ", product?.title)
    const title = product?.title?.toLowerCase().replace(" ", "_")

    console.log("title: ", title)
    /* JSX */
    return (
        <div className="d-s-p-preview-title-container">
            <p>{title}
                { product?.availableForSale
                    ? <span className="material-symbols-outlined">shopping_cart</span>
                    : <span className="material-symbols-outlined">notifications</span>
                }
            </p>
        </div>
    )
}

export default DSPPreviewTitle