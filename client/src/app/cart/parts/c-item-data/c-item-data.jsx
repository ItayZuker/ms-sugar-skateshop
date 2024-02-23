import React, { useContext } from "react"
import CItemPrice from "../../parts/c-item-price/c-item-price"
import CItemQuantity from "../../parts/c-item-quantity/c-item-quantity"
import "./c-item-data.scss"
import { GlobalContext } from "../../../../context/global"

const CItemData = ({ item, setTrigerDelete, index }) => {

    /* Global */
    const {
        media
    } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="c-item-data-container">
            <p><span className="material-symbols-outlined">keyboard_return</span></p>
            <div className="c-item-data-inner-container">
                <div className="c-item-data-inner-one">
                    <p>{item?.title}</p>
                    <p>{item?.variant?.title}</p>
                    { media.type === "mobile" && <CItemPrice item={item}/> }
                </div>
                { media.type === "mobile" && <CItemQuantity
                                                index={index}
                                                setTrigerDelete={setTrigerDelete}
                                                item={item}/>}
            </div>
        </div>
    )
}

export default CItemData