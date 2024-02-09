import React from "react"
import "./c-item-data.scss"

const CItemData = ({ item }) => {

    /* JSX */
    return (
        <div className="c-item-data-container">
            <p>{item?.title}</p>
            <p>{item?.variant?.title}</p>
        </div>
    )
}

export default CItemData