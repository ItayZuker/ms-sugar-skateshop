import React from "react"
import "./text-dir-switcher.scss"

const TextDirSwitcher = ({ textDir, setTextDir }) => {

    /* Functions */
    const toggleRTL = () => {
        setTextDir(prev => prev === "rtl" ? "ltr" : "rtl")
    }

    /* JSX */
    return (
        <div className="text-dir-switcher-container">
            <div className="text-dir-switcher-inner-container">
                <span
                    onPointerDown={toggleRTL}
                    className={"material-symbols-outlined dir-ltr " + (textDir === "ltr" ? "active" : "")}>align_horizontal_left</span>
                <span
                    onPointerDown={toggleRTL}
                    className={"material-symbols-outlined dir-rtl " + (textDir === "rtl" ? "active" : "")}>align_horizontal_right</span>
            </div>
        </div>
    )
}

export default TextDirSwitcher