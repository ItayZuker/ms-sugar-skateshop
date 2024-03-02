import React from "react"
import DPRelatedPSlider from "./d-p-related-p-slider/d-p-related-p-slider"
import "./d-prod-related-section.scss"

const DProdRelatedSection = () => {

    /* JSX */
    return (
        <section className="d-prod-related-section">
            <div className="d-p-related-p-header">
                <h2>Related Products:</h2>
            </div>
            <DPRelatedPSlider/>
        </section>
    )
}

export default DProdRelatedSection