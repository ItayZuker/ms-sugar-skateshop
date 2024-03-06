import React from "react"
import "./d-s-p-preview-title.scss"

const DSPPreviewTitle = ({ product }) => {

    /* JSX */
    return (
        <div className="d-s-p-preview-title-container">
            <p>{product.title}</p>
        </div>
    )
}

export default DSPPreviewTitle