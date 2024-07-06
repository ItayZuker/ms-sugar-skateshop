import React from "react"
import { useTranslation } from "../../../hooks/useTranslation"
import "./option-name.scss"

const OptionName = ({ option }) => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="option-name-container">
            <p>{t(`pages.skateshop.products.options.${option?.name}.title`)}</p>
        </div>
    )
}

export default OptionName