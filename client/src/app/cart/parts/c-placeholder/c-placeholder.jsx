import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./c-placeholder.scss"

const CPlaceholder = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="c-placeholder-container">
            <span className="material-symbols-outlined">shopping_cart_off</span>
            <h2>{translate("pages.cart.your_cart_is_empty")}</h2>
            <Link to="/skateshop">{translate("pages.cart.go_to")}<span className="material-symbols-outlined">storefront</span>{translate("pages.cart.skateshop")}</Link>
        </div>
    )
}

export default CPlaceholder