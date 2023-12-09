import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import "./terms-and-conditions.scss"

const TermsAndConditions = () => {

    /* Hooks */
    const location = useLocation();

    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page terms-and-conditions">
            <h1>Terms and conditions</h1>
        </div>
    )
}

export default TermsAndConditions