import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { LanguageContext } from "../../../../context/language"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./p-desctiption.scss"

const PDesctiption = () => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const { lang } = useContext(LanguageContext)
    const { t, fixForTranslation } = useTranslation()

    /* Functioons */
    const title = fixForTranslation({ string: storeDisplay?.product?.title })

    /* JSX */
    if (lang === "en") {
        return (
            <div className="p-desctiption-container" dangerouslySetInnerHTML={{__html: storeDisplay?.product?.descriptionHtml}}/>
        )
    } else {
        return (
            <div className="p-desctiption-container" dangerouslySetInnerHTML={{__html: t(`pages.skateshop.products.list.${title}.description_html`)}}/>
        )
    }
}

export default PDesctiption