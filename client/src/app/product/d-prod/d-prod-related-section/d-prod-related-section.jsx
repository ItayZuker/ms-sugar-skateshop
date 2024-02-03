import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import DProdRelatedItem from "./d-prod-related-item/d-prod-related-item"
import "./d-prod-related-section.scss"

const DProdRelatedSection = () => {

    /* Global */
    const {
        storeDisplay,
        store
    } = useContext(ShopifyContext)

    /* Locale */
    const [relatedProducts, setRelatedProducts] = useState([])

    /* Triggers */
    useEffect(() => {
        updateRelatedProducts()
    }, [storeDisplay?.product])

    /* Functions */
    const updateRelatedProducts = () => {

        const maxOfType = 1

        const relatedOptions = {
            "decks": ["grips", "wheels", "trucks"],
            "wheels": ["bearings", "trucks", "tools", "decks"],
            "bearings": ["wheels", "trucks", "tools", "decks"],
            "trucks": ["decks", "wheels", "bearings", "nuts & bolts"],
            "grips": ["decks", "trucks", "nuts & bolts"],
            "nuts & bolts": ["trucks", "grips", "decks", "spacers"],
            "spacers": ["decks", "trucks", "nuts & bolts", "tools"],
            "tools": ["nuts & bolts", "trucks", "wheels"]
        }

        const relatedTypes = relatedOptions?.[storeDisplay?.product?.productType?.toLowerCase()];

        let relatedProducts = [];

        if (relatedTypes) {
            relatedTypes.forEach(type => {
                const filteredProducts = store.products
                    .filter(product => product.productType === type && product.availableForSale && product?.title !== storeDisplay?.product?.title)
                    .slice(0, maxOfType);
    
                relatedProducts = relatedProducts.concat(filteredProducts);
            });
        }

        setRelatedProducts(relatedProducts)
    }

    /* JSX */
    return (
        <section className="d-prod-related-section">
            <h2>Related Products:</h2>
            <div className="d-prod-related-products-container">
                {relatedProducts.map((product, i) => {
                    return <DProdRelatedItem key={i} product={product}/>
                    }
                )}
            </div>
        </section>
    )
}

export default DProdRelatedSection