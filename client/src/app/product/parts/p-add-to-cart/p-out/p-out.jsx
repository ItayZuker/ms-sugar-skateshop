import React from "react"
import "./p-out.scss"

const POut = ({ setNotifyWhenAvailable,  }) => {

    /* Functions */
    const handleClick = () => {
        setNotifyWhenAvailable(true)
    }

    /* JSX */
    return (
        <div
            onClick={handleClick}
            className="p-out-container">
            <p>Notify when available</p>
        </div>
    )
}

export default POut