import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-name.scss"

const EFormName = ({ data }) => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-name-container">
            <input
                className={"name " + (data.name.error ? "error " : "")}
                name="name"
                type="text"
                placeholder={translate("pages.exchange.input_name_placeholder")}/>
        </div>
    )
}

export default EFormName