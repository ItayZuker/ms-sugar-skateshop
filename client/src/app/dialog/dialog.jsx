import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/global"
import { useLocation } from "react-router-dom"
import DialogLoading from "./dialog-loading/dialog-loading"
import DialogMessage from "./dialog-message/dialog-message"
import CoverLayer from "./cover-layer/cover-layer"
import "./dialog.scss"

const Dialog = () => {

    /* Globale */
    const { dialog, resetDialog } = useContext(GlobalContext)
    
    const location = useLocation()

    /* Locale */
    const [active, setActive] = useState("")

    /* Triggers */
    useEffect(() => {
        updateDialog()
    }, [dialog])

    useEffect(() => {
        resetDialog()
    }, [location])

    /* Functions */
    const updateDialog = () => {
        if (dialog?.contact?.loading) {
            setActive("loading")
            return
        }
        if (dialog?.contact?.success) {
            setActive("success")
            return
        }
        if (dialog?.contact?.err) {
            setActive("error")
            return
        }
        if (dialog?.exchange?.loading) {
            setActive("loading")
            return
        }
        if (dialog?.exchange?.success) {
            setActive("success")
            return
        }
        if (dialog?.exchange?.err) {
            setActive("error")
            return
        }
        if (dialog?.notifyWhenAvailable?.loading) {
            setActive("loading")
            return
        }
        if (dialog?.notifyWhenAvailable?.success) {
            setActive("success")
            return
        }
        if (dialog?.notifyWhenAvailable?.err) {
            setActive("error")
            return
        }
        setActive("")
    }

    /* JSX */
    if (active)
        return (
            <div className={"dialog-container " + (active ? "active" : "")}>
                { active === "loading"
                    ? <DialogLoading/>
                    : <DialogMessage
                        active={active}/> }
                <CoverLayer
                    active={active}/>
            </div>
        )
}

export default Dialog