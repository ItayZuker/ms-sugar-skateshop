import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../../../../context/global"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./close-dialog-button.scss"

const CloseDialogButton = ({ active }) => {

    /* Global */
    const { resetDialog } = useContext(GlobalContext)
    const { t } = useTranslation()

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
        <button
            aria-label={t("dialog.close_dialog_button.aria_label")}
            onClick={resetDialog}
            className={"close-dialog-button-container " + active}>
            <span className="material-symbols-outlined">close</span>
        </button>
    )
}

export default CloseDialogButton