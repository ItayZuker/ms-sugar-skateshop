import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-category-selected.scss"

const DShopCategorySelected = ({ open, setOpen }) => {

    /* Global Variables */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        setOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div
            className={"d-shop-category-selected-container " + (storeDisplay.collection.selected ? "active" : "")}
            onPointerDown={handlePointerDown}>
            <h4>{storeDisplay.collection.selected}</h4>
            <div className={"arrow " + (open ? "open " : "") + (storeDisplay.collection.selected ? "active " : "")}/>
        </div>
    )
}

export default DShopCategorySelected