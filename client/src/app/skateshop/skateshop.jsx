import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import "./skateshop.scss"

const Skateshop = () => {

    /* Hooks */
    const location = useLocation();
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page skateshop">
            <h1>Skateshop</h1>
        </div>
    )
}

export default Skateshop