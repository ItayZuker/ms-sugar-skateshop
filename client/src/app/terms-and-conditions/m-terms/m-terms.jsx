import React from "react"
import MTermsTop from "./m-terms-top/m-terms-top"
import MTermsSection from "./m-terms-section/m-terms-section"
import "./m-terms.scss"

const MTerms = () => {

    /* JSX */
    return (
        <div className="m-terms-container">
            <MTermsTop/>
            <MTermsSection/>
        </div>
    )
}

export default MTerms