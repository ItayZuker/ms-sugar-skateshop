import React, { useContext } from "react"
import DSFilterDropCat from "./d-s-filter-drop-cat/d-s-filter-drop-cat"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-filters-drop.scss"

const DSFiltersDrop = ({ setDropdownOpen, dropdownOpen, categories }) => {
        
    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        setDropdownOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div
            onPointerDown={handlePointerDown}
            className="d-s-filters-drop-container">
            <div className="d-s-filters-drop-top">
                <p className={dropdownOpen ? "open" : ""}>{storeDisplay?.collection?.selected}</p>
            </div>
            <ul className={dropdownOpen ? "open" : ""}>
                {categories?.map((cat, i) => {
                        return <DSFilterDropCat key={i} cat={cat}/>
                    })}
            </ul>
        </div>
    )
}

export default DSFiltersDrop