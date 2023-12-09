import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import "./faq.scss"

const Faq = () => {

    /* Hooks */
    const location = useLocation();

    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page faq">
            <h1>Faq</h1>
        </div>
    )
}

export default Faq