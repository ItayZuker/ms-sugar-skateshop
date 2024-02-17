import React from "react"
import "./c-item-data.scss"

const CItemData = ({ item }) => {

    /* JSX */
    return (
        <div className="c-item-data-container">
            <p><span className="material-symbols-outlined">keyboard_return</span></p>
            <div className="c-item-data-inner-container">
                <p>{item?.title}</p>
                <p>{item?.variant?.title}</p>
            </div>
        </div>
    )
}

export default CItemData