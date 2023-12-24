import React, { useState } from "react"
import ValueChackBox from "./value-chack-box/value-chack-box"
import "./option-value.scss"

const OptionValue = ({ value }) => {

    /* Locale Variables */
    const [selected, setSelected] = useState(true)

    /* Functions */
    const handlePointerDown = () => {
        setSelected(prev => !prev)
    }
 
    /* JSX */
    return (
        <div
            className="option-value-container"
            onPointerDown={handlePointerDown}>
            <ValueChackBox selected={selected}/>
            <p>{value}</p>
        </div>
    )
}

export default OptionValue