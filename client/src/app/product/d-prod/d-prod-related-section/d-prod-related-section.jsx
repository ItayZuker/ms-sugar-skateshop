import React from "react"
import DPRelatedPSlider from "./d-p-related-p-slider/d-p-related-p-slider"
import "./d-prod-related-section.scss"

const DProdRelatedSection = () => {

    /* JSX */
    return (
        <section className="d-prod-related-section">
            <div className="d-p-related-p-header">
                <h3>Related Products:</h3>
            </div>
            <DPRelatedPSlider/>
        </section>
    )
}

export default DProdRelatedSection