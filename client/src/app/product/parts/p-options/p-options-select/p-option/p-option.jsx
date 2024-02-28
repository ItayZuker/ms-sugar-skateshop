import React from "react"
import POptionName from "./p-option-name/p-option-name"
import POptionValues from "./p-option-values/p-option-values"
import "./p-option.scss"

const POption = ({ option }) => {

    /* JSX */
    return (
        <div className="p-option-container">
            <POptionName name={option?.name}/>
            <POptionValues values={option?.values || []}/>
        </div>
    )
}

export default POption