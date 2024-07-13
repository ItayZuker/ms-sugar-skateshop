import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import { useTranslation } from "../../../../../hooks/useTranslation"
import { Link } from "react-router-dom"
import "./notify-available-success-message.scss"

const NotifyAvailableSuccessMessage = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)
    const { t } = useTranslation()

    const title = dialog?.notifyWhenAvailable?.res?.payload?.message?.title
    const body = dialog?.notifyWhenAvailable?.res?.payload?.message?.body

    /* JSX */
    return (
        <div className="notify-available-success-message-container">
            { title &&
                <h2>{t(title)}</h2> }
            { body &&
                <p>{t(body)}</p> }
            <br/>
            <p>{t("dialog.notify_available_success.link_line.part_one")} <Link to="/exchange">{t("dialog.notify_available_success.link_line.link")}</Link> {t("dialog.notify_available_success.link_line.part_two")}</p>
        </div>
    )
}

export default NotifyAvailableSuccessMessage