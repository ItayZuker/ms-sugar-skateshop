import React from "react"
import "./c-item-can.scss"

const CItemCan = ({ setTrigerDelete, index }) => {

    /* Functions */
    const handlePointerDown = () => {
        setTrigerDelete(index)
    }

    /* JSX */
    return (
        <div onPointerDown={handlePointerDown} className="c-item-can-container">
            <span className="material-symbols-outlined">delete</span>
        </div>
    )
}

export default CItemCan