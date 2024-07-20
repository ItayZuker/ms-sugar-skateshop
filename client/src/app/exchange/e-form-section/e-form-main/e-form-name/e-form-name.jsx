import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-name.scss"

const EFormName = ({ data }) => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-name-container">
            <input
                aria-label="Name"
                className={"name " + (data.name.error ? "error " : "")}
                name="name"
                type="text"
                placeholder={t("pages.exchange.input_name_placeholder")}/>
        </div>
    )
}

export default EFormName