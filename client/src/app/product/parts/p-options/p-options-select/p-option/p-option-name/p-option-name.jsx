import React from "react"
import "./p-option-name.scss"

const POptionName = ({ name }) => {

    /* JSX */
    return (
        <div className="p-option-name-container">
            <p>{name}:</p>
        </div>
    )
}

export default POptionName