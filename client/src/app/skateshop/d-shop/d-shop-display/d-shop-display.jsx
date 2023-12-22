import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./d-shop-display.scss"

const DShopDisplay = () => {

    /* Globale Variables */
    const { store } = useContext(ShopifyContext)

    /* Locale Variables */
    const [products, setProducts] = useState([])

    /* Triggers */
    useEffect(() => {
        updateProductsDisplay()
    }, [store])

    /* Functions */
    const updateProductsDisplay = () => {
        if (store.display.collection === "all products") {
            console.log(1);
            // get all products
        } else {
            console.log(2);
            // const collection = getCollection()
        }
    }

    /* JSX */
    return (
        <div className="d-shop-display-container">
            <h1>{store.display.collection.title}</h1>
        </div>
    )
}

export default DShopDisplay