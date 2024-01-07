import React from "react"
import DShopCategorySelected from "./d-shop-category-selected/d-shop-category-selected"
import DShopCategoryDropdown from "./d-shop-category-dropdown/d-shop-category-dropdown"
import "./d-shop-category.scss"

const DShopCategory = ({ open, setOpen }) => {

    /* JSX */
    return (
        <div className="d-shop-category-container">
            <DShopCategorySelected
                open={open}
                setOpen={setOpen}/>
            <DShopCategoryDropdown
                open={open}
                setOpen={setOpen}/>
        </div>
    )
}

export default DShopCategory