import React from "react"
import { Link } from 'react-router-dom'
import "./e-form-i-agree.scss"

const EFormIAgree = ({ iAgree, setIagree, data, disclamerMessage }) => {

    /* Functions */
    const toggleIAgree = () => {
        setIagree(prev => !prev)
    }

    /* JSX */
    return (
        <div 
            onPointerDown={toggleIAgree}
            className="e-form-i-agree-container">
            <p>{disclamerMessage}</p>
            <p>Read more on <Link to="/terms-and-conditions" target="_blank">Terms and conditions.</Link></p>
            <div className={"e-form-i-agree-input-container " +
                    (iAgree ? "active " : "") +
                    (data.iAgree.error ? "error " : "")}>
                <div className="i-agree-squer">
                    <span className="material-symbols-outlined">check</span>
                </div>
                <p>I agree</p>
            </div>
        </div>
    )
}

export default EFormIAgree