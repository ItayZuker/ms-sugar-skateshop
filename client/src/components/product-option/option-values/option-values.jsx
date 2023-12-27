import React from "react"
import OptionValue from "./option-value/option-value"
import "./option-values.scss"

const OptionValues = ({ option }) => {

    /* JSX */
    return (
        <div className="option-values-container">
            {option?.values?.map((value, i) => {
                return <OptionValue
                    key={i}
                    value={value}
                    optionName={option.name}/>
            })}
        </div>
    )
}

export default OptionValues