import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import ValueChackBox from "./value-chack-box/value-chack-box"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./option-value.scss"

const OptionValue = ({ value, optionName }) => {

    /* Global */
    const { setStoreDisplay } = useContext(ShopifyContext)
    const { translate } = useTranslation()

    /* Functions */
    const handleClick = () => {
        setStoreDisplay(prev => {
            let newStoreDisplay = JSON.parse(JSON.stringify(prev))
    
            let collectionToUpdate = newStoreDisplay.collection.options.find(collection => 
                collection.title.toLowerCase() === value.title.toLowerCase())

            let optionToUpdate = collectionToUpdate.options.find((opt, optIndex) => 
                value.optIndex === optIndex)

            let valueToUpdate = optionToUpdate.values.find(val => 
                val.valIndex === value.valIndex && val.optIndex === value.optIndex)

            valueToUpdate.active = !valueToUpdate.active
            return newStoreDisplay
        })
    }

    /* JSX */
    return (
        <div
            className={"option-value-container " +
                (value.lock? "lock " : "") +
                (value.oneValue ? "one-value" : "")}
            onClick={handleClick}>
            <ValueChackBox value={value}/>
            <p>{translate(`pages.skateshop.products.options.${optionName}.values.${value.value}`)}</p>
        </div>
    )
}

export default OptionValue