import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import ProductOption from "../../../../../components/product-option/product-option"
import "./d-shop-options.scss"

const DShopFilters = ({ open }) => {

    /* Global Variables */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale Variables */
    const [collectionOptions, setCollectionOptions] = useState([])

    /* Triggers */
    useEffect(() => {
        updateCollectionOptions()
    }, [storeDisplay])

    /* Functions */
    const updateCollectionOptions = () => {
        const selected = storeDisplay?.collection?.options?.find(option => (
            option.title.toLowerCase() === storeDisplay.collection.selected.toLowerCase()
        ))
        setCollectionOptions(selected?.options || [])
    }

    /* JSX */
    return (
        <div className={"d-shop-options-container " + (open ? "category-open" : "")}>
            {collectionOptions?.map((option, i) => {
                return <ProductOption key={i} option={option}/>
             })}
        </div>
    )
}

export default DShopFilters