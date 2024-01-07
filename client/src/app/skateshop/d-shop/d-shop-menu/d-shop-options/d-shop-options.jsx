import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import ProductOption from "../../../../../components/product-option/product-option"
import "./d-shop-options.scss"

const DShopFilters = ({ open }) => {

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

        const availableOptions = getAvailableOptions({ products: storeDisplay.collection.products });

        return selectedOptions?.map(option => {
            return {
                name: option.name,
                values: option.values?.map(val => {
                    const activeOptionValues = availableOptions[option.name.toLowerCase()] || [];
                    const lockActive = option.values?.length === 1;
                    const lockDeActive = !activeOptionValues.includes(val.value.toLowerCase());
                    return {
                        ...val,
                        lockActive,
                        lockDeActive
                    };
                })
            };
        }).filter(Boolean)
    }

    const updateCollectionOptions = () => {

        const selected = storeDisplay?.collection?.options?.find(option => (
            option.title.toLowerCase() === storeDisplay.collection.selected.toLowerCase()
        ));

        const options = getOptions({ selectedOptions: selected?.options || [] })
        setCollectionOptions(options || [])
    
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