import React from "react"
import "./d-shop-collection-dropdown-item.scss"

const DShopCollectionDropdownItem = ({ title, selectCollection, setOpen, id }) => {

    /* Functions */
    const handlePointerDown = () => {

        const paylod = {
            title,
            id
        }
        setOpen(false)
        selectCollection({ title, id })
    }

    /* JSX */
    return (
        <div
            className="d-shop-collection-dropdown-item-container"
            onPointerDown={handlePointerDown}>
            <p>{title}</p>
        </div>
    )
}

export default DShopCollectionDropdownItem