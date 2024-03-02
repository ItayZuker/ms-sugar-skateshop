import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/global";
import { ShopifyContext } from "../context/shopify";

export const useReletedProducts = () => {

    /* Global */
    const {
        // geoData
    } = useContext(GlobalContext)

    const {
        storeDisplay,
        store
    } = useContext(ShopifyContext)

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
            "decks": ["grips", "wheels", "trucks", "bearings", "tools", "nuts & bolts", "spacers"],
            "wheels": ["bearings"],
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

        setProducts(relatedProducts)
    }


    return { products }

}