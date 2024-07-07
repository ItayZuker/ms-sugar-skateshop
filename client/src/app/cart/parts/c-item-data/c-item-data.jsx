import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ShopifyContext } from "../../../../context/shopify"
import { LanguageContext } from "../../../../context/language"
import { useMedia } from "../../../../hooks/useMedia"
import { useTranslation } from "../../../../hooks/useTranslation"
import CItemQuantity from "../c-item-quantity/c-item-quantity"
import "./c-item-data.scss"

const CItemData = ({ item, setTrigerDelete, index }) => {

    /* Global */
    const { store } = useContext(ShopifyContext)
    const { lang } = useContext(LanguageContext)
    const { media } = useMedia()
    const { t, fixForTranslation, tVariant } = useTranslation()
    const navigate = useNavigate()

    /* Functions */
    const handleDektopClick = () => {
        if (media.type !== "mobile") {
            const variantId = item.variant.id
            const variantSplit = variantId.split("/")
            const variantIdNumber = variantSplit[variantSplit.length - 1]
            const product = store.products.find(product => {
                return product.variants.find(variant => variant.idNumber === variantIdNumber)
            })
            navigate(`/product/${product.idNumber}/${variantIdNumber}`, { replace: true });
        }
    }
    
    const fixTitle = fixForTranslation({ string: item?.title })
    const fixVariant = tVariant({ variant: item?.variant })

    /* JSX */
    return (
        <>
            <div
                onClick={handleDektopClick}
                className="c-item-data-container">
                <p><span className="material-symbols-outlined">keyboard_return</span></p>
                <div className="c-item-data-inner-container">
                    <p>
                        { lang === "en"
                            ? item?.title
                            : t(`pages.skateshop.products.list.${fixTitle}.title`)
                        }
                    </p>
                    <p>{fixVariant}</p>
                </div>
                { media?.type === "mobile" && <CItemQuantity
                                                    index={index}
                                                    item={item}
                                                    setTrigerDelete={setTrigerDelete}/> }
            </div>
        </>
    )
}

export default CItemData