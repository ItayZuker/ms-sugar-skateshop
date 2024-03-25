import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./p-desctiption.scss"

const PDesctiption = () => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="p-desctiption-container" dangerouslySetInnerHTML={{__html: storeDisplay?.product?.descriptionHtml}} />
    )
}

export default PDesctiption