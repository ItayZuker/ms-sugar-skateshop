import React from "react"
import { Link } from 'react-router-dom'
import "./e-form-i-agree.scss"

const EFormIAgree = ({ formData, setFormData }) => {

    /* Functions */
    const toggleIAgree = () => {
        setFormData(prev => ({...prev, iAgree: !prev.iAgree}))
    }

    /* JSX */
    return (
        <div 
            onPointerDown={toggleIAgree}
            className="e-form-i-agree-container">
            <p>By sending your art, you agree that Ms-Sugar might use it for commercial way. Read more on <Link to="/terms-and-conditions" target="_blank">Terms and conditions.</Link></p>
            <div className={"e-form-i-agree-input-container " + (formData?.iAgree ? "active" : "")}>
                <div className="i-agree-squer">
                    <span class="material-symbols-outlined">check</span>
                </div>
                <p>I agree</p>
            </div>
        </div>
    )
}

export default EFormIAgree