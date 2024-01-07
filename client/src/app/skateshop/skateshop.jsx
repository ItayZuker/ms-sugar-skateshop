import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/global"
import { ShopifyContext } from "../../context/shopify"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import MShop from "./m-shop/m-shop"
import DShop from "./d-shop/d-shop"
import "./skateshop.scss"

const Skateshop = () => {

    /* Global */
    const {
        media,
    } = useContext(GlobalContext)

    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Hooks */
    const location = useLocation();
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location, storeDisplay.collection.options])


    /* JSX */
    return (
        <div className="page skateshop">
            {media?.type === "mobile"
                ? <MShop/>
                : <DShop/>
            }
        </div>
    )
}

export default Skateshop