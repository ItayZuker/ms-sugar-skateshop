import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import ProductFilter from "../../../../../components/product-option/product-option"
import DSFiltersDrop from "./d-s-filters-drop/d-s-filters-drop"
import "./d-s-filters.scss"

const DSFilters = () => {

    /* Global */
    const {
        store,
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [collectionOptions, setCollectionOptions] = useState([])
    const [categories, setCategories] = useState([])

    /* Triggers */
    useEffect(() => {
        updateOptions()
    }, [store])

    useEffect(() => {
        updateCollectionOptions()
    }, [storeDisplay])

    /* Functions */    
    const getOptions = ({ selectedOptions }) => {
        const optionsCopy = JSON.parse(JSON.stringify(selectedOptions));
    
        const activeOptions = optionsCopy?.reduce((acc, option) => {
            const activeValue = option?.values?.find(value => value?.active)?.value;
            if (activeValue) acc?.push({ name: option?.name, value: activeValue });
            return acc;
        }, []);
    
        const hasActiveValues = activeOptions?.length > 0;
    
        optionsCopy.forEach(option => {
            const isActiveOption = activeOptions?.some(opt => opt?.name === option?.name);
    
            option?.values?.forEach(value => {
                if (isActiveOption) {
                    value.lock = !value?.active;
                } else {
                    if (hasActiveValues) {
                        value.lock = !storeDisplay?.collection?.products?.some(product => 
                            product?.variants?.some(variant => 
                                variant?.available && 
                                activeOptions?.every(activeOpt => 
                                    variant?.selectedOptions?.some(selectedOption => 
                                        selectedOption?.name === activeOpt?.name && selectedOption?.value === activeOpt?.value
                                    )
                                ) &&
                                variant?.selectedOptions.some(selectedOption => 
                                    selectedOption?.name === option?.name && selectedOption?.value === value?.value
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
            option?.title?.toLowerCase() === storeDisplay?.collection?.selected?.toLowerCase()
        ));

        const options = getOptions({ selectedOptions: selected?.options || [] })
        setCollectionOptions(options || []);
    
    }

    const updateOptions = () => {
        if (store?.options?.length > 0) {
            const sort = ["all products", "decks", "wheels", "bearings", "trucks", "grips", "hardware"] 
            setCategories(() => {
                return store.options
                    .filter(option => sort.includes(option?.title?.toLowerCase()))
                    .sort((a, b) => sort.indexOf(a?.title?.toLowerCase()) - sort?.indexOf(b?.title?.toLowerCase()))
            })
        }
    }

    /* JSX */
    return (
        <div className="d-s-filters-container">
            <DSFiltersDrop
                categories={categories}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}/>
            {collectionOptions.length > 0
                ? collectionOptions?.map((option, i) => {
                    return <ProductFilter key={i} option={option}/>
                    })
                : <p>No filters for category:
                    <br/><span>{storeDisplay?.collection?.selected}</span></p>
            }
        </div>
    )
}

export default DSFilters