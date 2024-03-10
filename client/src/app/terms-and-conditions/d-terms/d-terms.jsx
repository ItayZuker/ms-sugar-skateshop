import React from "react"
import DTermsNav from "./d-terms-nav/d-terms-nav"
import DTermsHeader from "./d-terms-header/d-terms-header"
import DTermsMain from "./d-terms-main/d-terms-main"
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
                <DTermsMain/>
            </div>
        </div>
    )
}

export default DTerms