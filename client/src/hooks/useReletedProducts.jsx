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

        const maxOfType = 1

        const relatedOptions = {
            "decks": ["grips", "wheels", "bearings"],
            "wheels": ["bearings"],
            "bearings": ["wheels", "decks"],
            "grips": ["decks", "decks", "decks"],
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

        setProducts(relatedProducts)
    }


    return { products }

}