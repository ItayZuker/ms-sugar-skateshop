import React from "react"
import "./option-name.scss"

const OptionName = ({ option }) => {

    /* JSX */
    return (
        <div className="option-name-container">
            <p>{option?.name}</p>
        </div>
    )
}

export default OptionName