import React, { useContext } from "react"
import ReadLineItem from "./read-line-item/read-line-item"
import ReadWindowItem from "./read-window-item/read-window-item"
import AccessibilityButton from "./accessibility-button/accessibility-button"
import AccessibilityMenu from "./accessibility-menu/accessibility-menu"
// import AccessibilityCover from "./accessibility-cover/accessibility-cover"
import "./accessibility.scss"
import { AccessibilityContext } from "../../context/accessibility"

const Accessibility = () => {

    /* Global */
    const { menuOpen } = useContext(AccessibilityContext)

    /* JSX */
    return (
        <div className={"accessibility-container " + (menuOpen ? "active" : "")}>
            <ReadLineItem/>
            <ReadWindowItem/>
            <AccessibilityButton/>
            <AccessibilityMenu/>
            {/* <AccessibilityCover/> */}
        </div>
    )
}

export default Accessibility