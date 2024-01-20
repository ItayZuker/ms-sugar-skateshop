import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../../../../context/shopify"
import "./d-s-prod-one-opt-value.scss"

const DSProdOneOptValue = ({ value }) => {

    /* Global */
    const {
        storeDisplay,
        setStoreDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        const selectedVariant = storeDisplay.variant;
        const allVariants = storeDisplay.product.variants;
        const { value: selectedValue, optionName, options } = value;

        const createUpdatedOptions = (currentOptions, optionName, newValue) => {
            return currentOptions.map(option => {
                if (option.name === optionName) {
                    return { ...option, value: newValue };
                }
                return option;
            });
        };
    
        const activeValues = Object.entries(options[optionName])
            .filter(([value, { active }]) => {
                return active && value !== selectedVariant.selectedOptions.find(opt => {
                    return opt.name.toLowerCase() === optionName.toLowerCase()
                })?.value
            })
            .map(([value]) =>  value);
    
        const potentialOptions = activeValues.map(optionValue => {
            return createUpdatedOptions(selectedVariant.selectedOptions, optionName, optionValue);
        });
    
        const sortedPotentialOptions = potentialOptions.sort((a, b) => {
            const aValue = a.find(opt => opt.name === optionName).value;
            const bValue = b.find(opt => opt.name === optionName).value;
            if(aValue === selectedValue) return -1;
            if(bValue === selectedValue) return 1;
            const aValueIndex = activeValues.indexOf(aValue);
            const bValueIndex = activeValues.indexOf(bValue);
            return aValueIndex - bValueIndex;
        });
    
        const findMatchingVariant = (potentialOptions, allVariants) => {
            const exactMatchVariant = allVariants.find(variant =>
                areOptionsEquivalent(potentialOptions.find(opt => opt.find(o => o.name === optionName).value === selectedValue), variant.selectedOptions)
            );
        
            if (exactMatchVariant) return exactMatchVariant;
        
            return allVariants.find(variant =>
                potentialOptions.some(potentialOption => areOptionsEquivalent(potentialOption, variant.selectedOptions))
            );
        };
        
        const newVariant = findMatchingVariant(sortedPotentialOptions, allVariants);

        setStoreDisplay(prev => ({...prev, variant: (newVariant || selectedVariant)}));
    }
    
    const areOptionsEquivalent = (optionsA, optionsB) => {
        if(optionsA?.length !== optionsB?.length) return false;
        for(let option of optionsA) {
            const matchingOption = optionsB.find(opt => opt.name === option.name);
            if(!matchingOption || matchingOption.value !== option.value) {
                return false;
            }
        }
        return true;
    }

    /* JSX */
    return (
        <div
            onPointerDown={handlePointerDown}
            className={"d-s-prod-one-opt-value-container " +
            (value.active ? "active " : "") +
            (value.selected ? "selected " : "")}>
            <p>{value?.value}</p>
        </div>
    )
}

export default DSProdOneOptValue