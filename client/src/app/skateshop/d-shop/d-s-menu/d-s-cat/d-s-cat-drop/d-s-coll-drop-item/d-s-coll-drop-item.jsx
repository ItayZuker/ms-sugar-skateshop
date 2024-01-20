import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-s-coll-drop-item.scss"

const DSCollDropItem = ({ title, setOpen, collection }) => {

    /* Global */
    const {
        updateCollectionDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        const selected = collection.title.toLowerCase()
        updateCollectionDisplay({ selected, resetOption: false })
        setOpen(false)
    }

    /* JSX */
    return (
        <div
            className="d-s-coll-drop-item-container"
            onPointerDown={handlePointerDown}>
            <p>{title}</p>
        </div>
    )
}

export default DSCollDropItem