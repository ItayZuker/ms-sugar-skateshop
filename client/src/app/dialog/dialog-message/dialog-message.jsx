import React from "react"
import DialogHeder from "./dialog-heder/dialog-heder"
import DialogBody from "./dialog-body/dialog-body"
import "./dialog-message.scss"

const DialogMessage = ({ active }) => {

    /* JSX */
    return (
        <div className={"dialog-message-container " + active}>
            <DialogHeder active={active}/>
            <DialogBody/>
        </div>
    )
}

export default DialogMessage