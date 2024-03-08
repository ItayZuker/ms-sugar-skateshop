import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./close-dialog-button.scss"

const CloseDialogButton = ({ active }) => {

    /* Global */
    const { resetDialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div
            onClick={resetDialog}
            className={"close-dialog-button-container " + active}>
            <span className="material-symbols-outlined">close</span>
        </div>
    )
}

export default CloseDialogButton