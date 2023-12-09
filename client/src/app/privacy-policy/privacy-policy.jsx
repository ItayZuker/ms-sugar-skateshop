import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import "./privacy-policy.scss"

const PrivacyPolicy = () => {

    /* Hooks */
    const location = useLocation();
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page privacy-policy">
            <h1>Privacy policy</h1>
        </div>
    )
}

export default PrivacyPolicy