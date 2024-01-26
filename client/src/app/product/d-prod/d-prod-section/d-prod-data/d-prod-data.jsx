import React from "react"
import DSProdHeader from "./d-s-prod-header/d-s-prod-header"
import DSProdDesctiption from "./d-s-prod-desctiption/d-s-prod-desctiption"
import DSProdOpt from "./d-s-prod-opt/d-s-prod-opt"
import DSProdFooter from "./d-s-prod-footer/d-s-prod-footer"
import "./d-prod-data.scss"

const DProdDisplayData = () => {

    /* JSX */
    return (
        <div className="d-prod-data-container">
            <DSProdHeader/>
            <DSProdDesctiption/>
            <DSProdOpt/>
            <DSProdFooter/>
        </div>
    )
}

export default DProdDisplayData