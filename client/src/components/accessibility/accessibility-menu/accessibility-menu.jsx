import React from "react"
import AMHeader from "./a-m-header/a-m-header"
import AMTextSize from "./a-m-text-size/a-m-text-size"
import "./accessibility-menu.scss"

const AccessibilityMenu = ({ menuOpen, setMenuOpen }) => {

    /* JSX */
    return (
        <div className={"accessibility-menu-container " + (menuOpen ? "open" : "close")}>
            <AMHeader
                setMenuOpen={setMenuOpen}/>
            <AMTextSize/>
        </div>
    )
}

export default AccessibilityMenu