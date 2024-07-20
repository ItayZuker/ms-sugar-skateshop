import React from "react"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./p-n-submit.scss"

const PNSubmit = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="p-n-submit-container">
            <input
                aria-label={t("pages.product.notify_popup.submit_button.title")}
                className="submit"
                type="submit"
                value={t("pages.product.notify_popup.submit_button.title")}/>
        </div>
    )
}

export default PNSubmit