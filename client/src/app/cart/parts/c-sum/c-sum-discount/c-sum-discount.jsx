import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./c-sum-discount.scss"

const CSumDiscount = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="c-sum-discount-container">
            <p>{translate("pages.cart.discount_title")}</p>
            <p>{translate("pages.cart.discount_message")}</p>
        </div>
    )
}

export default CSumDiscount