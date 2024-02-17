import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import DSProdPrevTitle from "./d-s-prod-prev-title/d-s-prod-prev-title"
import DSProdPrevImage from "./d-s-prod-prev-image/d-s-prod-prev-image"
import { ShopifyContext } from "../../../../../context/shopify"
import "./d-s-prod-prev.scss"

const DSProdPrev = ({ product }) => {

    /* Global */
    const {
        storeDisplay,
    } = useContext(ShopifyContext)
    const navigate = useNavigate()

    /* Functions */
    const getBestVariantMetch = ({ selectedOptions }) => {
        const activeValues = selectedOptions.reduce((acc, option) => {
            const activeValue = option.values.find(value => value.active)?.value;
            if (activeValue) acc.push({ name: option.name, value: activeValue });
            return acc;
        }, []);


        let bestMatchVariant = null;
        let maxMatches = 0;

        product.variants.forEach(variant => {
            if (variant.available) {
                let matchCount = 0;
    
                activeValues.forEach(activeValue => {
                    if (variant.selectedOptions.some(option => 
                        option.name === activeValue.name && option.value === activeValue.value)) {
                        matchCount++;
                    }
                });
    
                if (matchCount > maxMatches || 
                    (matchCount === maxMatches && !bestMatchVariant)) {
                    bestMatchVariant = variant;
                    maxMatches = matchCount;
                }
            }
        });

        return bestMatchVariant
    }

    const handlePointerDown = () => {
        if (product.availableForSale) {
            const { options: selectedOptions } = storeDisplay?.collection?.options?.find(option => (
                option.title.toLowerCase() === storeDisplay.collection.selected.toLowerCase()
            ));
                
            let variant = product.variants.find(variant => variant.available)
    
            if (selectedOptions.length > 0) {
                variant = getBestVariantMetch({ selectedOptions })
            }
    
            navigate(`/product/${product.idNumber}/${variant.idNumber}`, { replace: true });
        }

    }

    /* JSX */
    return (
        <div
            className="d-s-prod-prev-container"
            onPointerDown={handlePointerDown}>
            <DSProdPrevImage product={product}/>
            <DSProdPrevTitle product={product}/>
        </div>
    )
}

export default DSProdPrev