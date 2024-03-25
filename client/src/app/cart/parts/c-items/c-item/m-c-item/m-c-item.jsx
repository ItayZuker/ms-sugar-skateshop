import React from "react"
import CItemImg from "../../../c-item-img/c-item-img"
import CItemData from "../../../c-item-data/c-item-data"
import CItemPrice from "../../../c-item-price/c-item-price"
import "./m-c-item.scss"

const MCItem = ({ item, setTrigerDelete, index }) => {

    /* JSX */
    return (
        <div className="m-c-item-container">
            <CItemImg
                img={item?.variant?.image}
                item={item}/>
            <CItemData
                item={item}
                index={index}
                setTrigerDelete={setTrigerDelete}/>
            <CItemPrice item={item}/>
        </div>
    )
}

export default MCItem