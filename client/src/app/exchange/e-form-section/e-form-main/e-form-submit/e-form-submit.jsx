import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-submit.scss"

const EFormSubmit = ({ data }) => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-submit-container">
            <input
                type="submit"
                className={"submit " +
                    (data.text.error ? "error " : "")}
                value={translate("pages.exchange.submit")}/>
        </div>
    )
}

export default EFormSubmit