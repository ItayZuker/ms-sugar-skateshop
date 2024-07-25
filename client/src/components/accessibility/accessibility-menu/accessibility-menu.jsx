import React, { useContext, useEffect, useRef } from "react"
import { AccessibilityContext } from "../../../context/accessibility"
import AMHeader from "./a-m-header/a-m-header"
import AMTextSize from "./a-m-text-size/a-m-text-size"
import AMTextKerning from "./a-m-text-kerning/a-m-text-kerning"
import AMTextLeading from "./a-m-text-leading/a-m-text-leading"
import AMBigCursor from "./a-m-big-cursor/a-m-big-cursor"
import AMReadLine from "./a-m-read-line/a-m-read-line"
import AMReadWindow from "./a-m-read-window/a-m-read-window"
import AMUnderlineLinks from "./a-m-underline-links/a-m-underline-links"
import AMTextToSpeech from "./a-m-text-to-speech/a-m-text-to-speech"
import "./accessibility-menu.scss"

const AccessibilityMenu = () => {

    /* Global */
    const { menuOpen, setMenuOpen } = useContext(AccessibilityContext)

    /* Locale */
    const menuRef = useRef(null)

    /* Triggers */
    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [menuOpen])

    /* Functions */
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false)
        }
    }

    /* JSX */
    return (
        <div
            ref={menuRef}
            className={"accessibility-menu-container " + (menuOpen ? "open" : "close")}>
            <AMHeader/>
            <AMTextSize/>
            <AMTextKerning/>
            <AMTextLeading/>
            <AMBigCursor/>
            <AMReadLine/>
            <AMReadWindow/>
            <AMUnderlineLinks/>
            <AMTextToSpeech/>
        </div>
    )
}

export default AccessibilityMenu