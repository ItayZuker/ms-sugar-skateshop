import React from "react"
import { useTranslation } from "../../../../../../../hooks/useTranslation"
import "./p-option-name.scss"

const POptionName = ({ name }) => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="p-option-name-container">
            <p>{t(`pages.skateshop.products.options.${name}.title`)}:</p>
        </div>
    )
}

export default POptionName