import React from "react"
import "./a-m-header-close.scss"

const AMHeaderClose = ({ setMenuOpen }) => {

    /* Functions */
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div
            className="a-m-header-close-container"
            onClick={handleClick}>
            <span class="material-symbols-outlined">close</span>
            <p>Close</p>
        </div>
    )
}

export default AMHeaderClose