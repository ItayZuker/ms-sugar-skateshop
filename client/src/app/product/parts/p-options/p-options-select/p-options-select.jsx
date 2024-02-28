import React, { useContext, useState, useEffect } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import POption from "./p-option/p-option"
import "./p-options-select.scss"

const POptionsSelect = () => {

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
        <div className="p-options-select-container">
            {productOptions.map((option, i) => {
                return <POption key={i} option={option}/>
            })}
        </div>
    )
}

export default POptionsSelect