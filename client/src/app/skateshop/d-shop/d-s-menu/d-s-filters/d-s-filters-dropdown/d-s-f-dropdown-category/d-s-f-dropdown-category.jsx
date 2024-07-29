import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import { useTranslation } from "../../../../../../../hooks/useTranslation"
import "./d-s-f-dropdown-category.scss"

const DSFDropdownCategory = ({ cat, setDropdownOpen }) => {

    /* Global */
    const { storeDisplay, updateCollectionDisplay } = useContext(ShopifyContext)
    const { t, fixForTranslation } = useTranslation()

    /* Functions */
    const handlePointerDown = () => {
        setDropdownOpen(false)
        updateCollectionDisplay({ selected: cat.title, resetOption: false })
    }

    const title = fixForTranslation({ string: cat?.title })

    /* JSX */
    return (
        <button
            aria-label={t(`pages.skateshop.products.collections.${title}.title`)}
            onClick={handlePointerDown}
            className={"d-s-f-dropdown-category-container " + (storeDisplay?.collection?.selected.toLowerCase() === cat.title.toLowerCase() ? "selected" : "")}>
            <p>{t(`pages.skateshop.products.collections.${title}.title`)}</p>
        </button>
    )
}

export default DSFDropdownCategory