import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import DSProdPrev from "./d-s-prod-prev/d-s-prod-prev"
import "./d-s-display.scss"

const DSDisplay = () => {

    /* Global */
    const {
        storeDisplay,
        product
    } = useContext(ShopifyContext)

    /* Locale */
    const [products, setProducts] = useState([])

    /* Triggers */
    useEffect(() => {
        updateProducts()
    }, [storeDisplay?.collection?.products])

    /* Functions */
    const updateProducts = async () => {
        const typeOrder = ["decks", "wheels", "bearings", "trucks", "grips", "tools", "spacers"]

        const sortedProducts = await storeDisplay.collection.products.sort((a, b) => {
            const indexA = typeOrder.indexOf(a.productType);
            const indexB = typeOrder.indexOf(b.productType);
    
            // If both types are in the typeOrder array, sort by their index
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            // If a's type is not in the array, it should come after b
            else if (indexA === -1) {
                return 1;
            }
            // If b's type is not in the array, it should come after a
            else if (indexB === -1) {
                return -1;
            }
        })

        setProducts(sortedProducts)
        
    }

    /* JSX */
    return (
        <div className="d-s-display-container">
            <div className="d-s-display-inner-container">
                {products?.map((product, i) => {
                    return (
                        <div
                        key={i}
                        className={"d-s-display-cell " + (product.availableForSale ? "" : "out-of-stock")}>
                            <DSProdPrev product={product}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DSDisplay