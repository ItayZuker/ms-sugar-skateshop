import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import DShopProductPreview from "./d-shop-product-preview/d-shop-product-preview"
import "./d-shop-display.scss"

const DShopDisplay = () => {

    /* Globale Variables */
    const {
        store,
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale Variables */
    const [displayProducts, setDisplayProducts] = useState([])

    /* Triggers */
    useEffect(() => {
        updateDisplayProducts()
    }, [storeDisplay]) 

    /* Functions */
    const getFilteredCollection = ({ products, activeOptions }) => {
        if (!activeOptions || Object.values(activeOptions).every(option => option.length === 0)) {
            return products;
        }

        return products.filter(product => {
            return product.variants.some(variant => {
                if (!variant.available) {
                    return false
                }

                return Object.entries(activeOptions).every(([optionName, activeValues]) => {
                    if (activeValues.length === 0) {
                        return true;
                    }
                    const variantOption = variant.selectedOptions.find(opt => opt.name.toLowerCase() === optionName.toLowerCase());
                    return variantOption && activeValues.map(val => val.toLowerCase()).includes(variantOption.value.toLowerCase());
                });
            });
        });
    };

    const getActiveOption = ({ options }) => {

        const optionsMap = {};

        options?.forEach(option => {
            if (!optionsMap[option.name]) {
                optionsMap[option.name] = new Set();
            }
    
            option.values.forEach(val => {
                if (val.active) {
                    optionsMap[option.name].add(val.value);
                }
            });
        });
    
        const optionsWithActiveValues = {};
        for (const [key, value] of Object.entries(optionsMap)) {
            optionsWithActiveValues[key] = Array.from(value);
        }
    
        return optionsWithActiveValues;
    }

    const updateDisplayProducts = () => {

        const collection = store?.collections?.find(collection => collection?.title?.toLowerCase() === storeDisplay?.collection?.selected?.toLowerCase())

        const selectedCollection = storeDisplay?.collection?.options?.find(option => option?.title?.toLowerCase() === storeDisplay?.collection?.selected?.toLowerCase())
        const activeOptions = getActiveOption({ options: selectedCollection?.options })
        const products = getFilteredCollection({ products: collection?.products || [], activeOptions })

        setDisplayProducts(products || [])
    }

    /* JSX */
    return (
        <div className="d-shop-display-container">
            {displayProducts?.map((product, i) => {
                return <DShopProductPreview key={i} product={product}/>
            })}
        </div>
    )
}

export default DShopDisplay