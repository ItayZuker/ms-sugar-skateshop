import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import SProdPrevTitle from "./s-prod-prev-title/s-prod-prev-title"
import SProdPrevImage from "./s-prod-prev-image/s-prod-prev-image"
import { ShopifyContext } from "../../../../context/shopify"
import "./s-prod-prev.scss"

const SProdPrev = ({ product }) => {

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

    const handlePointerUp = () => {
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
            className="s-prod-prev-container"
            onPointerUp={handlePointerUp}>
            <SProdPrevImage product={product}/>
            <div className="s-prod-prev-inner-container">
                <SProdPrevTitle product={product}/>
            </div>
        </div>
    )
}

export default SProdPrev