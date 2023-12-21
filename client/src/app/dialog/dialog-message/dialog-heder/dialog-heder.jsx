import React from "react"
import CloseDialogButton from "./close-dialog-button/close-dialog-button"
import "./dialog-heder.scss"

const DialogHeder = ({ active }) => {

    /* JSX */
    return (
        <div className="dialog-heder-container">
            <CloseDialogButton active={active}/>
        </div>
    )
}

export default DialogHeder