import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./close-dialog-button.scss"

const CloseDialogButton = ({ active }) => {

    /* Global */
    const { resetDialog } = useContext(GlobalContext)

    /* Triggers */
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    /* Functions */
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            resetDialog()
        }
    }

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