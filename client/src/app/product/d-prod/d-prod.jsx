import React from "react"
import DProdSection from "./d-prod-section/d-prod-section"
import DProdRelatedProdSection from "./d-prod-related-prod-section/d-prod-related-prod-section"
import "./d-prod.scss"

const DProd = () => {

    /* JSX */
    return (
        <div className="d-prod-container">
            <DProdDisplaySection/>
            <DProdRelatedProdSection/>
        </div>
    )
}

export default DProd