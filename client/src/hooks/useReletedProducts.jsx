import { useContext, useState, useEffect } from "react"
import { ShopifyContext } from "../context/shopify"

export const useReletedProducts = () => {

    /* Global */
    const { storeDisplay, store } = useContext(ShopifyContext)

    /* Triggers */
    useEffect(() => {
        updateProducts()
    }, [storeDisplay?.product])

    /* Locale */
    const [products, setProducts] = useState([])

    /* Functions */
    const updateProducts = () => {

        const maxOfProduct = 1

        const relatedOptions = {
            "decks": ["grips", "bearings", "wheels", "deck #1", "deck #2", "deck #3"],
            "wheels": ["grips", "bearings", "wheels", "deck #1", "deck #2", "deck #3"],
            "bearings": ["grips", "bearings", "wheels", "deck #1", "deck #2", "deck #3"],
            "grips": ["grips", "bearings", "wheels", "deck #1", "deck #2", "deck #3"]
        }

        const relatedTypes = relatedOptions?.[storeDisplay?.product?.productType?.toLowerCase()]

        let relatedProducts = []

        if (relatedTypes) {
            relatedTypes.forEach(title => {
                const filteredProducts = store.products
                    .filter(product => {
                        return product?.title?.toLowerCase() === title?.toLowerCase() && product.availableForSale && product?.title?.toLowerCase() !== storeDisplay?.product?.title?.toLowerCase()
                    })
                    .slice(0, maxOfProduct)
    
                relatedProducts = relatedProducts.concat(filteredProducts)
            })
        }

        setProducts(relatedProducts)
    }

    return { products }
}