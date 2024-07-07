import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./p-notify-me.scss"

const PNotifyMe = ({ setNotifyWhenAvailable }) => {

    /* Global */
    const { t } = useTranslation()

    /* Functions */
    const handleClick = () => {
        setNotifyWhenAvailable(true)
    }

    /* JSX */
    return (
        <div
            onClick={handleClick}
            className="p-notify-me-container">
            <p>{t("pages.product.notify_button.title")}</p>
        </div>
    )
}

export default PNotifyMe