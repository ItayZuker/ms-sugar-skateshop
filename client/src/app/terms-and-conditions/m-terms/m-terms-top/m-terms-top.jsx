import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import MTSelectedCat from "./m-t-selected-cat/m-t-selected-cat"
import MTCategoriesDrop from "./m-t-categories-drop/m-t-categories-drop"
import { useScroll } from "../../../../hooks/useScroll"
import "./m-terms-top.scss"

const MTermsTop = () => {

    /* Global */
    const { scroll } = useScroll()
    const location = useLocation()

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(false)

    /* Triggers */
    useEffect(() => {
        updateDropdownOpen()
    }, [location])

    /* Functions */
    const updateDropdownOpen = () => {
        setDropdownOpen(false)
    }

    const hanbleCategoriesClick = () => {
        setDropdownOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div className={"m-terms-top-container " + (scroll?.direction === "down" ? "scroll-down" : "scroll-up")}>
            <div className="m-terms-top-inner-container">
                <MTSelectedCat
                    dropdownOpen={dropdownOpen}
                    hanbleCategoriesClick={hanbleCategoriesClick}/>
                <MTCategoriesDrop
                    dropdownOpen={dropdownOpen}/>
            </div>
        </div>
    )
}

export default MTermsTop