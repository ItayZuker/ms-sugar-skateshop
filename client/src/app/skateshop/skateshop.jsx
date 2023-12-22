import React, { useContext, useEffect } from "react"
import { ShopifyContext } from "../../context/shopify"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import "./skateshop.scss"

const Skateshop = () => {

    /* Global Variables */
    const { products } = useContext(ShopifyContext)

    /* Hooks */
    const location = useLocation();
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    console.log("products: ", products);

    /* JSX */
    return (
        <div className="page skateshop">
            <h1>Skateshop</h1>
        </div>
    )
}

export default Skateshop