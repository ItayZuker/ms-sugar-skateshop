import React from "react"
import DProdGallery from "./d-prod-gallery/d-prod-gallery"
import DProdData from "./d-prod-data/d-prod-data"
import "./d-prod-section.scss"

const DProdSection = () => {

    /* JSX */
    return (
        <section className="d-prod-section">
            <DProdGallery/>
            <DProdData/>
        </section>
    )
}

export default DProdSection