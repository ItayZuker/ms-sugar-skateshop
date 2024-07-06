import React from "react"
import { useShipping } from "../../../../../hooks/useShipping"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./c-sum-shipping.scss"

const CSumShipping = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="c-sum-shipping-container">
            <p>{t("pages.cart.shipping_title")}</p>
            <p>{useShipping()}</p>
        </div>
    )
}

export default CSumShipping