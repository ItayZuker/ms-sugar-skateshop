import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import ProductOption from "../../../../../components/product-option/product-option"
import DSFiltersDropdown from "./d-s-filters-dropdown/d-s-filters-dropdown"
import "./d-s-filters.scss"

const DSFilters = ({ collectionOptions }) => {

    /* Global */
    const {
        store,
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [categories, setCategories] = useState([])

    /* Triggers */
    useEffect(() => {
        updateCategories()
    }, [store.options])

    /* Functions */
    const updateCategories = () => {
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
            <DSFiltersDropdown
                categories={categories}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}/>
            {collectionOptions.length > 0
                ? collectionOptions?.map((option, i) => {
                    return <ProductOption key={i} option={option}/>
                    })
                : <p>No filters for category:
                    <br/><span>{storeDisplay?.collection?.selected}</span></p>
            }
        </div>
    )
}

export default DSFilters