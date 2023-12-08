import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
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
            <h1>Exchange</h1>
        </div>
    )
}

export default Exchange