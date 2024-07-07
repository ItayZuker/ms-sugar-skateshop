import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { useMedia } from "../../../../hooks/useMedia"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./p-stock.scss"

const PStock = () => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)
    const { media } = useMedia()
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="p-stock-container">
            <h3>
                { media.type === "mobile" ? "(" : "" }
                { storeDisplay?.product?.availableForSale
                    ? t("pages.product.in_stock.title")
                    : t("pages.product.out_of_stock.title")
                }
                { media.type === "mobile" ? ")" : "" }
            </h3>
        </div>
    )
}

export default PStock