import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import EFormSection from "./e-form-section/e-form-section"
import "./exchange.scss"

const Exchange = () => {

    /* Hooks */
    const location = useLocation();

    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page exchange">
            <EFormSection/>
        </div>
    )
}

export default Exchange