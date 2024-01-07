import React, { useContext, useState, useEffect } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import DShopProdOpt from "./d-shop-prod-opt/d-shop-prod-opt"
import "./d-shop-product-opt-select.scss"

const DShopProdOptSelect = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [productOptions, setProductOptions] = useState([])

    /* Triggers */
    useEffect(() => {
        updateProductOptions()
    }, [storeDisplay?.product, storeDisplay?.variant])

    /* Functions */
    const updateProductOptions = () => {
        const selectedVariant = storeDisplay?.variant;
        const allVariants = storeDisplay?.product?.variants || [];

        const selectedOptions = selectedVariant.selectedOptions.reduce((acc, option) => {
            acc[option.name] = option.value;
            return acc;
        }, {});
    
        const options = {};
    
        for (const variant of allVariants) {
            if (variant.available) {
                for (const option of variant.selectedOptions) {
                    const { name, value } = option;
                    
                    if (!options[name]) {
                        options[name] = {};
                    }
    
                    if (!options[name][value]) {
                        const isSelected = selectedOptions[name] === value;
                        options[name][value] = { selected: isSelected, active: false };
                    }
                }
            }
        }
    
        for (const [optionName, values] of Object.entries(options)) {
            for (const [value, details] of Object.entries(values)) {
                const tempSelectedOptions = { ...selectedOptions, [optionName]: value };
                
                for (const variant of allVariants) {
                    if (variant.available && variant.selectedOptions.every(option =>
                        tempSelectedOptions[option.name] === option.value
                    )) {
                        details.active = true;
                        break;
                    }
                }
            }
        }
    
        const optionsArray = Object.entries(options).map(([name, values]) => ({
            name,
            values: Object.entries(values).map(([value, details]) => ({ options, optionName: name, value, ...details }))
        }));

        setProductOptions(optionsArray);
    }

    /* JSX */
    return (
        <div className="d-shop-prod-opt-select-container">
            {productOptions.map((option, i) => {
                return <DShopProdOpt key={i} option={option}/>
            })}
        </div>
    )
}

export default DShopProdOptSelect