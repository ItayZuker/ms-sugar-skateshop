import React from "react"
import TextDirSwitcher from "./text-dir-switcher/text-dir-switcher"
import "./e-form-text-dir.scss"

const EFormTextDir = ({ setFormData, formData }) => {

    /* JSX */
    return (
        <div className="e-form-text-dir-container">
            <p>Text Direction:</p>
            <TextDirSwitcher
                formData={formData}
                setFormData={setFormData}/>
        </div>
    )
}

export default EFormTextDir