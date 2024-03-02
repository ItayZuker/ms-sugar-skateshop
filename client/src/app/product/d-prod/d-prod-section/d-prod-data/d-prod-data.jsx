import React from "react"
import DSProdHeader from "./d-s-prod-header/d-s-prod-header"
import DSProdFooter from "./d-s-prod-footer/d-s-prod-footer"
import DSProdVariant from "./d-s-prod-variant/d-s-prod-variant"
import PDesctiption from "../../../parts/p-desctiption/p-desctiption"
import PStock from "../../../parts/p-stock/p-stock"
import POptions from "../../../parts/p-options/p-options"
import PPrice from "../../../parts/p-price/p-price"
import PShipping from "../../../parts/p-shipping/p-shipping"
import PGoToCart from "../../../parts/p-go-to-cart/p-go-to-cart"
import "./d-prod-data.scss"

const DProdDisplayData = ({ quantity, setQuantity }) => {

    /* JSX */
    return (
        <div className="d-prod-data-container">
            <div className="d-prod-data-inner-container">
                <div className="d-prod-info-container">
                    <DSProdHeader/>
                    <PDesctiption/>
                    <POptions/>
                </div>
                <div className="d-prod-sum-container">
                    <PPrice/>
                    <PStock/>
                    <PShipping/>
                    <DSProdVariant/>
                    <PGoToCart/>
                </div>
            </div>
            <DSProdFooter quantity={quantity} setQuantity={setQuantity}/>
        </div>
    )
}

export default DProdDisplayData