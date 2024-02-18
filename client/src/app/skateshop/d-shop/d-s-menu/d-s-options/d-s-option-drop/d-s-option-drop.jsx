import React, { useContext } from "react"
import DSOptionDropCat from "./d-s-option-drop-cat/d-s-option-drop-cat"
import "./d-s-option-drop.scss"
import { ShopifyContext } from "../../../../../../context/shopify"

const DSOptionDrop = ({ setDropdownOpen, dropdownOpen, categories }) => {
        
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
            className="d-s-option-drop-container">
            <div className="d-s-option-drop-top">
                <p className={dropdownOpen ? "open" : ""}>{storeDisplay?.collection?.selected}</p>
            </div>
            <ul className={dropdownOpen ? "open" : ""}>
                {categories?.map((cat, i) => {
                        return <DSOptionDropCat key={i} cat={cat}/>
                    })}
            </ul>
        </div>
    )
}

export default DSOptionDrop