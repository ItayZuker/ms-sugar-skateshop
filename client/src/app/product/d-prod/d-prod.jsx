import React from "react"
import DProdSection from "./d-prod-section/d-prod-section"
import DProdRelatedSection from "./d-prod-related-section/d-prod-related-section"
import "./d-prod.scss"

const DProd = () => {

    /* JSX */
    return (
        <div className="d-prod-container">
            <DProdSection/>
            <DProdRelatedSection/>
        </div>
    )
}

export default DProd