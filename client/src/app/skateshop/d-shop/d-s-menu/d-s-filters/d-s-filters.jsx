import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import { useTranslation } from "../../../../../hooks/useTranslation"
import ProductOption from "../../../../../components/product-option/product-option"
import DSFiltersDropdown from "./d-s-filters-dropdown/d-s-filters-dropdown"
import "./d-s-filters.scss"

const DSFilters = ({ collectionOptions }) => {

    /* Global */
    const { store, storeDisplay } = useContext(ShopifyContext)
    const { t, fixForTranslation } = useTranslation()

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(() => {
        const collection = storeDisplay.collection.selected.toLowerCase()
        return collection === "all products" || collection === ""
    })
    const [categories, setCategories] = useState([])

    /* Triggers */
    useEffect(() => {
        updateCategories()
    }, [store.options])

    /* Functions */
    const updateCategories = () => {
        if (store?.options?.length > 0) {
            const sort = ["all products", "decks", "wheels", "bearings", "grips"] 
            setCategories(() => {
                return store.options
                    .filter(option => sort.includes(option?.title?.toLowerCase()))
                    .sort((a, b) => sort.indexOf(a?.title?.toLowerCase()) - sort?.indexOf(b?.title?.toLowerCase()))
            })
        }
    }

    const title = fixForTranslation({ string: storeDisplay?.collection?.selected })

    /* JSX */
    return (
        <div className="d-s-filters-container">
            <DSFiltersDropdown
                categories={categories}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}/>
            {collectionOptions.length > 0
                ? collectionOptions?.map((option, i) => {
                    return <ProductOption
                                key={i}
                                option={option}
                                dropdownOpen={dropdownOpen}/>
                    })
                : <p>{t("pages.skateshop.products.no_filters_message")}
                    <br/><span>{t(`pages.skateshop.products.collections.${title}`)}</span></p>
            }
        </div>
    )
}

export default DSFilters