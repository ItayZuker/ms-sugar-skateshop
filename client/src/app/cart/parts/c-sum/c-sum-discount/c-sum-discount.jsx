import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./c-sum-discount.scss"

const CSumDiscount = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="c-sum-discount-container">
            <p>{t("pages.cart.discount_title")}</p>
            <p>{t("pages.cart.discount_message")}</p>
        </div>
    )
}

export default CSumDiscount