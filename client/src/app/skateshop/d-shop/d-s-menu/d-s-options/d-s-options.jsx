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
    const getAvailableOptions = ({ products }) => {
        const optionsCollection = {};

        products.forEach(product => {
            const availableVariants = product.variants.filter(variant => variant.available);

            availableVariants.forEach(variant => {
                variant.selectedOptions.forEach(option => {
                    if (!optionsCollection[option.name.toLowerCase()]) {
                        optionsCollection[option.name.toLowerCase()] = [];
                    }

                    if (!optionsCollection[option.name.toLowerCase()].includes(option.value.toLowerCase())) {
                        optionsCollection[option.name.toLowerCase()].push(option.value.toLowerCase());
                    }
                });
            });
        });

        return optionsCollection;
    }

    
    const getOptions = ({ selectedOptions }) => {
        // Create a deep copy of selectedOptions to maintain immutability
        const optionsCopy = JSON.parse(JSON.stringify(selectedOptions));
    
        // Extract active values and their corresponding option names
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
                    // Lock all non-active values in the option with an active value
                    value.lock = !value.active;
                } else {
                    // For other options, check if each value can form a valid variant
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
                        // If no active values, unlock all values
                        value.lock = false;
                    }
                }
            });
        });
    
        return optionsCopy;
    }
        

    // const getOptions = ({ selectedOptions }) => {
    //     // Extract active values and their corresponding option names
    //     const activeOptions = selectedOptions.reduce((acc, option) => {
    //         const activeValue = option.values.find(value => value.active)?.value;
    //         if (activeValue) acc.push({ name: option.name, value: activeValue });
    //         return acc;
    //     }, []);
    
    //     const hasActiveValues = activeOptions.length > 0;
    
    //     selectedOptions.forEach(option => {
    //         const isActiveOption = activeOptions.some(opt => opt.name === option.name);
    
    //         console.log("isActiveOption: ", isActiveOption)
    //         option.values.forEach(value => {
    //             if (isActiveOption) {
    //                 // Lock all non-active values in the option with an active value
    //                 value.lock = !value.active;
    //             } else {
    //                 // For other options, check if each value can form a valid variant
    //                 if (hasActiveValues) {
    //                     value.lock = !storeDisplay.collection.products.some(product => 
    //                         product.variants.some(variant => 
    //                             variant.available && 
    //                             activeOptions.every(activeOpt => 
    //                                 variant.selectedOptions.some(selectedOption => 
    //                                     selectedOption.name === activeOpt.name && selectedOption.value === activeOpt.value
    //                                 )
    //                             ) &&
    //                             variant.selectedOptions.some(selectedOption => 
    //                                 selectedOption.name === option.name && selectedOption.value === value.value
    //                             )
    //                         )
    //                     );
    //                 } else {
    //                     // If no active values, unlock all values
    //                     value.lock = false;
    //                 }
    //             }
    //         });
    //     });
    
    //     return selectedOptions;
    // }
    
    // const getOptions = ({ selectedOptions }) => {
    //     const activeOptions = selectedOptions.reduce((acc, option) => {
    //         const activeValue = option.values.find(value => value.active)?.value;
    //         if (activeValue) acc.push({ name: option.name, value: activeValue });
    //         return acc;
    //     }, []);
    
    //     const hasActiveValues = activeOptions.length > 0;
    
    //     selectedOptions.forEach(option => {
    //         const isActiveOption = activeOptions.some(opt => opt.name === option.name);
    
    //         option.values.forEach(value => {
    //             if (isActiveOption) {
    //                 value.lock = !value.active;
    //             } else {
    //                 if (hasActiveValues) {
    //                     value.lock = !storeDisplay.collection.products.some(product => 
    //                         product.variants.some(variant => 
    //                             variant.available && 
    //                             activeOptions.every(activeOpt => 
    //                                 variant.selectedOptions.some(selectedOption => 
    //                                     selectedOption.name === activeOpt.name && selectedOption.value === activeOpt.value
    //                                 )
    //                             ) &&
    //                             variant.selectedOptions.some(selectedOption => 
    //                                 selectedOption.name === option.name && selectedOption.value === value.value
    //                             )
    //                         )
    //                     );
    //                 } else {
    //                     value.lock = false;
    //                 }
    //             }
    //         });
    //     });
    
    //     return selectedOptions;
    // }

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