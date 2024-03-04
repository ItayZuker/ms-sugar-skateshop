import React from "react"
import CItemImg from "../../../c-item-img/c-item-img"
import CItemData from "../../../c-item-data/c-item-data"
import CItemQuantity from "../../../c-item-quantity/c-item-quantity"
import CItemPrice from "../../../c-item-price/c-item-price"
import CItemCan from "../../../c-item-can/c-item-can"
import "./d-c-item.scss"

const DCItem = ({ item, setTrigerDelete, index }) => {

    /* JSX */
    return (
        <div className="d-c-item-container">
            <CItemImg img={item?.variant?.image}/>
            <CItemData
                item={item}
                index={index}
                setTrigerDelete={setTrigerDelete}/>
            <div className="c-item-quantity-and-price-container">
            <CItemQuantity
                index={index}
                setTrigerDelete={setTrigerDelete}
                item={item}/>
            <CItemPrice item={item}/>
            </div>
            <CItemCan
                index={index}
                setTrigerDelete={setTrigerDelete}/>
        </div>
    )
}

export default DCItem