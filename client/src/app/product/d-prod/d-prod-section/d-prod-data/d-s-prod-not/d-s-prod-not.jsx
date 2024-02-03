import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-prod-not.scss"

const DSProdNot = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* LOcale */
    const production = {
        "decks": "Deckes are 7 layers of profetional canadian maple wood.",
        "wheels": "",
        "bearings": "",
        "trucke": "",
        "grips": "",
        "Nuts & Bolts": "",
        "Spacers": "",
        "Tools": ""


    }

    /* JSX */
    if (production?.[storeDisplay.product.productType.toLowerCase()]) {
        return (
            <div className="d-s-prod-not-container">
                <p>Production:</p>
                <p>{production?.[storeDisplay.product.productType.toLowerCase()]}</p>
            </div>
        )
    }
}

export default DSProdNot