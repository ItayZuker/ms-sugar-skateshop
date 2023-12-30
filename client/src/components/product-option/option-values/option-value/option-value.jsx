import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import ValueChackBox from "./value-chack-box/value-chack-box"
import "./option-value.scss"

const OptionValue = ({ value }) => {

    /* Global Variables */
    const {
        setStoreDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        setStoreDisplay(prev => {
            let newStoreDisplay = JSON.parse(JSON.stringify(prev))
    
            let collectionToUpdate = newStoreDisplay.collection.options.find(collection => 
                collection.title.toLowerCase() === value.title.toLowerCase())
    
            if (collectionToUpdate) {
                let optionToUpdate = collectionToUpdate.options.find((opt, optIndex) => 
                    value.optIndex === optIndex)
    
                if (optionToUpdate) {
                    let valueToUpdate = optionToUpdate.values.find(val => 
                        val.valIndex === value.valIndex && val.optIndex === value.optIndex)
    
                    if (valueToUpdate) {
                        valueToUpdate.active = !valueToUpdate.active
                    }
                }
            }
            return newStoreDisplay
        })
    }

    /* JSX */
    return (
        <div
            className={"option-value-container " + (value?.lockActive ? "lock-active" : "")}
            onPointerDown={handlePointerDown}>
            <ValueChackBox value={value}/>
            <p>{value.value}</p>
        </div>
    )
}

export default OptionValue