import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-submit.scss"

const EFormSubmit = ({ data }) => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-submit-container">
            <input
                aria-label={t("pages.exchange.submit_button.aria_label")}
                type="submit"
                className={"submit " +
                    (data.text.error ? "error " : "")}
                value={t("pages.exchange.submit_button.title")}/>
        </div>
    )
}

export default EFormSubmit