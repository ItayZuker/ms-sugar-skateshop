import React from "react"
import "./accessibility-cover.scss"

const AccessibilityCover = ({ menuOpen, setMenuOpen }) => {

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