import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { LanguageContext } from "../../../../context/language"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./p-title.scss"

const PTitle = () => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const { lang } = useContext(LanguageContext)
    const { t, fixForTranslation } = useTranslation()

    /* Functions */
    const title = fixForTranslation({ string: storeDisplay?.product?.title })

    /* JSX */
    return (
        <div className="p-title-container">
            <h2>{ lang === "en"
                    ? storeDisplay?.product?.title
                    : t(`pages.skateshop.products.list.${title}.title`)
                }
            </h2>
        </div>
    )
}

export default PTitle