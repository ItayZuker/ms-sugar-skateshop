import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import DSFDropdownCategory from "./d-s-f-dropdown-category/d-s-f-dropdown-category"
import "./d-s-filters-dropdown.scss"

const DSFiltersDropdown = ({ setDropdownOpen, dropdownOpen, categories }) => {
        
    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const { translate } = useTranslation()

    /* Functions */
    const handlePointerDown = () => {
        setDropdownOpen(prev => !prev)
    }

    const title = storeDisplay?.collection?.selected?.toLowerCase().replace(" ", "_")

    /* JSX */
    return (
        <div className="d-s-filters-dropdown-container">
            <div
                onPointerDown={handlePointerDown}
                className="d-s-filters-dropdown-top">
                <p className={dropdownOpen ? "open" : ""}>{translate(`pages.skateshop.products.collections.${title}`)}</p>
            </div>
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