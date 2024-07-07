import React from "react"
import { useShipping } from "../../../../hooks/useShipping"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./p-shipping.scss"

const PShipping = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="p-shipping-container">
            <p>{t("pages.product.shipping.title")}</p>
            <p>{useShipping()}</p>
        </div>
    )
}

export default PShipping