import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./c-sum-tax.scss"

const CSumTax = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="c-sum-tax-container">
            <p>{t("pages.cart.tax_title")}</p>
            <p>{t("pages.cart.tax_message")}</p>
        </div>
    )
}

export default CSumTax