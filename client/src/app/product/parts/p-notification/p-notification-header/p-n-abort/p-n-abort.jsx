import React from "react"
import "./p-n-abort.scss"

const PNAbort = ({ setNotifyWhenAvailable }) => {

    /* Functions */
    const handleClick = () => {
        setNotifyWhenAvailable(false)
    }

    /* JSX */
    return (
        <div 
            onClick={handleClick}
            className="p-n-abort-container">
            <span className="material-symbols-outlined">close</span>
        </div>
    )
}

export default PNAbort