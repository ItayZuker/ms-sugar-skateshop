import React from "react"
import TextDirSwitcher from "./text-dir-switcher/text-dir-switcher"
import "./e-form-text-dir.scss"

const EFormTextDir = ({ textDir, setTextDir }) => {

    /* JSX */
    return (
        <div className="e-form-text-dir-container">
            <p>Text Direction:</p>
            <TextDirSwitcher
                textDir={textDir}
                setTextDir={setTextDir}/>
        </div>
    )
}

export default EFormTextDir