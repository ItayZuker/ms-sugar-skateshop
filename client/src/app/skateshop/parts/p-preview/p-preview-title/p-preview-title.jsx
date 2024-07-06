import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./p-preview-title.scss"

const PPreviewTitle = ({ product }) => {

    /* Global */
    const { translate } = useTranslation()

    /* Functions */
    const title = product?.title?.toLowerCase().replace(" ", "_")

    /* JSX */
    return (
        <div className="p-preview-title-container">
            <p>{translate(`pages.skateshop.products.list.${title}`)}
                { product?.availableForSale
                    ? <span className="material-symbols-outlined">shopping_cart</span>
                    : <span className="material-symbols-outlined">mail</span>
                }
            </p>
        </div>
    )
}

export default PPreviewTitle