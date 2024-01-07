import React from "react"
import DProductGallery from "./d-product-gallery/d-product-gallery"
import DProductData from "./d-product-data/d-product-data"
import "./d-product-display-section.scss"

const DProductDisplaySection = () => {

    /* JSX */
    return (
        <section className="d-product-display-section">
            <DProductGallery/>
            <DProductData/>
        </section>
    )
}

export default DProductDisplaySection