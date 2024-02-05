import React from "react"
import DProdBack from "./d-prod-back/d-prod-back"
import DProdGallery from "./d-prod-gallery/d-prod-gallery"
import DProdData from "./d-prod-data/d-prod-data"
import "./d-prod-section.scss"

const DProdSection = () => {

    /* JSX */
    return (
        <section className="d-prod-section">
            <div className="d-prod-top-container">
                <DProdBack/>
            </div>
            <div className="d-prod-bottom-container">
                <DProdGallery/>
                <DProdData/>
            </div>
        </section>
    )
}

export default DProdSection