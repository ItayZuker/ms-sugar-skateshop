import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-prod-desctiption.scss"

const DSProdDesctiption = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-desctiption-container" dangerouslySetInnerHTML={{__html: storeDisplay?.product?.descriptionHtml}} />
    )
}

export default DSProdDesctiption