import React from "react"
import "./a-m-header-close.scss"

const AMHeaderClose = ({ setMenuOpen }) => {

    /* Functions */
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }

    /* JSX */
    return (
        <button
            className="a-m-header-close-container"
            onClick={handleClick}
            aria-label="Close Accessibility Menu">
            <span class="material-symbols-outlined">close</span>
            <p>Close</p>
        </button>
    )
}

export default AMHeaderClose