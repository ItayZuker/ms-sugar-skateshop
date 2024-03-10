import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../../../context/global"
import PNotificationHeader from "./p-notification-header/p-notification-header"
import PNotificationForm from "./p-notification-form/p-notification-form"
import "./p-notification.scss"

const PNotification = ({ notifyWhenAvailable, setNotifyWhenAvailable }) => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* Triggers */
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [dialog])

    /* Function */
    const handleKeyDown = (e) => {
        if (dialog?.notifyWhenAvailable?.loading) {
            return
        }
        if (e.key === "Escape") {
            setNotifyWhenAvailable(false)
        }
    }

    const handleClick = () => {
        setNotifyWhenAvailable(false)
    }

    /* JSX */
    if (notifyWhenAvailable) {
        return (
            <div
                onKeyDown={handleKeyDown}
                className="p-notification-container">
                <div className="p-notification-inner-container">
                    <PNotificationHeader
                        setNotifyWhenAvailable={setNotifyWhenAvailable}/>
                    <PNotificationForm
                        setNotifyWhenAvailable={setNotifyWhenAvailable}/>
                </div>
                <div
                    onClick={handleClick}
                    className="p-notification-cover">
                </div>
            </div>
        )
    }
}

export default PNotification