import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./m-s-cat-item.scss"

const MSCatItem = ({ cat }) => {

    /* Global */
    const { storeDisplay, updateCollectionDisplay } = useContext(ShopifyContext)
    const { t } = useTranslation()

    /* Functions */
    const handleClick = () => {
        updateCollectionDisplay({ selected: cat.title, resetOption: true })
    }

    const title = cat?.title?.toLowerCase().replace(" ", "_")

    /* JSX */
    return (
        <li
            onClick={handleClick}
            className={"m-s-cat-item-container " + (storeDisplay?.collection?.selected?.toLowerCase() === cat?.title?.toLowerCase() ? "selected" : "")}>
            <p>{t(`pages.skateshop.products.collections.${title}`)}</p>
        </li>
    )
}

export default MSCatItem