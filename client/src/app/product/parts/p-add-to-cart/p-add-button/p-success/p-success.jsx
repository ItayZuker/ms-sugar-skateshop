import React from "react"
import "./p-success.scss"

const PSuccess = ({ success }) => {

    /* JSX */
    return (
        <div className={"p-success-container " + (success ? "active" : "")}>
            <span className="material-symbols-outlined">done</span>
        </div>
    )
}

export default PSuccess