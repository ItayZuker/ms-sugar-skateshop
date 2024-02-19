import React, { useState } from "react"
import DShopMenu from "./d-s-menu/d-s-menu"
import DShopDisplay from "./d-s-display/d-s-display"
import "./d-shop.scss"

const DShop = () => {
    
    /* Locale */
    const [tab, setTab] = useState("categories")

    /* JSX */
    return (
        <div className="d-shop-container">
            <div className="d-shop-inner-container one">
                <DShopMenu setTab={setTab} tab={tab}/>
            </div>
            <div className="d-shop-inner-container two">
                <DShopDisplay tab={tab}/>
            </div>
        </div>
    )
}

export default DShop