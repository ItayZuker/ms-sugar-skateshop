import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/global"
import DialogMessage from "./dialog-message/dialog-message"
import CoverLayer from "./cover-layer/cover-layer"
import "./dialog.scss"

const Dialog = () => {

    /* Globale */
    const {
        dialog
    } = useContext(GlobalContext)

    /* Locale */
    const [active, setActive] = useState("")

    /* Triggers */
    useEffect(() => {
        updateDialog()
    }, [dialog])

    /* Functions */
    const updateDialog = () => {
        if (dialog?.contact?.success) {
            setActive("success")
            return
        }
        if (dialog?.contact?.err) {
            setActive("error")
            return
        }
        setActive("")
    }

    /* JSX */
    if (active)
        return (
            <div className={"dialog-container " + (active ? "active" : "")}>
                <DialogMessage active={active}/>
                <CoverLayer active={active}/>
            </div>
        )
}

export default Dialog