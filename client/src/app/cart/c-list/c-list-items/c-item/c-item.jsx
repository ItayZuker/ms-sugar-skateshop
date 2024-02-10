import React from "react"
import CItemLoading from "./c-item-loading/c-item-loading"
import CItemDelete from "./c-item-delete/c-item-delete"
import CItemCan from "./c-item-can/c-item-can"
import CItemImg from "./c-item-img/c-item-img"
import CItemData from "./c-item-data/c-item-data"
import CItemQuantity from "./c-item-quantity/c-item-quantity"
import CItemPrice from "./c-item-price/c-item-price"
import "./c-item.scss"

const CItem = ({ item, trigerDelete, setTrigerDelete, index, loading, setLoading }) => {

    /* JSX */
    return (
        <div className="c-item-container">
            <CItemLoading
                index={index}
                loading={loading}
                setLoading={setLoading}/>
            <CItemDelete
                setLoading={setLoading}
                index={index}
                trigerDelete={trigerDelete}
                setTrigerDelete={setTrigerDelete}
                item={item}/>
            <div className="c-item-inner-container">
                <div className="c-item-part-one">
                    <CItemImg img={item?.variant?.image}/>
                    <CItemData item={item}/>
                </div>
                <div className="c-item-part-two">
                    <CItemQuantity
                        index={index}
                        setTrigerDelete={setTrigerDelete}
                        item={item}/>
                    <CItemPrice item={item}/>
                    <CItemCan
                        index={index}
                        setTrigerDelete={setTrigerDelete}/>
                </div>
            </div>
        </div>
    )
}

export default CItem