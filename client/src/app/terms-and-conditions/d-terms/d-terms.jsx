import React from "react"
import DTermsNav from "./d-terms-nav/d-terms-nav"
import DTermsHeader from "./d-terms-header/d-terms-header"
import DTermsSection from "./d-terms-section/d-terms-section"
import "./d-terms.scss"

const DTerms = () => {

    /* JSX */
    return (
        <div className="d-terms-container">
            <div className="d-terms-inner-container-one">
                <DTermsNav/>
            </div>
            <div className="d-terms-inner-container-two">
                <DTermsHeader/>
                <DTermsSection/>
            </div>
        </div>
    )
}

export default DTerms