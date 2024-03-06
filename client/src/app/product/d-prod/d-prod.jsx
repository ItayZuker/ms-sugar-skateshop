import React from "react"
import DPMainSection from "./d-p-main-section/d-p-main-section"
import DPRelatedSection from "./d-p-related-section/d-p-related-section"
import "./d-prod.scss"

const DProd = () => {

    /* JSX */
    return (
        <div className="d-prod-container">
            <DPMainSection/>
            <DPRelatedSection/>
        </div>
    )
}

export default DProd