import React from "react"
import OptionName from "./option-name/option-name"
import OptionValues from "./option-values/option-values"
import "./product-option.scss"

const ProductOption = ({ option }) => {

    /* JSX */
    return (
        <div className="product-option-container">
            <OptionName option={option}/>
            <OptionValues option={option}/>
        </div>
    )
}

export default ProductOption