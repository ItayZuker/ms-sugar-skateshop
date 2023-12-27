import React, { useContext, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import ValueChackBox from "./value-chack-box/value-chack-box"
import "./option-value.scss"

const OptionValue = ({ value, optionName }) => {

    /* Global Variables */
    const { setStoreDisplay } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        setStoreDisplay(prev => {
            let updatedOptions = prev.options.map((option, index) => {
                if (index === value.optIndex) {
                    let updatedValues = option.values.map((val, idx) => {
                        if (idx === value.valIndex) {
                            return { ...val, active: !val.active };
                        }
                        return val;
                    });
                    return { ...option, values: updatedValues };
                }
                return option;
            });
            return { ...prev, options: updatedOptions };
        })
    }
 
    /* JSX */
    return (
        <div
            className="option-value-container"
            onPointerDown={handlePointerDown}>
            <ValueChackBox value={value}/>
            <p>{value.value}</p>
        </div>
    )
}

export default OptionValue