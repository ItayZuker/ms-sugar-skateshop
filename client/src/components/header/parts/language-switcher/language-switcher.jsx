import React, { useState } from "react"
import SelectedLang from "./selected-lang/selected-lang"
import DropdownLang from "./dropdown-lang/dropdown-lang"
import "./language-switcher.scss"

const LanguageSwitcher = () => {

    /* Locale */
    const [hover, setHover] = useState(false)

    /* Functions */
    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    /* JSX */
    return (
        <div
            className="language-switcher-container"
            onMouseLeave={handleMouseLeave}>
            <SelectedLang
                hover={hover}
                handleMouseEnter={handleMouseEnter}/>
            <DropdownLang hover={hover} setHover={setHover}/>
        </div>
    )
}

export default LanguageSwitcher