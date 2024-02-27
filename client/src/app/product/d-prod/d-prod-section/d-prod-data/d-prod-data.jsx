import React from "react"
import DSProdHeader from "./d-s-prod-header/d-s-prod-header"
import DSProdOpt from "./d-s-prod-opt/d-s-prod-opt"
import DSProdFooter from "./d-s-prod-footer/d-s-prod-footer"
import DSProdPrice from "./d-s-prod-price/d-s-prod-price"
import DSProdStock from "./d-s-prod-stock/d-s-prod-stock"
import DSProdShare from "./d-s-prod-share/d-s-prod-share"
import DSProdVariant from "./d-s-prod-variant/d-s-prod-variant"
import DSProdGoToCart from "./d-s-prod-go-to-cart/d-s-prod-go-to-cart"
import DSProdShipping from "./d-s-prod-shipping/d-s-prod-shipping"
import "./d-prod-data.scss"
import PDesctiption from "../../../parts/p-desctiption/p-desctiption"

const DProdDisplayData = ({ quantity, setQuantity }) => {

    /* JSX */
    return (
        <div className="d-prod-data-container">
            <div className="d-prod-data-inner-container">
                <div className="d-prod-info-container">
                    <DSProdHeader/>
                    <PDesctiption/>
                    <DSProdOpt/>
                </div>
                <div className="d-prod-sum-container">
                    <DSProdPrice/>
                    <DSProdStock/>
                    <DSProdShare/>
                    <DSProdShipping/>
                    <DSProdVariant/>
                    <DSProdGoToCart/>
                </div>
            </div>
            <DSProdFooter quantity={quantity} setQuantity={setQuantity}/>
        </div>
    )
}

export default DProdDisplayData