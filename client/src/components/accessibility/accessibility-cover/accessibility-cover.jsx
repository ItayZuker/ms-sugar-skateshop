import React, { useContext } from "react"
import { AccessibilityContext } from "../../../context/accessibility"
import "./accessibility-cover.scss"

const AccessibilityCover = () => {

    /* Global */
    const { menuOpen, setMenuOpen } = useContext(AccessibilityContext)

    /* Functions */
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }

    /* JSX */
    if (menuOpen) {
        return (
            <div
                className="accessibility-cover"
                onClick={handleClick}/>
        )
    }
}

export default AccessibilityCover