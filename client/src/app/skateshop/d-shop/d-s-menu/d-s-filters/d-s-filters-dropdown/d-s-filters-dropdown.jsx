import React, { useContext } from "react"
import DSFDropdownCategory from "./d-s-f-dropdown-category/d-s-f-dropdown-category"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-filters-dropdown.scss"

const DSFiltersDropdown = ({ setDropdownOpen, dropdownOpen, categories }) => {
        
    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        setDropdownOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div className="d-s-filters-dropdown-container">
            <div
                onPointerDown={handlePointerDown}
                className="d-s-filters-dropdown-top">
                <p className={dropdownOpen ? "open" : ""}>{storeDisplay?.collection?.selected}</p>
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