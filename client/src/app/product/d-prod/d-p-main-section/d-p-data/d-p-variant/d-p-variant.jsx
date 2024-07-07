import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./d-p-variant.scss"

const DPVariant = () => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="d-p-variant-container">
            <p>{t("pages.product.variant.title")}</p>
            <p>{storeDisplay?.variant?.title || ""}</p>
        </div>
    )
}

export default DPVariant