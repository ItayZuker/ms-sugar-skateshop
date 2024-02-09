import React from "react"
import CItemImg from "./c-item-img/c-item-img"
import CItemData from "./c-item-data/c-item-data"
import CItemQuantity from "./c-item-quantity/c-item-quantity"
import CItemPrice from "./c-item-price/c-item-price"
import "./c-item.scss"

const CItem = ({ item }) => {

    /* JSX */
    return (
        <div className="c-item-container">
            <div className="c-item-inner-container">
                <div className="c-item-part-one">
                    <CItemImg img={item?.variant?.image}/>
                    <CItemData item={item}/>
                </div>
                <div className="c-item-part-two">
                    <CItemQuantity item={item}/>
                    <CItemPrice item={item}/>
                </div>
            </div>
        </div>
    )
}

export default CItem