import React, { useContext, useEffect } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import ShopFilter from "../../../../../../components/shop-filter/shop-filter"
import "./d-decks-filter.scss"

const DDecksFilter = () => {

    /* Global Variables */
    const {
        store,
        storeDisplay,
        getProductVariantsByHandle
    } = useContext(ShopifyContext)

    /* Triggers */
    useEffect(() => {
        updateVariants()
    }, [])

    /* Functions */
    const updateVariants = () => {

        console.log("storeDisplay: ", storeDisplay.collection);
        
    }

    /* JSX */
    return (
        <div className="d-decks-filter-container">
            <ShopFilter/>
            <ShopFilter/>
        </div>
    )
}

export default DDecksFilter