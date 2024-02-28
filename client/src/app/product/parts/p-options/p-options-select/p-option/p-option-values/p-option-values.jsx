import React from "react"
import POptionValue from "./p-option-value/p-option-value"
import "./p-option-values.scss"

const POptionValues = ({ values }) => {

    /* JSX */
    return (
        <div className="p-option-values-container">
            {values?.map((value, i) => {
                return <POptionValue key={i} value={value}/>
            })}
        </div>
    )
}

export default POptionValues