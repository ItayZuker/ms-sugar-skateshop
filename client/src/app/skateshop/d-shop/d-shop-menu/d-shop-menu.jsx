import React, { useState } from "react"
import DShopCategory from "./d-shop-category/d-shop-category"
import DShopFilters from "./d-shop-options/d-shop-options"
import "./d-shop-menu.scss"

const DShopMenu = () => {

    /* Locale Variables */
    const [open, setOpen] = useState(false)

    /* JSX */
    return (
        <div className="d-shop-menu-container">
            <div className="inner-d-shop-menu-container">
                <DShopCategory open={open} setOpen={setOpen}/>
                <DShopFilters open={open}/>
            </div>
        </div>
    )
}

export default DShopMenu