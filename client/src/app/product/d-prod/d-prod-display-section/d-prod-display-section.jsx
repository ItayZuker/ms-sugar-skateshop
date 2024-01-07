import React from "react"
import DProdGallery from "./d-prod-gallery/d-prod-gallery"
import DProdData from "./d-prod-data/d-prod-data"
import "./d-prod-display-section.scss"

const DProdDisplaySection = () => {

    /* JSX */
    return (
        <section className="d-prod-display-section">
            <DProdGallery/>
            <DProdData/>
        </section>
    )
}

export default DProdDisplaySection