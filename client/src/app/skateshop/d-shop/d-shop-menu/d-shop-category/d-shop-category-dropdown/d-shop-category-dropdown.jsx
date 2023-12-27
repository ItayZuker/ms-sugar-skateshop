import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import DShopCollectionDropdownItem from "./d-shop-collection-dropdown-item/d-shop-collection-dropdown-item"
import "./d-shop-category-dropdown.scss"

const DShopCategoryDropdown = ({ open, setOpen }) => {

    /* Global Variables */
    const {
        store,
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className={"d-shop-category-dropdown-container " + (open ? "open" : "")}>
            {store.options.map((option, i) => {
                return <DShopCollectionDropdownItem
                    key={i}
                    setOpen={setOpen}
                    collection={option}
                    title={option.title}/>
            })}
        </div>
    )
}

export default DShopCategoryDropdown