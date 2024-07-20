import React, { useState } from "react"
import AccessibilityButton from "./accessibility-button/accessibility-button"
import AccessibilityMenu from "./accessibility-menu/accessibility-menu"
import AccessibilityCover from "./accessibility-cover/accessibility-cover"
import "./accessibility.scss"

const Accessibility = () => {

    /* Locale */
    const [menuOpen, setMenuOpen] = useState(false)

    /* JSX */
    return (
        <div className={"accessibility-container " + (menuOpen ? "active" : "")}>
            <AccessibilityButton
                setMenuOpen={setMenuOpen}/>
            <AccessibilityMenu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}/>
            <AccessibilityCover
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}/>
        </div>
    )
}

export default Accessibility