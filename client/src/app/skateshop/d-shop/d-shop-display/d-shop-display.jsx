import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./d-shop-display.scss"

const DShopDisplay = () => {

    /* Globale Variables */
    const { storeDisplay } = useContext(ShopifyContext)

    /* Locale Variables */
    const [products, setProducts] = useState([])

    /* Triggers */
    useEffect(() => {
        updateProductsDisplay()
    }, [storeDisplay])

    /* Functions */
    const updateProductsDisplay = () => {
        
    }

    /* JSX */
    return (
        <div className="d-shop-display-container">
            <h1>{storeDisplay?.collection?.title}</h1>
        </div>
    )
}

export default DShopDisplay