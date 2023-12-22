import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-shop-category-selected.scss"

const DShopCategorySelected = ({ open, setOpen }) => {

    /* Global Variables */
    const { store } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        setOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div
            className="d-shop-category-selected-container"
            onPointerDown={handlePointerDown}>
            <h4>{store.display.collection.title}</h4>
            <div className={"arrow " + (open ? "open" : "")}/>
        </div>
    )
}

export default DShopCategorySelected