import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./c-placeholder.scss"

const CPlaceholder = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="c-placeholder-container">
            <span className="material-symbols-outlined" aria-hidden="true">shopping_cart_off</span>
            <h2>{t("pages.cart.your_cart_is_empty")}</h2>
            <Link
                to="/skateshop">
                    {t("pages.cart.go_to")}
                    <span className="material-symbols-outlined" aria-hidden="true">storefront</span>
                    {t("navigation.skateshop.title")}
            </Link>
        </div>
    )
}

export default CPlaceholder