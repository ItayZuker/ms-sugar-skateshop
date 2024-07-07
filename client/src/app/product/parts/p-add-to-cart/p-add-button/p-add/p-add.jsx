import React from "react"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./p-add.scss"

const PAdd = ({ loading }) => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className={"p-add-container " + (loading ? "" : "active")}>
            <p>{t('pages.product.add_to_cart_button.title')}<span className="material-symbols-outlined">add_shopping_cart</span></p>
        </div>
    )
}

export default PAdd