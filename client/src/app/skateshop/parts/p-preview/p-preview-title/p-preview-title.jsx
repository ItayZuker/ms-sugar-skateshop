import React, { useContext } from "react"
import { LanguageContext } from "../../../../../context/language"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./p-preview-title.scss"

const PPreviewTitle = ({ product }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)
    const { t, fixForTranslation } = useTranslation()

    /* Functions */
    const title = fixForTranslation({ string: product?.title })

    /* JSX */
    return (
        <div className="p-preview-title-container">
            <p>
                { lang === "en"
                    ? product?.title
                    : t(`pages.skateshop.products.list.${title}.title`)
                }
                { product?.availableForSale
                    ? <span className="material-symbols-outlined">shopping_cart</span>
                    : <span className="material-symbols-outlined">mail</span>
                }
            </p>
        </div>
    )
}

export default PPreviewTitle