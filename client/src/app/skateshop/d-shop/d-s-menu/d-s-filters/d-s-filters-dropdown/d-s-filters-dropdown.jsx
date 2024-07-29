import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import DSFDropdownCategory from "./d-s-f-dropdown-category/d-s-f-dropdown-category"
import "./d-s-filters-dropdown.scss"

const DSFiltersDropdown = ({ setDropdownOpen, dropdownOpen, categories }) => {
        
    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const { t, fixForTranslation } = useTranslation()

    /* Functions */
    const handleClick = () => {
        setDropdownOpen(prev => !prev)
    }

    const title = fixForTranslation({ string: storeDisplay?.collection?.selected })

    /* JSX */
    return (
        <div className="d-s-filters-dropdown-container">
            <button
                aria-label={t(`pages.skateshop.products.collections.${title}.aria_label`)}
                onClick={handleClick}
                className="d-s-filters-dropdown-top">
                <p className={dropdownOpen ? "open" : ""}>{t(`pages.skateshop.products.collections.${title}.title`)}</p>
            </button>
            <ul className={dropdownOpen ? "open" : ""}>
                {categories?.map((cat, i) => {
                        return <DSFDropdownCategory
                                    key={i}
                                    cat={cat}
                                    setDropdownOpen={setDropdownOpen}/>
                    })}
            </ul>
        </div>
    )
}

export default DSFiltersDropdown