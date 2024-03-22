import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import MSSelectedCat from "./m-s-selected-cat/m-s-selected-cat"
import MSCategoriesDrop from "./m-s-categories-drop/m-s-categories-drop"
import { useScroll } from "../../../../hooks/useScroll"
import "./m-s-top.scss"

const MSTop = ({ categories }) => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    const { scroll } = useScroll()

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(false)

    /* Triggers */
    useEffect(() => {
        updateDropdownOpen()
    }, [storeDisplay?.collection?.selected])
    
    /* Functions */
    const updateDropdownOpen = () => {
        setDropdownOpen(false)
    }

    const hanbleCategoriesClick = () => {
        setDropdownOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div className={"m-s-top-container " + (scroll.direction === "down" ? "scroll-down" : "scroll-up")}>
            <div className="m-s-top-inner-container">
                <MSSelectedCat
                    dropdownOpen={dropdownOpen}
                    hanbleCategoriesClick={hanbleCategoriesClick}/>
                <MSCategoriesDrop
                    dropdownOpen={dropdownOpen}
                    categories={categories}/>
            </div>
        </div>
    )
}

export default MSTop