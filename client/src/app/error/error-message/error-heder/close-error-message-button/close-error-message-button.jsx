import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./close-error-message-button.scss"

const CloseErrorMessageButton = () => {

    /* Globale Variables */
    const { resetDialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div
            onPointerDown={resetDialog}
            className="close-error-message-button-container">
            <span className="material-symbols-outlined">close</span>
        </div>
    )
}

export default CloseErrorMessageButton