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
                aria-label="Submit"
                type="submit"
                className={"submit " +
                    (data.text.error ? "error " : "")}
                value={t("pages.exchange.submit")}/>
        </div>
    )
}

export default EFormSubmit