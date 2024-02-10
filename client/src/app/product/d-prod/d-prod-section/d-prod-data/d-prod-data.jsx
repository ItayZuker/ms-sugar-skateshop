import React from "react"
import DSProdHeader from "./d-s-prod-header/d-s-prod-header"
import DSProdDesctiption from "./d-s-prod-desctiption/d-s-prod-desctiption"
import DSProdOpt from "./d-s-prod-opt/d-s-prod-opt"
import DSProdFooter from "./d-s-prod-footer/d-s-prod-footer"
import DSProdPrice from "./d-s-prod-price/d-s-prod-price"
import DSProdStock from "./d-s-prod-stock/d-s-prod-stock"
import DSProdShare from "./d-s-prod-share/d-s-prod-share"
import DSProdVariant from "./d-s-prod-variant/d-s-prod-variant"
import DSProdShipping from "./d-s-prod-shipping/d-s-prod-shipping"
import "./d-prod-data.scss"

const DProdDisplayData = () => {

    /* JSX */
    return (
        <div className="d-prod-data-container">
            <div className="d-prod-data-inner-container">
                <div className="d-prod-info-container">
                    <DSProdHeader/>
                    <DSProdDesctiption/>
                    <DSProdOpt/>
                </div>
                <div className="d-prod-sum-container">
                    <DSProdPrice/>
                    <DSProdStock/>
                    <DSProdShare/>
                    <DSProdShipping/>
                    <DSProdVariant/>
                </div>
            </div>
            <DSProdFooter/>
        </div>
    )
}

export default DProdDisplayData