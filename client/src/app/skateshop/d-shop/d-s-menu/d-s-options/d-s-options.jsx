import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import ProductOption from "../../../../../components/product-option/product-option"
import "./d-s-options.scss"

const DSFilters = ({ open }) => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [collectionOptions, setCollectionOptions] = useState([])

    /* Triggers */
    useEffect(() => {
        updateCollectionOptions()
    }, [storeDisplay])

    /* Functions */    
    const getOptions = ({ selectedOptions }) => {
        const optionsCopy = JSON.parse(JSON.stringify(selectedOptions));
    
        const activeOptions = optionsCopy.reduce((acc, option) => {
            const activeValue = option.values.find(value => value.active)?.value;
            if (activeValue) acc.push({ name: option.name, value: activeValue });
            return acc;
        }, []);
    
        const hasActiveValues = activeOptions.length > 0;
    
        optionsCopy.forEach(option => {
            const isActiveOption = activeOptions.some(opt => opt.name === option.name);
    
            option.values.forEach(value => {
                if (isActiveOption) {
                    value.lock = !value.active;
                } else {
                    if (hasActiveValues) {
                        value.lock = !storeDisplay.collection.products.some(product => 
                            product.variants.some(variant => 
                                variant.available && 
                                activeOptions.every(activeOpt => 
                                    variant.selectedOptions.some(selectedOption => 
                                        selectedOption.name === activeOpt.name && selectedOption.value === activeOpt.value
                                    )
                                ) &&
                                variant.selectedOptions.some(selectedOption => 
                                    selectedOption.name === option.name && selectedOption.value === value.value
                                )
                            )
                        );
                    } else {
                        value.lock = false;
                    }
                }
            });
        });
    
        return optionsCopy;
    }

    const updateCollectionOptions = () => {

        const selected = storeDisplay?.collection?.options?.find(option => (
            option.title.toLowerCase() === storeDisplay.collection.selected.toLowerCase()
        ));

        const options = getOptions({ selectedOptions: selected?.options || [] })
        setCollectionOptions(options || []);
    
    }

    /* JSX */
    return (
        <div className={"d-s-options-container " + (open ? "cat-open" : "")}>
            {collectionOptions?.map((option, i) => {
                return <ProductOption key={i} option={option}/>
             })}
        </div>
    )
}

export default DSFilters