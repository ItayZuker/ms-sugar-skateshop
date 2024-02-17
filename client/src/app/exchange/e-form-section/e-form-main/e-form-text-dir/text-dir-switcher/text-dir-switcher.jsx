import React from "react"
import "./text-dir-switcher.scss"

const TextDirSwitcher = ({ setFormData, formData }) => {

    /* Functions */
    const toggleRTL = () => {
        setFormData(prev => ({...prev, textDirection: prev.textDirection === "rtl" ? "ltr" : "rtl"}))
    }

    /* JSX */
    return (
        <div className="text-dir-switcher-container">
            <div className="text-dir-switcher-inner-container">
                <span
                    onPointerDown={toggleRTL}
                    className={"material-symbols-outlined dir-ltr " + (formData.textDirection === "ltr" ? "active" : "")}>align_horizontal_left</span>
                <span
                    onPointerDown={toggleRTL}
                    className={"material-symbols-outlined dir-rtl " + (formData.textDirection === "rtl" ? "active" : "")}>align_horizontal_right</span>
            </div>
        </div>
    )
}

export default TextDirSwitcher