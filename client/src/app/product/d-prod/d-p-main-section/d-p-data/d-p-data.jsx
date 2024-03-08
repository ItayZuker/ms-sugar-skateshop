import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import DPHeader from "./d-p-header/d-p-header"
import DPFooter from "./d-p-footer/d-p-footer"
import DPVariant from "./d-p-variant/d-p-variant"
import PDesctiption from "../../../parts/p-desctiption/p-desctiption"
import PStock from "../../../parts/p-stock/p-stock"
import POptions from "../../../parts/p-options/p-options"
import PPrice from "../../../parts/p-price/p-price"
import PShipping from "../../../parts/p-shipping/p-shipping"
import PGoToCart from "../../../parts/p-go-to-cart/p-go-to-cart"
import "./d-p-data.scss"

const DPData = ({ quantity, setQuantity, setNotifyWhenAvailable }) => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-p-data-container">
            <div className="d-p-data-inner-container">
                <div className="d-p-info-container">
                    <DPHeader/>
                    <PDesctiption/>
                    <POptions/>
                </div>
                <div className="d-p-sum-container">
                    <PPrice/>
                    <PStock/>
                    { storeDisplay?.product?.availableForSale && <PShipping/> }
                    { storeDisplay?.product?.availableForSale && <DPVariant/> }
                    { storeDisplay?.product?.availableForSale && <PGoToCart/> }
                </div>
            </div>
            <DPFooter
                setNotifyWhenAvailable={setNotifyWhenAvailable}
                quantity={quantity}
                setQuantity={setQuantity}/>
        </div>
    )
}

export default DPData